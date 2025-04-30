
import { useState } from 'react';
import '../styles/order.css';
import api from '../api';

function Paymentmethod() {
    const [verifying, setVerifying] = useState(false);
    const paywithpaypal = async () => {
        const cart_id = localStorage.getItem('cart_id'); // getting the cart_id to be sent
        try {
            setVerifying(true);  
            const response = await api.post('initiate_paypal_payment/', { cart_id }); // sending request
            console.log(response.data);
            if (response.data.approvalUrl) {
                window.location.href = response.data.approvalUrl; //paypal re-direct
            }
        } catch (error) {
            console.error(error.response?.data || error.message);
            setVerifying(false);
        }
    };
    return (
        <div className="payment">
            <div className='heading'>Payment option</div>
            <div className='method-holder'>
                <button className="payment-method" onClick={paywithpaypal}>
                    {verifying ? "Verifying... a momemt please" : "Pay with PayPal"}
                </button>
            </div>
        </div>
    );
}

export default Paymentmethod;
