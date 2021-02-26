import React from 'react';
import fakeData from '../../fakeData/index'
import {useState} from 'react'
import './shop.css'
import Product from '../product/Product';
import Cart from '../cart/Cart';


const Shop = () => {

const first10 = fakeData.slice(0,10)
const [products,setProducts] = useState(first10)
const [cart,setCart] = useState([])
const handleAddProduct = (product) =>{
  const newCart = [...cart,product] 
  setCart(newCart) 
}
    return (
        <div className="shop-container">
        <div className="product-container">
        <ul>
              {
             products.map( pd => <Product product = {pd} handleClick = {handleAddProduct}></Product>)
              }
          </ul>
        </div>

        <div className="cart-container">
        <Cart cart ={cart}></Cart>
        </div>
          
        </div>
    );
};

export default Shop;