// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import { mapValues, merge } from 'lodash/fp';

import locales from 'constants/locales';
import { defaultLocale } from 'constants/locales.constants';
import { forEachWithKey } from 'utils/lodash.utils';

// Go over all of the available locales and register them
forEachWithKey((value, key) => {
  addLocaleData({
    locale: key,
    // Couldn't find any documentation about 'pluralRuleFunction', throws error if not present
    pluralRuleFunction: () => {}
  });
}, locales);

const localesWithDefaultFallback = mapValues(
  local => merge(locales[defaultLocale], local), 
  locales
);

const Localization = ({ locale, children }) => (
  <IntlProvider
    locale={locale}
    key={locale}
    messages={localesWithDefaultFallback[locale]}>
    {children}
  </IntlProvider>
);

const mapStateToProps = ({ locale }) => ({
  locale: locale.currentLocale
});

export default connect(mapStateToProps)(Localization);
