import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
   const [token,setToken]=useState(localStorage.getItem('token'));
   const authorizationToken=`Bearer ${token}`;
   const[data,setData]=useState("");
   const [services,setServices]=useState("");
  //function to stored the token in local storage
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  const isLoggedIn=!!token;

  // handling logout functionality
  const LogoutUser=()=>{
     setToken("");
     return localStorage.removeItem('token');
  }

  // JWT AUTHENTICATION- to get the current user data
  const userAuthentication=async()=>{
    try {
      const response=await fetch("http://127.0.0.1:8080/api/auth/user",{
        method:"GET",
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      const user=await response.json();
      if(user.message){
        setData(false);
      }
      else{
      setData(user);
    }
      
    } catch (error) {
      console.log("Error while fetching data of user");
    }
  }

  const getServices=async()=>{
    const response=await fetch("http://127.0.0.1:8080/api/data/service",{
      method:"GET",
    });
     if(response.ok){
      const data=await response.json();
      setServices(data.allServices);
     }
  }

  useEffect(()=>{
   userAuthentication();
  },[]);

  useEffect(()=>{
    getServices();
  },[]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS,LogoutUser,data,services,authorizationToken }}>
      {children}  
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};