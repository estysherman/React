import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';
import HomePage from './Components/HomePage/HomePage';
import {Context} from './shared/Context'

import {useState, useEffect} from 'react'

function App() {
  const[users, setUsers] = useState([])
  const [product, setProduct] = useState({views:[], cities:[], flowers:[]})
  const[isLogdIn, setIsLogdIn] = useState(false)
  const[cart, setCart] = useState([
    
  ])
  
  useEffect( ()=>{
    fetchUsers();
    const savedLogedIn = localStorage.getItem("isLogdIn")
    if (savedLogedIn && savedLogedIn === "True"){
      setIsLogdIn(true);
    }
    fetchProduct();
  
  }, []) //useEffect runing once on mount
  
  const login = (username, password) => {
    console.log(username, password, users);
  /* for (let i = 0; i < users.length; i++){
     if (users[i].username == username && users[i].password == password)
     return true;
  } 
  return false;
 */
  const u = users.find((i) => {
    if (i.userName === username && i.password === password)
      return true;
    else return false;
  }) 
  if (u)
  {
    localStorage.setItem("isLogdIn", "True");
    localStorage.setItem("activUser", JSON.stringify(u));
    setIsLogdIn(true);
    return true;
  }
  else return false;
}

const getUser = () =>{
  const user = localStorage.getItem("activUser")
  if (user){
    return JSON.parse(user)
  }
}

//loggingIn
  const logout = () => { 
    localStorage.setItem("isLogdIn", "False");
    setIsLogdIn(false);

  }

  const fetchUsers = async() => {
    const data = await fetch('users.json');
    const tempUsers = await data.json();
    console.log(tempUsers);
    setUsers(tempUsers);
    localStorage.setItem("users", JSON.stringify(tempUsers))
  }

  const fetchProduct = async() => {
    const data = await fetch('products.json');
    const tempProduct = await data.json();
    console.log(tempProduct);
    setProduct(tempProduct);
    localStorage.setItem("products", JSON.stringify(tempProduct))
  }
  
  const addToCart = (product, quantity) => {
    const exist = cart.find( x=> x.product.id === product.id );
    if(exist){
      setCart(cart.map(x=> x.product.id === product.id ? {...exist,quantity:exist.quantity + quantity} : x));
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

  const addOrders = (order) =>{
    order.date = new Date().toLocaleString();
    let orders = [];
    const localOrders = localStorage.getItem("orders");
    if (localOrders){
      orders = JSON.parse(localOrders)
    }
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));
  }

  const getOrders = (user) =>{
    let orders = [];
    const localOrders = localStorage.getItem("orders");
    if (localOrders){
      orders = JSON.parse(localOrders)
    }
    
    if(!user)
      user = getUser();
    return orders.filter(o => o.email === user.email);
  }
  
  return (
    <div className="App">
      <Context.Provider
        value={{getOrders:getOrders, cart: cart, addToCart: addToCart, onRemove: onRemove, logout: logout, getUser: getUser, addOrders: addOrders, getOrders: getOrders, users: users, product: product}}>
        {isLogdIn===true && <HomePage/>}
        {/* use loginPage and pass login and logout props */}
        {isLogdIn===false && <LoginPage login={login} logout={logout}/>}
      </Context.Provider>
    </div>
  );
}

export default App;
