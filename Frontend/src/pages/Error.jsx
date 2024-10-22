import React from 'react'
import { NavLink, Navigate } from "react-router-dom";

const Error = () => {
  return (
    <>
<div className='error-page'>
  <span className='error-num'>5</span>
  <div className='eye'></div>
  <div className='eye'></div>
  <p className='sub-text'>Oh eyeballs! Something went wrong. We're <i>looking</i> to see what happened.</p>
  <NavLink to='/'>Go back</NavLink>
</div>
    </>
  )
}

export default Error;