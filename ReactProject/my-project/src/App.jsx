import './App.css';
import Login from './Components/Login';
import {useState, useEffect} from 'react'


function App() {
  const[users, setUsers] = useState([])

  const onLogin = (username, password) => {

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
      <Login onLogin={onLogin}/>
    </div>
  );
}

export default App;
