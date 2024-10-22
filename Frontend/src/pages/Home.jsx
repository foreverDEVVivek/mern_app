import React from 'react'

const Home = () => {
  
  return (
    <>
    <div className='section-registration'>
    <div className="grid grid-two-cols">
      <div className='home-react-section'>
        <h1>About React</h1>
        <p>React is a JavaScript library for building user interfaces, especially single-page applications where you need interactive and dynamic content. Developed and maintained by Facebook, React focuses on the view layer (the "V" in MVC), which deals with rendering UI components.</p>
        <button className='btn btn-home'>Learn More!</button>
      </div>
      <div className="registration-image">
            <img src='/image/home-image.png' alt='Registration Image' width="800px" height="500px"></img>
          </div>
          
    </div>
    </div>
    </>
  )
}

export default Home