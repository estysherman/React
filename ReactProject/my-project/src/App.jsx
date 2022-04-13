import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';
import {useState, useEffect} from 'react'


function App() {
  const[users, setUsers] = useState([])

  const Login = (username, password) => {
//loggingIn
  }

  const fetchUsers = async() => {
    const data = await fetch('users.json');
    const tempUsers = await data.json();
    console.log(tempUsers);
    setUsers(tempUsers);
  }

  useEffect( ()=>{
    fetchUsers();

  }, [])
  
  return (
    <div className="App">
      <Login Login={Login}/>
    </div>
  );
}

export default App;
