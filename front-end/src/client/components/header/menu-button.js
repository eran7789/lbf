import { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { isRtlLocale } from 'utils/locale.utils';

const Container = styled.div`
  position: absolute;
  ${({ locale }) => isRtlLocale(locale) ? 'right' : 'left'}: 0;
  top: 50%;
`;

const MenuLinkButton = styled(Link)`
  display: block;
  width: 32px;
  height: 40px;
  background-color: #fff;
  padding: 32px;
  border: 4px solid #070808;
`;

const Line = styled.div`
  width: 100%;
  height: 5px;
  background-color: #000;
  margin: 5px 0;
  border-radius: 20px;
`;

const MenuButton = ({ onClick, locale }) => (
  <Container onClick={ onClick } locale={ locale }>
    <MenuLinkButton to="">
      <Line />
      <Line />
      <Line />
      <Line />
    </MenuLinkButton>
  </Container>
);

const mapStateToProps = ({ locale }) => ({
  locale: locale.currentLocale
});

export default connect(mapStateToProps)(MenuButton);