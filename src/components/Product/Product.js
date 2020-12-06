import React from 'react';

const Product = (props) => {
    const { addToCart, product } = props;

    return (
        <div style={{
            maxWidth: '50%',
            border: '1px solid tomato',
            margin: '5px 10px',
            padding: '10px',
        }}>
            <h2>{product.name}</h2>
            <button
                onClick={() => addToCart(product.id, product.name)}
            >Add to Cart</button>
        </div>
    );
};

export default Product;