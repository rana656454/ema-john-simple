import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    const total = cart.reduce((total,prd)=>total+prd.price,0)
    let shipping = 0
    if (total>35){
        shipping = 0
    }
    else if (total>15){
        shipping = 4.99
    }
    else if(total>0) {
        shipping=12.99
    }
    let vat = (total/10).toFixed(2)
    return (
        <div>
           <h2>Order Summary</h2>
            <h5>item order: {cart.length}</h5>
            <p>Item Price : {total}</p>
            <p>Shipping Price: {shipping}</p>
            <p>vat/tax:{vat}</p>
            <p>Total Price:{total+shipping+ Number(vat)}</p>
        </div>
    );
};

export default Cart;