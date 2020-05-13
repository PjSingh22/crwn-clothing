import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './collection-item.styles';

export const CollectionItem = ({item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage id='bgimage' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer id='name'>{name}</NameContainer>
        <span>$<PriceContainer id='price'>{price}</PriceContainer></span>
      </CollectionFooterContainer>
      <AddButton id='additem' onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default  connect(null, mapDispatchToProps)(CollectionItem);