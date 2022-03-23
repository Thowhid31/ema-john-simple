import React, { useEffect, useState } from 'react';
import { addToDb } from '../../../../utilities/fakedb';
import Cart from '../../../Cart/Cart';
import Product from '../../../Product/Product';
import './Shop.css'

const Shop = (product) => {
    const [products, setProduct] = useState([]);
    const[cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, []);


    const handlerClick = (product ) => {
        // cart.push(product)
        const newCart = [...cart, product];
        setCart(newCart)
        addToDb(product.id)
    }

    


    return (
        <div className='shop-container'>
            <div className="products-container">
                
                {
                    products.map(product => <Product key={product.id}
                    product={product}
                    handlerClick={handlerClick}></Product>)
                }
                
                </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;