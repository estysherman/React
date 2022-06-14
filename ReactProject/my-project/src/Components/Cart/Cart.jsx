import React, { useState } from 'react';
import { useContext } from 'react';
import './Cart.css';
import { Context } from '../../shared/Context';
import { ToastContainer, toast } from 'react-toastify';


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

    const emptyCartMessage = () =>{ //Displays a message when the cart is empty
        let emptyMessage = "The Cart is empty";
        if (ctx.cart == 0){
            return emptyMessage;
        }
    }

    const add = (product) =>{
        ctx.addToCart(product, 1);
        toast(`✔️ The item was addad to the cart!`)
    }

    const remove = (product) =>{
        ctx.onRemove(product, 1);
        toast(`✔️ The item was remove from the cart!`)
    }

    const creatOrders = () =>{
        const order = {
            orderItems: ctx.cart, 
            total: getSum(), 
            quantity: getQuantity(),
            email: ctx.getUser().email,
            orderNum: new Date().getTime()
        };
        if (order.quantity < 1){
            toast("Oops, you forgot to add the products to the cart. Add Products Try again.")
            return 
        } else{
            ctx.addOrUpdateOrders(order);
            toast("✔️ Order completed successfully!")
            setOrderCompleted(true)
            emptyCartMessage()
        }
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
            <h3 className='emptyMessage'>{emptyCartMessage()} </h3> 
           <h2 className='total'>Total ({getQuantity()} items): {getSum()}₪</h2>
           <button onClick={creatOrders}>Place yuor order</button>
           <div></div>
           <ToastContainer />
        </div>
    );
    
};

export default Cart;