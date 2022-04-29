import './Product.css';
import React, {useState} from 'react';
import { generatePath } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Product = (props) => {

    const[Qty, setQty] = useState(1)

    const removeButten = () =>{
        if (Qty >= 2)
        {
            setQty(Qty-1)
        }
    }

    let navigate = useNavigate(); //Switch from addToCart button to cart

    const clickHandler = () => {
        props.addToCart({id: props.id, name: props.name, price: props.price, img: props.img}, Qty);
        navigate("/cart");//Switch from addToCart button to cart
    }

    return (
        <div className='product'>
            <h3 className='name'> {props.name}</h3>
            <img className='img' src={props.img} alt={props.name}/>
            <h5 className='id'>SKU: {props.id}</h5>
            <h5 className='price'>Price: {props.price} ₪</h5>
            <div className='qtyButtons'>
                <button onClick={() => setQty(Qty + 1)} className="plusMinusButten plusMinusButten2">+</button>
                <h5 className='qty' >Qty: {Qty} </h5>
                <button onClick={() => removeButten()} className="plusMinusButten plusMinusButten2">-</button>
            </div>
            <button onClick={clickHandler} className='button button2'>Add to cart</button>
        </div>
    );
};

export default Product;