
import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
const SignUp = (props) => {
    let navigate=useNavigate();
    const handleOnChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const [credentials,setCredentials]=useState({name:'',email:'',password:''})

    const handleSubmit=async(e)=>{
        const {name,email,password}=credentials;
        e.preventDefault();
        console.log(e)
        const response=await fetch("https://inotebook-backend-9w7i.onrender.com/api/auth/createuser",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({name,email,password})
    });
    const json=await response.json()
    console.log(json)
    if(json.success){
        props.showAlert('Account Created Successfully','success')
        localStorage.setItem('token',json.authtoken)
        navigate('/')
    }
    else{
        props.showAlert('Invalid Details','danger')
    }
    
}
  return (
    <div>
        <h2 style={{marginTop:"6rem"}}>Create an account to continue </h2>
      <form  onSubmit={handleSubmit} style={{margin:"auto auto"}}>
                <div className="form-group my-3">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" onChange={handleOnChange} value={credentials.name} id="name" name='name' aria-describedby="emailHelp" placeholder="Enter name" required/>
                        
                </div>
                <div className="form-group my-3">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" onChange={handleOnChange} value={credentials.email} id="email" name='email' aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" onChange={handleOnChange} value={credentials.password} name='password' placeholder="Password" minLength={5} required/>
                </div>
                <div className="form-check">
           
                </div>
                <button type="submit" className="btn btn-primary">Signup</button>
            </form>
    </div>
  )
}

export default SignUp
