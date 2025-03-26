import React from 'react'
import Order from './order'
import Paymentmethod from './paymentmethod'
import '../styles/order.css'
import '../styles/checkout.css'
import Footer from './footer'
import useCartData from '../custom hook/cartContext'
import Spinner from './spinner'
function Checkout() {
        const {cartitems,cartTotal,tax,loading}= useCartData()

        if(loading){
                return(
                        <Spinner/>
                )
        }
  return (
    
       <div>
            <div className="checkout-page">
                    <div className="checkout-wrapper">
                        <div className="checkout-container">
                            
                                <Order cartitems={cartitems} cartTotal={cartTotal} tax={tax}/>
                            
                        </div>
                        <Paymentmethod/>
                    </div>
                
            </div>
            <Footer />
        </div>
    
  )
}

export default Checkout
