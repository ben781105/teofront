import React from 'react'
import '../styles/paymentoutcome.css'
function Errorpage({statusMessage}) {
  return (
    <div className='error'>
      <p>{statusMessage}</p>
      <sub>Oops!,we could not process your payment 😞</sub>
    </div>
  )
}

export default Errorpage
