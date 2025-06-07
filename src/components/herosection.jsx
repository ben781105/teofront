import '../styles/herosection.css'
import { useNavigate } from 'react-router-dom'
import heroCake from '../assets/slide3.jpg'
import {motion as Motion} from 'framer-motion'
function Herosection() {
  const navigate = useNavigate()
  const toMenu =()=>{
   navigate('/menu')
  }
  return (
    <div  className='herosection'>
      <div className='hero-text'>
        <h1>Cake for later cake as a way of life</h1>
        <p>Discover our handcrafted cakes carefully designed to make your special occasions unforgettable.</p>
        <button onClick={toMenu}>Check menu</button>
      </div>
      <Motion.img  
      animate={{y:[0, -20, 0]}}
      transition={
        {duration:2,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut'
        }
      }
      className='img' src={heroCake} alt="cake" />
    </div>
  )
}

export default Herosection
