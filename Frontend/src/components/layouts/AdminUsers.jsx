import React, { useEffect } from 'react'
import { useAuth } from '../../store/auth'

const AdminUsers = () => {
  const {authorizationToken}=useAuth();
  const getAllUsersData=async()=>{
try {
    const resp=await fetch('http://127.0.0.1:8080/api/admin/users',
      {
        method:"GET",
        headers:{
          Authorization: authorizationToken,
        }
      }
    ) 

    const data=await resp.json();
    console.log("data", data);
} catch (error) {
  console.log(error);
}
  }
  useEffect(()=>{
   getAllUsersData();
  },[])
  return (
    <div>AdminUsers</div>
  )
}

export default AdminUsers