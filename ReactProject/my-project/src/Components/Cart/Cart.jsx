import React, { useState } from 'react';
import { useContext } from 'react';
import './Cart.css';
import { Context } from '../../shared/Context';

const Cart = (props) => {
    const[orderCompleted, setOrderCompleted] = useState(false);
    const ctx = useContext(Context);

    const getSum = () =>{ //Total cost of all products in the cart
        let sum = 0.0;
        for (let i of ctx.cart){
            sum+= i.product.price * i.quantity
        }
        return sum.toFixed(2);
    }

    const getQuantity = () =>{ //Count the products added to the cart
        let quant = 0;
        for (let i of ctx.cart){
            quant+= i.quantity
        }
        return quant;
    }

    const emptyCart = () =>{ //Displays a message when the cart is empty
        let emptyMessage = "The Cart is empty";
        if (ctx.cart == 0){
            return emptyMessage;
        }
    }

    const add = (product) =>{
        ctx.addToCart(product, 1);
    }

    const remove = (product) =>{
        ctx.onRemove(product, 1);
    }

    const creatOrders = () =>{
        const order = {
            cartItems: ctx.cart, 
            total: getSum(), 
            quantity: getQuantity(),
            email: ctx.getUser().email
        };
        ctx.addOrders(order);
        setOrderCompleted(true)
        emptyCart()
    }
    
console.log(ctx.cart);
if (orderCompleted === true){
    return(
        <div>
            Order completed successfully!
        </div>
    )
}
    return (
        <div className='item'>
           {
                ctx.cart.map( item => {
                    return <div  key={item.product.id}>
                        <h3 className='title'>{item.product.name}</h3>
                        <img className='img_c' src={item.product.img}/>
                        <div >
                            <h5 className='line'>Qty: {item.quantity}</h5>
                            <h5 className='line'>Price: {item.product.price} ₪</h5>
                        </div>
                        <button onClick={() => remove(item.product)}>-</button>
                        <button onClick={() => add(item.product)}>+</button>
                    </div>
                })
            }
            <h3 className='emptyMessage'>{emptyCart()} </h3> 
           <h2 className='total'>Total ({getQuantity()} items): {getSum()}₪</h2>
           <button onClick={creatOrders}>Place yuor order</button>
           <div></div>
        </div>
    );
    
};

export default Cart;