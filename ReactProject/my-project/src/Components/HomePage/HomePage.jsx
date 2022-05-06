import './HomePage.css';

import {Link, Routes, Route} from 'react-router-dom';
import Menu from '../Menu/Menu';
import Flowers from '../Flowers/Flowers';
import Views from '../Views/Views';
import Cities from '../Cities/Cities';
import Cart from '../Cart/Cart';
import Orders from '../Orders/Orders';
import Admin from '../Admin/Admin';

const HomePage = (props) =>{
    
    return(
        <div className='main'>
            <h1>Stock Photos</h1>
            {props.getUser().userType == "admin" && <Link to={'/admin'}>Admin</Link> }
            <button onClick={() => props.logout()} className='button'>Log out</button>
            <Link to={'/orders'} className='user'>Hallo {props.getUser().userName} </Link>
            <h2>The best stock photos</h2>
            <Menu/>
            {/* <image></image> */}
            <Routes>
                <Route path='/homepage' element = {<span>HomePage</span>}/>
                <Route path='/flowers' element = {<Flowers addToCart={props.addToCart}/>}/>
                <Route path='/views' element = {<Views addToCart={props.addToCart}/>}/>
                <Route path='/cities' element = {<Cities addToCart={props.addToCart}/>}/>
                <Route path='/cart' element = {<Cart cart={props.cart} onRemove={props.onRemove} addToCart={props.addToCart} getUser={props.getUser} addOrders={props.addOrders}/>}/>
                <Route path='/orders/:email' element = {<Orders getOrders={props.getOrders}></Orders>}/>
                <Route path='/admin' element = {<Admin users={props.users} getOrders={props.getOrders}/>}/>
            </Routes>
        </div>
    )
}

export default HomePage;



