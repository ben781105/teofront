
import '../styles/order.css'
function Paymentmethod() {
  return (
    <div className="payment">       
            <div className='heading'>Payment option</div>       
         <div className='method-holder'>
            <div className="payment-method" style={{backgroundColor:'red',color:'#fff'}}>         
                  AIRTEL 
            </div>       
            <div className="payment-method" style={{backgroundColor:'yellow',color:'#333'}}>         
                    MTN
            </div>       
            <div className="payment-method" style={{backgroundColor:'orange',color:'#fff'}}>         
                VISA MASTERCARD
            </div>       
    
        </div>   
        </div>
  )
}

export default Paymentmethod
