import React from 'react';
import './Admin.css';
import { Link } from 'react-router-dom';
import Orders from '../Orders/Orders';

const Admin = (props) => {


    return (
        <div>
            {props.users.map(user =>{
                return(
                    <div key={user.email}>
                        <h3>name {user.userName}</h3>   
                        <h3>email {user.email}</h3>   
                        <img src={user.pic}></img>   
                        <h3>Type {user.userType}</h3>  
                        <Link to={`/orders/${user.email}`}>Show Orders</Link>
                        <hr/> 
                    </div>
                )
            }
            )}

        </div>
    );
};

export default Admin;