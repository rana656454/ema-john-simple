import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css'
const Product = (props) => {
    const {img,name,seller,price,stock} = props.product
    return (
        <div className="product">
           <div className="product-img">
               <img src={img} alt=""/>
           </div>
           <div className="product-info">
           <h4 className="product-name">{name}</h4>
           <p><small>by: {seller}</small></p>
           <p>Price: ${price}</p>
           <p><small>only {stock} left in stock - order soon</small></p>
           <button className="cart-btn" onClick={()=>props.handleClick(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
           </div>
            
        </div>
    );
};

export default Product;