import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    console.log(props)
    const {name, img, seller,price, stock} = props.product;
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt=""/> 
            </div>
            <div className="product-info">
                <h4>{props.product.name}</h4>
                <p><small>by {seller}</small></p>
                <h5>$ {price}</h5>
                <p><small>Only <b>{stock}</b> left in stock - Order Soon</small></p>

                <button className="main-button" onClick={ () => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>

        </div>
    );
};

export default Product;