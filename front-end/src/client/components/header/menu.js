import { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { map, isEmpty } from 'lodash/fp';
import { Link } from 'react-router-dom';
import { injectIntl } from 'react-intl';

import { getCategoriesTree } from 'selectors/categories.selectors';

import { isRtlLocale } from 'utils/locale.utils';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #fff;
  border: 3px solid #000;
`;

const Items = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding: 50px;
  height: 100%;
`;

const CloseButton = styled.div`
  cursor: pointer;
  position: relative;
  height: 40px;
  width: 40px;
  top: 15px;
  left: ${({ locale }) => isRtlLocale(locale) ? '-' : ''}10px;
  
  div {
    position: absolute;
    width: 80%;
    height: 5px;
    background-color: #000;
    top: 11px;
    left: 3px;
  }
`;

const FirstLine = styled.div`
  transform: rotate(130deg);
`;

const SecondLine = styled.div`
  transform: rotate(230deg);
`;

const Item = styled.div`
  ${({ shouldHide }) => shouldHide ? 'opacity: 0.2;' : 'opacity: 1;'}
  transition: all 300ms linear;
  font-size: 72px;
  cursor: pointer;
  transition
`;

const Child = styled.div`
  font-size: 50px;
  cursor: pointer;
`;

const Parent = styled(Item)`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Line = styled.div`
  height: 2px;
  width: 100%;
  background-color: #000;
`;

const Children = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  justify-content: ${({ justifyContent }) => justifyContent};
  height: 100%;
`;

class Menu extends Component {
  state = {
    openCategoryId: null
  }

  categoryClicked = (categoryId) => {
    if (this.state.openCategoryId == categoryId) {
      this.setState({ openCategoryId: null });      
    } else {
      this.setState({ openCategoryId: categoryId });
    }
  }

  renderItem = (category) => (
    <Item key={ category.id } 
          onClick={ () => this.setState({ openCategoryId: null }) }
          shouldHide={ this.state.openCategoryId !== null && this.state.openCategoryId !== category.id }>
      <span>{ category.name }</span>
    </Item>
  );

  renderParent = category => (
    <Parent key={ category.id } 
            onClick={ () => this.categoryClicked(category.id) } 
            shouldHide={ this.state.openCategoryId !== null && this.state.openCategoryId !== category.id }>
      <span>{ category.name }</span>
      { 
        this.state.openCategoryId === category.id &&
        <Line />  
      }
    </Parent>
  );

  renderChild = category => (
    <Child key={ category.id } 
          onClick={ () => this.setState({ openCategoryId: null }) }>
      <span>{ category.name }</span>
    </Child>
  )

  render() {
    const { categories, toggleMenu } = this.props;

    return (
      <Container>
        <CloseButton onClick={ toggleMenu } locale={ this.props.locale }>
          <FirstLine />
          <SecondLine />
        </CloseButton>
        <Items>
          <Children justifyContent="space-around">
            {
              map(category => !isEmpty(category.children)
                ? this.renderParent(category)
                : this.renderItem(category)
              , categories)
            }
            {
              ['navigation.journal', 'navigation.insparaton', 'navigation.search'].map((translationKey, index) => 
                this.renderItem({ 
                  name: this.props.intl.formatMessage({ id: translationKey }), 
                  id: index 
                }))
            }
          </Children>
          {
            this.state.openCategoryId &&
            <Children justifyContent="flex-start">
              {
                map(category => 
                  this.renderChild(category), categories[this.state.openCategoryId].children)
              }
            </Children>
          }
        </Items>
      </Container>
    )  
  }
}

const mapStateToProps = state => ({
  categories: getCategoriesTree(state),
  locale: state.locale.currentLocale
});

export default connect(mapStateToProps)(injectIntl(Menu));