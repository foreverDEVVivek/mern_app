import React from 'react'
import './AdminLayout.css';
import { FaUsers } from "react-icons/fa";
import { FcContacts } from "react-icons/fc";
import { FcServices } from "react-icons/fc";
import { NavLink, Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <>    
    <nav className='admin-nav'>
    <ul>
        <li><NavLink to='/admin/users'>Users <FaUsers style={{color:"orange"}} />
        </NavLink></li>
        <li><NavLink to='/admin/contacts'>Contacts <FcContacts />
        </NavLink></li>
        <li><NavLink to='/admin/services'>Services<FcServices />
        </NavLink></li>
    </ul>
    </nav>
    <Outlet/>
    </>
  )
}

export default AdminLayout