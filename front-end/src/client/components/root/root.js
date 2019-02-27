import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { renderRoutes } from 'react-router-config';
import { get } from 'lodash/fp';

import { isWebEnv } from 'shared-utils/web.utils';
import { injectGlobal } from 'styled-components';

import { setCurrentLocale } from 'actions/locale.actions';
import { fetchJournals } from 'actions/journal.actions';
import { fetchProducts } from 'actions/product.actions';
import { fetchCategories } from 'actions/category.actions';

import Header from 'components/header/header';
import Home from 'components/home/home';

import {
  WOOCOOMERCE_CONSUMER_SECRET,
  WOOCOOMERCE_CONSUMER_KEY
} from 'constants/config.constants';

import { isRtlLocale } from 'utils/locale.utils';

class Root extends Component {
  static ssrApiActions = [
    fetchJournals, 
    fetchProducts,
    fetchCategories
  ];

  render() {
    const childRoutes = renderRoutes(this.props.route.routes);
    
    return (
      <div dir={ isRtlLocale(this.props.locale) ? 'rtl' : 'ltr' }>
        <Header />
        {childRoutes}
      </div>
    );
  }
}

const mapStateToProps = ({ locale }) => ({
  locale: get('currentLocale', locale)
});

export default connect(mapStateToProps, {
  setCurrentLocale
})(Root);
