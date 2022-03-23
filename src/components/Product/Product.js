import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {product, handlerClick} = props
    const {name, img, seller, price, ratings} = product;

    

    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="img-class">
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
                
                
            </div>
            <button onClick={() => handlerClick(product)} className='btn-cart'>
                <p>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>
            </button>
        </div>
    );
};

export default Product;