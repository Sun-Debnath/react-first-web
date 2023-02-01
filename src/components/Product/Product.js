import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Product.css'

const Product = (props) => {
    const { name, img, seller, price, stock } = props.pd;
    return (
        <div className="product">

            <div className="image">
                <img src={img} alt="" />
            </div>

            <div>

                <h4 className='product-name'>{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} available</small></p>
                <button className="main-button , btn btn-success"
                    onClick={() => props.handleAddProduct(props.pd)}>
                    <FontAwesomeIcon icon={faCartShopping} />
                    add to cart </button>

            </div>

        </div>
    );
};

export default Product;