import React from 'react'
import '../styles/paymentoutcome.css'
import { useNavigate } from 'react-router-dom'
function Successpage({statusMessage}) {
    const navigate = useNavigate()
    const toAccount = () => {
        navigate('/Account')
    }
    const toHome = () => {
        navigate('/')
    }
  return (
    <div className='success'>
      <p>{statusMessage}</p>
      <sub>Thank you for your purchase 😍</sub>
      <span>
        <button id='details' onClick={toAccount}>View details</button>
        <button id='continue'onClick={toHome}>Continue Shopping</button>
      </span>
    </div>
  )
}

export default Successpage
