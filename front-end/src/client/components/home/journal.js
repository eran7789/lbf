import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Slider from 'react-slick';

import JournalItem from 'components/home/journal-item';

import { getHomeJournals } from 'selectors/journals.selectors';
import { isRtlLocale } from '../../utils/locale.utils';

const Container = styled.div`
  width: 90%;
  align-self: center;
  direction: ltr !important;
`;

const Header = styled.div`
  font-family: Helvetica;
  color:  #000000;
  font-size: 40px;
  font-weight: 400;
  text-align: center;
`;

const Item = styled.div`
  display: flex !important;
  justify-content: center;
  flex-direction: column;
  align-items: start;
  font-family: 'Myriad Hebrew';
  color:  #000000;
  font-size: 33px;
  font-weight: 400;
  letter-spacing: 1.333px;
  text-align: left;
  padding: 0 50px;

  &:focus {
    outline: none;
  }

  img {
    width: 517px;
    height: 373px;
  }
`;

let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

class Journal extends React.Component {
  getItems = () =>
    this.props.journals.map(journal => (
      <Item key={journal.id}>
        <img alt="journal preview image" src={ journal.acf.homePageImage } />
        <p>{ journal.title.rendered }</p>
        <div>...</div>
      </Item> 
    ))

  render() {
    if (isRtlLocale(this.props.locale)) {
      settings.direction = 'rtl';
    } else {
      settings.direction = 'ltr';
    }

    return (
      <Container>
        <Header>Journal</Header>
        <Slider { ...settings }>
          {this.getItems()}
        </Slider>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  journals: getHomeJournals(state),
  locale: state.locale.currentLocale
})

export default connect(mapStateToProps)(Journal);