import React from 'react'
import { useAuth } from '../store/auth';

const Products = () => {
 const {services}=useAuth();

  return (
    <>
    <div className="section-registration">
    <ul class="cards">
          {services?services.map((service,index)=>{
            return <>
            <li>
    <a href="" class="card">
      <img src={service.image} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">{service.service}</h3>            
            <span class="card__status">{service.provider}</span>   
            <br></br>   
            <span class="card__title">{service.price}</span>
          </div>
        </div>
        <p class="card__description">{service.description}</p>
      </div>
    </a>      
        </li>
          </>
          }):<>
          <h1 style={{backgroundColor:"red"}}>Loading..</h1>
          </>
          } 
     </ul>
     </div>
    </>
  )
}

export default Products