import Menu from './menu'
import Herosection from './herosection'
import '../styles/loginform.css'
import '../styles/home.css'
import '../styles/navbar.css'
import api from '../api'
import '../styles/skeleton.css'
import { useState,useEffect } from 'react'
import Footer from './footer'
import { randomCartId } from '../generatecartid'




function Home() {
    const [cakes, setCakes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

     // Fetching the cakes
  useEffect(() => {
    const fetchCakes = async () => {
      try {
        const response = await api.get("cakes/");
        console.log("cakes Data:", response.data);
        setCakes(response.data);
      } catch (error) {
        setError(error.message||"failed to fetch cakes");
      }
      finally {
        setLoading(false);
      }
    };

    fetchCakes();
  }, []);



useEffect(() => {
  if (!localStorage.getItem("cart_id")) {
    const newCartId = randomCartId; 
    localStorage.setItem("cart_id", newCartId);
  }
}, []); 

  return (
    <div className='home-page'>
    <Herosection/>
    <Menu cakes={cakes} loading={loading} error={error}/>
    <Footer/>
    </div>
  )
}

export default Home
