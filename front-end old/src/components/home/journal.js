import React from 'react';
import styled from 'styled-components';
import CarouselSlider from 'react-carousel-slider';

import JournalItem from '../../components/home/journal-item';

let latestItems = [{ title: 'f/w 18' }, { title: 'dessert storms' }, { title: 'new vids' }, { title: 'latest collabs' }, { title: 'f.r 1' }]
latestItems = latestItems.map((item) => ({ key: item.title, ...item }));

const Container = styled.div`
  width: 100%;
`;

const Header = styled.h1`
  
`;

class Journal extends React.Component {
  getItems = () =>
    latestItems.map((item) => (
      <div>
        <img alt="" src="http://localhost:8888/wordpress/wp-content/uploads/2018/05/Jennifer_Lopez_at_GLAAD_Media_Awards_cropped.jpg" />
        <p>dsgfgfd</p>
      </div>
    ))

  render() {
    return (
      <Container>
        <Header>Journal</Header>
        <CarouselSlider slideCpnts = {this.getItems()} />
      </Container>
    )
  }
}

export default Journal;