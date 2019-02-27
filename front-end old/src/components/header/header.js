import React from 'react';
import styled from 'styled-components';

import Navigation from '../../components/header/navigation';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

class Header extends React.Component {
  render() {
    return (
      <Container>
        <Navigation />
      </Container>
    );
  }
}

export default Header;