import '../styles/cartitem.css';  
import { useNavigate } from 'react-router-dom';
function Cartsummary({ cartTotal, tax }) {   
         const subTotal =cartTotal.toFixed(2)
         const cartTax = tax

         const total = (Number(subTotal)+Number(tax)).toFixed(2)
    const navigate = useNavigate()
     const checkout =()=>{
        navigate('/checkout/')
     }

    return (    
        <div className="cart-summary">       
            <h2>Cart Summary</h2>       
            <hr />       
            <div className="cart-summary-row">         
                <p>Subtotal:</p>         
                <sub>${subTotal}</sub>       
            </div>       
            <div className="cart-summary-row">         
                <p>Tax:</p>         
                <sub>${cartTax}</sub>       
            </div>       
            <div className="cart-summary-total">         
                <p>Total:</p>         
                <sub>${total}</sub>       
            </div>       
            <button onClick={checkout}>Proceed to checkout</button>     
        </div>   
    ); 
}  

export default Cartsummary;  
