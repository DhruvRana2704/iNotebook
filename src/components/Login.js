import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
const Login = (props) => {
    let navigate=useNavigate();
    const handleOnChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const [credentials,setCredentials]=useState({email:'',password:''})
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(e)
        const response=await fetch("http://localhost:5000/api/auth/login",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({email:credentials.email,password:credentials.password})
    });
    const json=await response.json()
    console.log(json)
    if(json.success){
        props.showAlert('Logged in Successfully','success')
        localStorage.setItem('token',json.authtoken)
        navigate('/')
    }
    else{
        props.showAlert('Invalid Credentials','danger')
    }
    
}
    return (
        <div>
            <h2 style={{marginTop:"6rem"}}>Login to continue to iNotebook</h2>
            <form  onSubmit={handleSubmit} style={{margin:"auto auto"}}>
                <div className="form-group my-3">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" onChange={handleOnChange} value={credentials.email} id="email" name='email' aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" onChange={handleOnChange} value={credentials.password} name='password' placeholder="Password"/>
                </div>
                <div className="form-check">
           
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default Login