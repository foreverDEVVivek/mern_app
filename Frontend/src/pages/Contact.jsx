import React,{useState} from 'react'
import { useAuth } from '../store/auth';
import {useNavigate} from  'react-router-dom'
import {toast} from 'react-toastify';

const Contact = () => {
  const navigate=useNavigate();
  
  const [query,setQuery]=useState({
    username:"",
    email:"",
    message:"",
  });
  const [user,setUser]=useState(true);
  const {data}=useAuth();
 
  if(data&&user){
    setQuery({
      username:data.data.username,
      email:data.data.email,
      message:"",
    })
    setUser(false);
  }
 

  const handleInput=(event)=>{  
   const name=event.target.name;
   const value=event.target.value;
   setQuery({...query,[name]:value});
  }

  const handleSubmit=async(event)=>{
     event.preventDefault();
     
     //Tackling post contact route..
     const resp=await fetch("http://127.0.0.1:8080/api/form/contact",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(query)
     });

     if(resp.ok){
      const data=await resp.json();
      toast.success("Response has been shared!");
     setQuery({
      username:"",
      email:"",
      message:"",
     })

     navigate("/")
     }
     else{
      const data=await resp.json();
      toast.error(data.message)
     }

  }
  return (
    <>
    <main>
      <div className="section-registration">
        <div className="container grid grid-two-cols">
          <div className="registration-image">
            <img src='/image/contact-image.png' alt='Registration Image' width="600px" height="500px"></img>
          </div>
          {/* Let's tackle registration form */}
          <div className="registration-form">
            <h1 className='main-heading mb-3'>registration form</h1>
            <br/>
            <form className='signup-form' onSubmit={handleSubmit}>
              
              <div>
                <label htmlFor='username'>Username</label>
                <input type='text' name='username' 
                value={query?query.username:"Hello Guest"} onChange={handleInput}
                placeholder='username' id='username' required autoComplete='off'></input>
              </div>

              <div>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' placeholder='email' id='email' required value={query?query.email:""} onChange={handleInput} autoComplete='off'></input>
              </div>

              <div>
                <label htmlFor='message'>Message</label>
                <textarea name='message' value={query?query.message:""} onChange={handleInput} placeholder='message' id='message'  rows={10} cols="30" required autoComplete='off'></textarea>
              </div>

              <br/>
              <button type='submit' className='btn btn-submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
      
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1751.0720115705963!2d77.3427392342285!3d28.625445296589938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce52fde45c5b9%3A0x54c6b9c9ace40e8d!2smahakal%20gang!5e0!3m2!1sen!2sin!4v1728656686572!5m2!1sen!2sin" width="600" height="450" ></iframe>
    </main>
    
    </>
  )
}

export default Contact