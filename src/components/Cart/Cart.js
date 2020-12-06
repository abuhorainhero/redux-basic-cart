import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartAction';

const Cart = (props) => {
    const { cart, removeFromCart } = props;
    return (
        <div>
            <h2>This is a Cart</h2>
            <ul>
                {
                    cart.map(pd => <li key={pd.cartId}> {pd.name}
                        <button
                            onClick={() => removeFromCart(pd.cartId)}
                        >X</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cart: state.cart
})

const mapDispatchTo = {
    removeFromCart: removeFromCart
}

export default connect(mapStateToProps, mapDispatchTo)(Cart);