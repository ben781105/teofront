
import Userdetails from './userdetails'
import Orderhistory from './orderhistory'
import '../styles/profilepage.css'
import Footer from './footer'
import api from '../api'
import { useState,useEffect } from 'react'
import Spinner from './spinner'
function Profilepage() {
    const [userInfo, setUserinfo] = useState({})
    const [loading, setLoading] = useState(false)
    const [orders,setOrders] = useState([])
    useEffect(()=>{
      const getuserInfo =async()=>{
        setLoading(true)
        try{
       const response = await api.get('get_user_info')
       console.log(response.data)
       setUserinfo(response.data)
       setOrders(response.data.ordered_cakes)
       setLoading(false)
      }
      catch(error){
        console.log(error.message)
        setLoading(false)
      }
    
    }
    getuserInfo()
    },[])
     if(loading){
        return(
            <Spinner/>
        )
     }
  return (
    <div className='profile-page'>
       <div className='profile-container'>
        <Userdetails userInfo={userInfo}/>
        <Orderhistory orders={orders}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Profilepage
