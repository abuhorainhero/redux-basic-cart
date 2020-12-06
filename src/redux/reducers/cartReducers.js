import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartAction";

const initialState = {
    cart: [],
    products: [
        { name: 'Afsus Laptop', id: 1},
        { name: 'Dell Laptop', id: 2},
        { name: 'Hp Laptop', id: 3},
        { name: 'Tosiba Laptop', id: 4},
        { name: 'Lenovo Laptop', id: 5},
    ],
}

export const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newItem = {
                productId: action.cartId,
                name: action.name,
                cartId: state.cart.length + 1,
            }
            const newCart = [...state.cart, newItem];
            return {...state, cart: newCart };

        case REMOVE_FROM_CART:
            const cartId = action.cartId;
            const remainingCart = state.cart.filter(item => item.cartId !== cartId);
            return { ...state, cart: remainingCart }

        default:
            return state;
    }
}