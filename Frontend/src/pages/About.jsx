import React from 'react'
import { useAuth } from '../store/auth'

const About = () => {
  const {data}=useAuth();
  return (
    <>
    <div className='section-registration'>
    <div className="grid grid-two-cols">
      <div className='about-us-section'>
        <h1>About Us</h1>
        <p>{data?data.data.username:"Hello Guest"}</p>
        <br>
        </br>
        <p>At [Your Company Name], we specialize in delivering high-impact e-commerce solutions designed to maximize productivity and drive growth for businesses. With years of experience and a dedicated team of industry experts, we offer tailored solutions that meet the unique needs of our clients, helping them stay ahead in the competitive digital landscape.</p>
        <br>
        </br>
        <p>Our mission is simple: empower businesses by streamlining e-commerce processes and enhancing their operational efficiency. Whether you're a startup or an established brand, we’re here to elevate your online presence, optimize your workflows, and ensure sustainable growth.</p>
        <br/>
        <p>React is a JavaScript library for building user interfaces, especially single-page applications where you need interactive and dynamic content. Developed and maintained by Facebook, React focuses on the view layer (the "V" in MVC), which deals with rendering UI components.</p>
        <button className='btn btn-home'>Learn More!</button>
      </div>
      <div className="registration-image">
            <img src='/image/about-us-image.png' alt='Registration Image' width="800px" height="500px"></img>
          </div>
          
    </div>
    </div>
    
    </>
  )
}

export default About