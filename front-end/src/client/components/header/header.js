import React from 'react';
import styled from 'styled-components';

import Navigation from 'components/header/navigation';
import MenuButton from 'components/header/menu-button';
import Menu from 'components/header/menu';

import { CONTENT_BASE_URL } from 'constants/config.constants';

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  background-color: rgb(215, 215, 215);
  ${({ isMenuOpen}) => !isMenuOpen &&
    `background-image: url('${CONTENT_BASE_URL}/uploads/2018/05/home-cover.png');`
  }
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 800px;
  font-family: 'Myriad Hebrew';
  color:  #000000;
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 0.917px;
  text-align: right;
`;

const StyledImage = styled.img`
  position: absolute;
  left: calc(50% - 90px);
`;

class Header extends React.Component {
  state = {
    isMenuOpen: false
  }

  toggleIsMenuOpen = () => this.setState({ isMenuOpen: !this.state.isMenuOpen })  

  renderMenuClosed = () => (
    <React.Fragment>
      <StyledImage alt="logo" src={ `${CONTENT_BASE_URL}/uploads/2018/05/logo.png` } />
      <Navigation />
      <MenuButton onClick={ this.toggleIsMenuOpen } />    
    </React.Fragment>
  )

  renderMenuOpen = () => (
    <Menu toggleMenu={ this.toggleIsMenuOpen } />
  );

  render() {
    return (
      <Container isMenuOpen={ this.state.isMenuOpen }>
        {
          this.state.isMenuOpen
            ? this.renderMenuOpen()
            : this.renderMenuClosed()
        }
      </Container>
    );
  }
}

export default Header;
