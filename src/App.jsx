import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/home";
import Contact from "./components/contact";
import Menu from "./components/menu";
import NotFound from "./components/notfound";
import Detail from "./components/detail";
import Cart from "./components/cart";
import { useState,useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Emptycart from "./components/emptycart";
import Checkout from "./components/checkout";
import Loginform from "./components/loginform";
import ProtectedRoute from "./protectedroute";
import { AuthProvider } from "./Context/authContext";
import Profilepage from "./components/profilepage";
function App() {
  const [cartNumber,setCartnumber] =useState(0)
  const cart_id = localStorage.getItem('cart_id')
  useEffect(()=>{
    if(cart_id){
      const fetchCartNumber = async() => {
        try {
          const response = await axios.get(`http://localhost:8000/get_cart_figures?cart_id=${cart_id}`)
          console.log(response.data)
          setCartnumber(response.data.num_of_cakes)
        } catch(error) {
          console.log(error)
        }
      }
      fetchCartNumber();
    }
   },[cart_id])
   
  
return (
  <AuthProvider>
 
  <Router>
    <Navbar cartNumber={cartNumber}/>
    <ToastContainer />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="contact/" element={<Contact/>}/>
      <Route path="menu/" element= {<Menu/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route path= "cake-detail/:slug" element={<Detail setCartnumber={setCartnumber}/>}/>
      <Route path="cart/" element={<Cart cartNumber={cartNumber} setCartnumber={setCartnumber}/>}/>
      <Route path= 'empty/' element={<Emptycart/>}/>
      <Route path='checkout/' element={<ProtectedRoute><Checkout/></ProtectedRoute>}/>
      <Route path='login/' element={<Loginform/>}/>
      <Route path='Account/' element={<ProtectedRoute><Profilepage></Profilepage></ProtectedRoute>}/>
    </Routes>
    
  </Router>

  </AuthProvider>

  )
}

export default App;
