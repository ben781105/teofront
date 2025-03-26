import { useEffect, useState } from "react"
import api from "./api"
import { jwtDecode } from "jwt-decode"
import Spinner from "./components/spinner"
import { Navigate, useLocation } from "react-router-dom"
const ProtectedRoute = ({children}) => {
   const [isAuthorised,setIsAuthorised] = useState(null)
   const location = useLocation()
   
    useEffect(()=>{
        const auth = async() =>{
            const token = localStorage.getItem('access')
            if(!token){
                setIsAuthorised(false)
                return;
            }
            const decoded = jwtDecode(token)
            const expiry_date = decoded.exp
            const current_time = Date.now()/1000
    
            if(current_time > expiry_date){
                await refreshToken()
            }
            else{
                setIsAuthorised(true)
            }
        }
        auth()
    },[])
 
    
    const refreshToken = async()=>{
        const refreshToken = localStorage.getItem('refresh')
        try{
            const response = await api.post('/token/refresh',{refresh:refreshToken})
        
        if(response.status === 200){
            localStorage.setItem('access',response.data.access)
            setIsAuthorised(true)
        }
        else{
            setIsAuthorised(false)
        }
    }catch(error){
        console.log(error)
        setIsAuthorised(false)
    }}

    
    if(isAuthorised ===null){
        return <Spinner/>
    }
   
  return (
    <div>
       {isAuthorised? children : <Navigate to= '/login/' state={{from:location}} replace/>}
    </div>
  )
}


export default ProtectedRoute
