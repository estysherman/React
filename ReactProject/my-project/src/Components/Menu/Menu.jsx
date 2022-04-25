import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
    return (
        <div className='menu'>
            <ul>
                <li><Link className="active" to={"/homepage"}>HomePage</Link></li>
                <li><Link to={"/flowers"}>Flowers</Link></li>
                <li><Link to={"/views"}>Views</Link></li>
                <li><Link to={"/cities"}>Cities</Link></li>
                <li style={{float:"right", backgroundColor: '#008CBA'}}><Link style={{color: "white"}} to={"/cart"}>🛒 Cart</Link></li>
            </ul>

        </div>
    );
};

export default Menu;


