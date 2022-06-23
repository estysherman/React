import './Product.css';
import React, {useState} from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../../shared/Context';

const Product = (props) => {
    const[Qty, setQty] = useState(1)
    const ctx = useContext(Context);
    const navigate = useNavigate(); //Switch from addToCart button to cart

    const removeButten = () =>{
        if (Qty >= 2)
        {
            setQty(Qty-1)
        }
    }

    const clickHandler = () => {
        ctx.addToCart({id: props.id, name: props.name, price: props.price, img: props.img}, Qty);
        navigate("/cart");//Switch from addToCart button to cart
    }

    return (
        <div className='card text-center'>
            <h3 className='name' ><Link to={'/viewproduct/'+props.id}>{props.name}</Link></h3>
            <img className='card-img-top img-fluid' src={props.img} alt={props.name}/>
            <h5 className='card-text'>SKU: {props.id}</h5>
            <h5 className='price'>Price: {props.price} ₪</h5>
            <div className='qtyButtons'>
                <button onClick={() => setQty(Qty + 1)} className="plusMinusButten plusMinusButten2">+</button>
                <h5 className='qty' >Qty: {Qty} </h5>
                <button onClick={() => removeButten()} className="plusMinusButten plusMinusButten2">-</button>
            </div>
            <button onClick={clickHandler} className='button button2'>Add to cart</button>
            {ctx.isLogdIn === true && ctx.getUser().userType === "admin" && <Link to={'/prd/'+props.id}>Edit Product</Link>}
        </div>
    );
};

export default Product;