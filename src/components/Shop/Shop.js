import React, { useState } from 'react';
import fakeData from '../../fakeData'
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../../components/Cart/Cart'

const Shop = () => {
    const first_10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first_10);
    // console.log(first_10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        console.log("clicked done", product);
        const newCart = [...cart, product]
        setCart(newCart);
    }

    return (
        <div className="shop-container">
          <div className="product-container">
            <h3>Average Products item:{products.length}</h3>
            {
              products.map(item => 
              <Product handleAddProduct = {handleAddProduct} product={item}></Product>)
            }
          </div>
          <div className="cart-container">
            <Cart cart={cart}></Cart>
          </div>
        </div>
    );
};

export default Shop;