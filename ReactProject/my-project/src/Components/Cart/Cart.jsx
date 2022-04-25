import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const getSum = () =>{
        let sum = 0.0;
        for (let i of props.cart){
            sum+= i.product.price * i.quantity
        }
        return sum;
    };

    const getQuantity = () =>{
        let quant = 0.0;
        for (let i of props.cart){
            quant+= i.quantity
        }
        return quant;
    };

    return (
        <div>
           {
                props.cart.map( item => {
                    return <div key={item.product.id}>
                        <h3>{item.product.name}</h3>
                        <h5>{item.product.price}</h5>
                        <p>{item.quantity}</p>
                    </div>
                })
           }
           <h2>Total ({getQuantity()}) items: {getSum()} ₪</h2>
        </div>
    );
};

export default Cart;