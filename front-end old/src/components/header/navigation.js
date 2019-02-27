import React from 'react';
import styled from 'styled-components';

import NavigationItem from '../../components/header/navigation-item';

let NavigationItems = [{ title: 'Search' }, { title: 'Home' }, { title: 'Journal' }, { title: 'Currency' }, { title: 'Language: EN' }, { title: 'Cart' } ];
NavigationItems = NavigationItems.map((item) => ({ ...item, key: item.title }));

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

class Navigation extends React.Component {


  render() {
    return (
      <Container>
        { 
          NavigationItems.map((item) => <NavigationItem { ...item } />)
        }
      </Container>
    )
  }
}

export default Navigation;