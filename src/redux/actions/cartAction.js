export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = (cartId, name) => {
    return {type: ADD_TO_CART, cartId, name}
}

export const removeFromCart = cartId => {
    return {type: REMOVE_FROM_CART, cartId}
}