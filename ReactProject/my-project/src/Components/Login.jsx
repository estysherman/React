import './Login.css'



const Login = (props) =>{ 

    const onSubmit = () =>{
        props.onLogin("dd", "ddd")
    }

    return(
        <div className='login'>
            <input type="text" placeholder="UserName" />
            <input type="text" placeholder="Password" />

            <button onClick={onSubmit}>Login</button>
        </div>
    )
}

export default Login;