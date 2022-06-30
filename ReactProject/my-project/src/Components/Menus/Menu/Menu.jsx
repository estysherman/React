import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../../shared/Context';
import './Menu.css';
import SearchBar from '../SearchBar/SearchBar';

const Menu = () => {
    const ctx = useContext(Context);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className='items d-flex flex-fill flex-column'>
                <div className="collapse navbar-collapse p-2">
                    <Link className="navbar-brand active" to={"/"}>HomePage</Link>
                    <ul className="navbar-nav mr-auto p-2">
                        {ctx.ctg.map((cat) =>
                            <li className="nav-item" key={cat}><Link className="nav-link" to={`/productsview/${cat}`}>{cat}</Link></li>
                        )}
                        <li className="nav-item"><Link className="nav-link" to={"/about"}>About us</Link></li>
                    </ul>
                    <Link className='btn btn-outline-light btn-cart' to={"/cart"}>🛒 Cart</Link>                   
                    <i className="bi bi-filter-square-fill" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation"></i>

                </div>
                <div className="collapse p-2" id="navbarToggleExternalContent">
                    <SearchBar />
                    {/* <div class="bg-dark p-4">
                <h4 class="text-white">Collapsed content</h4>
                <span class="text-muted">Toggleable via the navbar brand.</span>
                </div> */}
                </div>
            </div>
        </nav>
        // <div className='menu'>
        //     <ul>
        //         <li><Link className="active" to={"/"}>HomePage</Link></li>
        //         {ctx.ctg.map((cat) =>
        //             <li key={cat}><Link to={`/productsview/${cat}`}>{cat}</Link></li>
        //             )}
        //             <li style={{backgroundColor: '#008CBA'}}><Link style={{color: "white"}} to={"/about"}>About us</Link></li>
        //         <li style={{float:"right", backgroundColor: '#008CBA'}}><Link style={{color: "white"}} to={"/cart"}>🛒 Cart</Link></li>
        //         <li style={{float:"right"}}><SearchBar/></li>
        //     </ul>

        // </div>
    );
};

export default Menu;


