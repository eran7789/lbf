import { Component } from 'react';
import styled from 'styled-components';
import { FormattedMessage, injectIntl } from 'react-intl';

import Journal from 'components/home/journal';
import ClearTextInput from 'components/common/clear-text-input';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { CONTENT_BASE_URL } from 'constants/config.constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Shop = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ShopItem = styled.div`
  display: flex;
  align-items: center;
  font-family: Helvetica;
  color: #000000;
  font-size: 50px;
  font-weight: 400;
  text-align: right;
`;

const Seperator = styled.div`
  width: 90%;
  height: 5px;
  background-color:  #ebebeb;
  align-self: center;
  margin: 20px 0;
`;

const SocialAndCredit = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Myriad Hebrew';
  color:  #000000;
  font-size: 33px;
  font-weight: 400;
  letter-spacing: 1.333px;
  padding: 0 50px;
`;

const Name = styled.div`
  display: flex;
  justify-content: center;
`;

const CallToAction = styled.div`
  display: flex;
  justify-content: space-around;
  height: 200px;
  align-items: center;
`;

const ActionButton = styled.div`
  background-color: ${({ action }) => action === 'enter' ? '#ebebeb' : '#fff'};
  height: 67px;
  width: 35%;
  border: 3px solid #ebebeb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Helvetica;
  color: #000;
  font-size: 41px;
  font-weight: 400;
  text-transform: uppercase;
  cursor: pointer;

  &:hover { 
    background-color: #ebebeb;
  }

  input {
    height: 100%;
    width: 100%;
    font-family: Helvetica;
    font-size: 41px;
    font-weight: 400;
    text-align: center;
  }
`;

class Home extends Component {
  render() {
    const inputPlaceholder = this.props.intl.formatMessage({ id: "home.enter.email" });

    return (
      <Container>
        <Shop>
          <ShopItem>
            <div>
              <FormattedMessage id="home.shop.men" />
            </div>
            <img alt="shop-men" src={ `${CONTENT_BASE_URL}/uploads/2018/05/shop-men.png` } />
          </ShopItem>
          <ShopItem>
            <img alt="shop-women" src={ `${CONTENT_BASE_URL}/uploads/2018/05/shop-women.png` } />
            <div>
              <FormattedMessage id="home.shop.women" />
            </div>
          </ShopItem>
        </Shop>
        <Seperator />
        <Journal />
        <Seperator />
        <CallToAction>
          <ActionButton action="enter">
            <ClearTextInput color="#000" placeholder={ inputPlaceholder } />
          </ActionButton>
          <ActionButton>
            <FormattedMessage id="home.join.mailing" />
          </ActionButton>
        </CallToAction>
        <Seperator />
        <Name>
          <img alt="led by fear" src="http://localhost:8888/wordpress/wp-content/uploads/2018/05/led-by-fear.png" />
        </Name>
        <SocialAndCredit>
          <div>
            <FormattedMessage id="home.design.statement" />
          </div>
          <div>
          <img alt="soundcloude" src="http://localhost:8888/wordpress/wp-content/uploads/2018/05/soundcloude.png" />            
          <img alt="thumblr" src="http://localhost:8888/wordpress/wp-content/uploads/2018/05/thumblr.png" />            
          <img alt="facebook" src="http://localhost:8888/wordpress/wp-content/uploads/2018/05/facebook.png" />            
          <img alt="instagram" src="http://localhost:8888/wordpress/wp-content/uploads/2018/05/instagram.png" />            
          <img alt="pinterest" src="http://localhost:8888/wordpress/wp-content/uploads/2018/05/pintrest.png" />            
          </div>
        </SocialAndCredit>
      </Container>      
    );
  }
}

export default injectIntl(Home);
