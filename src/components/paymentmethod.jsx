
import { useState } from 'react';
import '../styles/order.css';
import api from '../api';

function Paymentmethod() {
  
    const [verifying, setVerifying] = useState(false);

    const paywithpaypal = async () => {
        const cart_id = localStorage.getItem('cart_id');

        try {
            setVerifying(true);  
            

            const response = await api.post('initiate_paypal_payment/', { cart_id });
            console.log(response.data);

            if (response.data.approvalUrl) {
                window.location.href = response.data.approvalUrl;
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
