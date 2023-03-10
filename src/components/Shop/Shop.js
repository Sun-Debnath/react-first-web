import React from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0, 15);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        const newCart = [...cart, product,];
        setCart(newCart);
    }

    return (
        <div className="shop-container">

            <div className="product-container">
                {
                    products.map(product =>
                        <Product
                            handleAddProduct={handleAddProduct}
                            pd={product}>
                        </Product>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
                

            </div>

        </div>
    );
};

export default Shop;