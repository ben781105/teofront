import React from 'react'
import emptycart from '../assets/—Pngtree—black shopping cart png_13329538.png'
import '../styles/emptycart.css'

function Emptycart() {
   
    
  return (
    <div className='empty'>
    <p>Your cart is empty!</p>
      <img src={emptycart} alt='empty!' />
    </div>
  )
}

export default Emptycart
