import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import { setCurrentLocale } from 'actions/locale.actions';

import { locales } from 'constants/locales.constants';

const Container = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const NavigationItem = styled(Link)`
  outline: none;
  text-decoration: none;
  color: #000;
`;

const Locale = styled.span`
  text-transform: uppercase;
`;

class Navigation extends React.Component {
  render() {
    return (
      <Container>
        <NavigationItem to="">
          <FormattedMessage id="navigation.search" />
        </NavigationItem>
        <NavigationItem to="">
          <FormattedMessage id="navigation.home" />
        </NavigationItem>
        <NavigationItem to="">
          <FormattedMessage id="navigation.journal" />
        </NavigationItem>
        <NavigationItem to="">
          <FormattedMessage id="navigation.currency" />
        </NavigationItem>
        <NavigationItem to="">
          <FormattedMessage id="navigation.language" />
         { locales.map(locale =>  <Locale key={ locale } onClick={ () => this.props.setCurrentLocale(locale)}>{locale}</Locale>) }
        </NavigationItem>
        <NavigationItem to="">
          <FormattedMessage id="navigation.cart" />
        </NavigationItem>
      </Container>
    )
  }
}

const mapStateToProps = ({ locale }) => ({
  locale: locale.currentLocale
});

export default connect(mapStateToProps, { setCurrentLocale })(Navigation);