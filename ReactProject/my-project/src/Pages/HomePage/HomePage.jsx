import './HomePage.css';
import { useContext } from 'react';
import {Link, Routes, Route} from 'react-router-dom';
import { Context } from '../../shared/Context';
import Menu from '../../Components/Menus/Menu/Menu';
import Cart from '../../Components/Cart/Cart';
import Orders from '../../Components/Orders/Orders';
import ProductsList from '../../Components/Products/ProductsList/ProductsList';
import ViewProduct from '../../Components/Products/ViewProduct/ViewProduct';

const HomePage = (props) =>{
    const ctx = useContext(Context);
    //console.log(ctx.productArr);
    const u = ctx.getUser();
    return(
        <div className='main'>
            <h1>Shermans Market</h1>
            <button onClick={() => ctx.logout()} className='button'>Log out</button>
            <Link to={'/orders/'+ ctx.getUser().email} className='user'>Hallo {ctx.getUser().userName} </Link>
            <h2>The best stock photos</h2>
            <Menu/>
            {/* <image></image> */}
            <Routes>
                <Route path='/homepage' element = {<ProductsList />}/>
                <Route path='/productsview/:cat' element = {<ProductsList />}/>
                <Route path='/viewproduct/:id' element = {<ViewProduct />}/>
                <Route path='/cart' element = {<Cart/>}/>
                <Route path='/orders/:email' element = {<Orders/>}/>
            </Routes>
        </div>
    )
}

export default HomePage;



