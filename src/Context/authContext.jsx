/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import api from "../api";
export const AuthContext = createContext(false)
import { jwtDecode } from "jwt-decode";
 export function AuthProvider({children}){
    const [isAuthenticated,setIsAuthenticated] = useState()

    const [username,setUsername] = useState()
    const handleAuth=()=>{
        const token = localStorage.getItem('access')
        if(token){
            const decoded = jwtDecode(token)
            const expiry_date = decoded.exp
            const current_time = Date.now()/1000
         if(expiry_date>= current_time){
            setIsAuthenticated(true)
         }
        }
        
    }
    const getUsername =async()=>{
       try{ 
        const response = await api.get('get_username')
         console.log(response.data)
         setUsername(response.data.username)
       }
       catch(error){
        console.log(error.message)
       }

    }
    useEffect(()=>{
        handleAuth()
        getUsername()
    },[])
     const authValue = {isAuthenticated,username,getUsername, setIsAuthenticated}
    return(
        <AuthContext.Provider value={authValue}>
         {children}
        </AuthContext.Provider>
    )

 }