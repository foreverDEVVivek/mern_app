import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import {toast} from 'react-toastify';

const Signup = () => {
  const [user,setUser]=useState({
    username:"",
    email:"",
    phone:"",
    password:"",
  });
  const navigate=useNavigate();
  const {storeTokenInLS} = useAuth();

  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setUser({...user, [name]:value});
  }

  const handleSubmit=async(e)=>{
   try {
    
    e.preventDefault();
    const options={
      method:"POST",
      headers:{
        "Content-Type":'application/json'
      },
      body:JSON.stringify(user),
    }
    const resp=await fetch('http://127.0.0.1:8080/api/auth/register',options);
    console.log(resp);
    if(resp.ok){
      //parsing json into object
      const data=await resp.json();
      toast.success("Your Account has been created!");
      storeTokenInLS(data.token);
      setUser({username:"",email:"",phone:"",password:""});
      navigate("/login");
    }
    else{
      const err=await resp.json();
      toast.error(err.message?err.message:"Email has been registered already") 
    }
   } catch (error) {
    console.log(error);
   }
  }

  return (
    <>
    <main>
      <div className="section-registration">
        <div className="container grid grid-two-cols">
          <div className="registration-image">
            <img src='/image/signup-image.png' alt='Registration Image' width="500px" height="500px"></img>
          </div>
          {/* Let's tackle registration form */}
          <div className="registration-form">
            <h1 className='main-heading mb-3'>registration form</h1>
            <br/>
            <form className='signup-form' onSubmit={handleSubmit}>
              <div>
                <label htmlFor='username'>Username</label>
                <input type='text' name='username' value={user.username} onChange={handleInput} placeholder='Username' id='username' required autoComplete='off'></input>
              </div>
              
              <div>
                <label htmlFor='email'>email</label>
                <input type='text' name='email' value={user.email} onChange={handleInput}
                placeholder='email' id='email' required autoComplete='off'></input>
              </div>

              <div>
                <label htmlFor='phone'>phone</label>
                <input type='number' name='phone' placeholder='phone' value={user.phone} onChange={handleInput} id='phone' required autoComplete='off'></input>
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

export default Signup