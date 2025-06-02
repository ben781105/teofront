import Herosection from './herosection'
import '../styles/loginform.css'
import '../styles/home.css'
import '../styles/navbar.css'
import '../styles/skeleton.css'
import Footer from './footer'
import { randomCartId } from '../generatecartid'
import Latest from './latestaddition'
import Bestselling from './BestSellling'
import BlogStories from './blogStories'
import { useEffect } from 'react'
function Home() {

useEffect(() => {
  if (!localStorage.getItem("cart_id")) {
    const newCartId = randomCartId; 
    localStorage.setItem("cart_id", newCartId);
  }
}, []); 

  return (
    <div className='home-page'>
    <Herosection/>
    <Latest/>
    <Bestselling/>
    <BlogStories/>
    <Footer/>
    </div>
  )
}

export default Home
