import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';
import HomePage from './Components/HomePage/HomePage';

import {useState, useEffect} from 'react'

function App() {
  const[users, setUsers] = useState([])
  const[isLogdIn, setIsLogdIn] = useState(false)
  const[cart, setCart] = useState([
    
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
    localStorage.setItem("activUser", username);
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
    const exist = cart.find( x=> x.product.id === product.id );
    if(exist){
      setCart(cart.map(x=> x.product.id === product.id ? {...exist,quantity:exist.quantity + 1} : x));
    }else{
      setCart([...cart,{product:product,quantity:quantity}]);
    }
  }

  const onRemove = (product, quantity) =>{
    const exist = cart.find((x)=>x.product.id === product.id)
    if(exist.quantity === 1){
      setCart(cart.filter((x)=>x.product.id !== product.id))
    }else{
      setCart(cart.map(x=> x.product.id === product.id ? {...exist,quantity:exist.quantity - 1} : x))
    }
  }

  useEffect( ()=>{
    fetchUsers();

  }, []) //useEffect runing once on mount
  
  return (
    <div className="App">
      <h1></h1>
      {isLogdIn===true && <HomePage cart={cart} addToCart={addToCart} onRemove={onRemove} />}
      {/* use loginPage and pass login and logout props */}
      {isLogdIn===false && <LoginPage login={login} logout={logout}/>}

    </div>
  );
}

export default App;
