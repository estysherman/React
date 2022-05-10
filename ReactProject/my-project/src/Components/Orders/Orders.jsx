import React, {useContext} from 'react';
import './Orders.css';
import {Context} from '../../shared/Context';
import { useParams } from 'react-router-dom';

const Orders = (props) => {
    const params = useParams();
    console.log(params.email)
    const context = useContext(Context);
    return(
        <div className='item'>
        {
             context.getOrders({email: params.email}).map( order => {
                 return <div  key={order.date}>
                     {
                         order.cartItems.map( item => {
                                return <div  key={item.product.id}>
                                    <h3>{item.product.name}</h3>
                                    <img src={item.product.img}/>
                                    <div >
                                        <h5>Qty: {item.quantity}</h5>
                                        <h5>Price: {item.product.price} ₪</h5>
                                    </div>
                                </div>
                            }
                         )
                     }
                    <h3>{order.date}</h3>
                    <h5>Qty: {order.quantity}</h5>
                    <h5>total: {order.total} ₪</h5>
                    <hr/>
                 </div>
             })
         }
     </div>

    )
 
};

export default Orders;