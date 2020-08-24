import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    // const total = cart.reduce( (total, prd) => total + prd.price , 0)
    let total = 0;
    for( let i = 0; i < cart.length; i++){
        const prd = cart[i];
        total = total + prd.price;
    };
    let shipping = 0;
    if(total>35){
        shipping = 0;
    }
    else if(total>15) {
        shipping = 5;
    }
    else if(total>0){
        shipping =12.95;
    }
    let vatTax = (total * 0.05).toFixed(2); // now it's a string;
    vatTax = Number(vatTax); // now it's a number

    const numberFormat = num => {
        const value = num.toFixed(2);
        return (Number(value))
    }
    let grandTotal = (total + shipping +vatTax).toFixed(2);
    grandTotal = Number(grandTotal);
    return (
        <div className="order-summary">
            <h4>Order Summary</h4>
            <p>Items ordered: {cart.length}</p>
            <p>Product Prices: {numberFormat(total)}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Vat + Tax: {vatTax} </small></p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;