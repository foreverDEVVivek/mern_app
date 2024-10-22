import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {useAuth} from '../store/auth.jsx';
import {toast} from 'react-toastify';

const Login = () => {
  // /?Hooks/
  const [user,setUser]=useState({
    email:"",
    password:"",
  });
  const Navigate=useNavigate();
  const {storeTokenInLS}=useAuth();

  // /?Handling Input and Submit button/
  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setUser({...user, [name]:value});
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const resp=await fetch('http://127.0.0.1:8080/api/auth/login',{
      method:"POST",
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify(user),
    })
    if(resp.ok){
      setUser({email:"",password:""});
      const response=await resp.json();
      toast.success("Logged In Successful")
      storeTokenInLS(response.token);
      Navigate('/')
    }
    else{
      const response=await resp.json();
      toast.error(response.message)
    }
  }


  return (
    <>
    <main>
      <div className="section-registration">
        <div className="container grid grid-two-cols">
          <div className="registration-image">
            <img src='/image/login-image.png' alt='Registration Image' width="800px" height="500px"></img>
          </div>
          {/* Let's tackle registration form */}
          <div className="registration-form">
            <h1 className='main-heading mb-3'>registration form</h1>
            <br/>
            <form className='signup-form' onSubmit={handleSubmit}>
              
              <div>
                <label htmlFor='email'>email</label>
                <input type='text' name='email' value={user.email} onChange={handleInput}
                placeholder='email' id='email' required autoComplete='off'></input>
              </div>
              <div>
                <label htmlFor='password'>password</label>
                <input type='password' name='password'value={user.password} onChange={handleInput} placeholder='password' id='password' required autoComplete='off'></input>
              </div>
              <br/>
              <button type='submit' className='btn btn-submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </main>
    
    </>
  )
}

export default Login