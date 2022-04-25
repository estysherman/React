import './Product.css';
import React from 'react';

const Product = (props) => {

    const clickHandler = () => {
        props.addToCart({id: props.id, name: props.name, price:20.00}, 1);
    }
    return (
        <div className='product'>
            <h3 className='name'> {props.name}</h3>
            <div className='id'>SKU: {props.id}</div>
            <div className='price'>Price: {props.price} ILS</div>
            <img className='img' src={props.img} alt={props.name}/>
            <button onClick={clickHandler} className='button button2'>Add to cart</button>
        </div>
    );
};

export default Product;