import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
const Product = (props) => {
    const { img, name, seller, quantity, price, ratings } = props.product;
    const handleToCart = props.handleToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price:${price}</p>
                <p className='product-seller'>Manufacturer:{seller}</p>
                <p className='product-seller'>Rating:{ratings}Stars</p>
            </div>
            <button onClick={() => handleToCart(props.product)} className='btn-cart'>Add To Cart
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;