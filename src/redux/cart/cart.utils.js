export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

  if (existingCartItem) { 
    return cartItems.map(cartItem => 
      cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
    ); //if cart item already exists in the cart then add 1 to it, else return the cartItem
  }
  return [...cartItems, {...cartItemToAdd, quantity: 1}] 
}; /*if cart item does not exist then return an array with any other cart items already added
plus the new cartItemToAdd with a base quantity of 1*/

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  };

  return cartItems.map(
    cartItem => cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} 
    :
    cartItem
  );
}