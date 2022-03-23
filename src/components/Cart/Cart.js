import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping
    }

    const tax = Number((total * 10/100).toFixed(2));
    const grantTotal = total + shipping + tax 


    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Text: ${tax}</p>
            <h4>Grand Total: {grantTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;