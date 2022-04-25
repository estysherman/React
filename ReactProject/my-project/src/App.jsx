import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';
import HomePage from './Components/HomePage/HomePage';

import {useState, useEffect} from 'react'

function App() {
  const[users, setUsers] = useState([])
  const[isLogdIn, setIsLogdIn] = useState(false)
  const[cart, setCart] = useState([
    {product:{id:1, name:'Bigonia', price:20.00}, quantity:1},
    {product:{id:2, name:'Guatamala', price:50.00}, quantity:2},
  ])

  const login = (username, password) => {
    console.log(username, password, users);
  /* for (let i = 0; i < users.length; i++){
     if (users[i].username == username && users[i].password == password)
     return true;
  } 
  return false;
 */
  const u = users.find((i) => {
    if (i.userName == username && i.password == password)
      return true;
    else return false;
  }) 
  if (u)
  {
    localStorage.setItem("isLogdIn", "True");
    setIsLogdIn(true);
    return true;
  }
  else return false;
}

//loggingIn
  const logout = () => {
    localStorage.removeItem("isLogdIn");
  }

  const fetchUsers = async() => {
    const data = await fetch('users.json');
    const tempUsers = await data.json();
    console.log(tempUsers);
    setUsers(tempUsers);
    localStorage.setItem("users", JSON.stringify(tempUsers))
  }

  const addToCart = (product, quantity) => {
    const cartItem = {product, quantity};
    const tempCart = [...cart];
    tempCart.push(cartItem);
    setCart(tempCart);
  }

  useEffect( ()=>{
    fetchUsers();

  }, []) //useEffect runing once on mount
  
  return (
    <div className="App">
      <h1></h1>
      {isLogdIn===true && <HomePage cart={cart} addToCart={addToCart} />}
      {/* use loginPage and pass login and logout props */}
      {isLogdIn===false && <LoginPage login={login} logout={logout}/>}

    </div>
  );
}

export default App;
