import './HomePage.css';
import { useContext } from 'react';
import {Link, Routes, Route} from 'react-router-dom';
import { Context } from '../../shared/Context';
import Menu from '../Menu/Menu';
import Cart from '../Cart/Cart';
import Orders from '../Orders/Orders';
import Admin from '../Admin/Admin';
import Products from '../Products/Products';

const HomePage = (props) =>{
    const ctx = useContext(Context);

    return(
        <div className='main'>
            <h1>Stock Photos</h1>
            {ctx.getUser().userType == "admin" && <Link to={'/admin'}>Admin</Link> }
            <button onClick={() => ctx.logout()} className='button'>Log out</button>
            <Link to={'/orders/'+ ctx.getUser().email} className='user'>Hallo {ctx.getUser().userName} </Link>
            <h2>The best stock photos</h2>
            <Menu/>
            {/* <image></image> */}
            <Routes>
                <Route path='/homepage' element = {<span>HomePage</span>}/>
                <Route path='/flowers' element = {<Products products={ctx.product.flowers}/>}/>
                <Route path='/views' element = {<Products products={ctx.product.views}/>}/>
                <Route path='/cities' element = {<Products products={ctx.product.cities}/>}/>
                <Route path='/cart' element = {<Cart/>}/>
                <Route path='/orders/:email' element = {<Orders/>}/>
                <Route path='/admin' element = {<Admin />}/>
            </Routes>
        </div>
    )
}

export default HomePage;



