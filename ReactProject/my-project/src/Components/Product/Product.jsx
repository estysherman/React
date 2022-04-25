import './Product.css';
import React from 'react';
import { generatePath } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Product = (props) => {

    let navigate = useNavigate(); //Switch from addToCart button to cart

    const clickHandler = () => {
        props.addToCart({id: props.id, name: props.name, price: props.price, img: props.img}, 1);
        navigate("/cart");//Switch from addToCart button to cart
    }

    return (
        <div className='product'>
            <h3 className='name'> {props.name}</h3>
            <img className='img' src={props.img} alt={props.name}/>
            <h5 className='id'>SKU: {props.id}</h5>
            <h5 className='price'>Price: {props.price} ₪</h5>
            <button onClick={clickHandler} className='button button2'>Add to cart</button>
        </div>
    );
};

export default Product;