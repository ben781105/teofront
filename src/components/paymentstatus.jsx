import React, { useEffect, useState } from 'react';
import api from '../api';
import Successpage from './successpage';
import Errorpage from './errorpage';
import '../styles/paymentoutcome.css'
import Footer from './footer';
function Paymentstatus({ setCartnumber }) {
    const [statusMessage, setStatusMessage] = useState('Processing payment...');
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const paymentId = queryParams.get('paymentId');
        const PayerID = queryParams.get('PayerID');
        const tx_ref = queryParams.get('tx_ref');

        console.log("Extracted Params:", { paymentId, PayerID, tx_ref }); // log to verify

        if (paymentId && PayerID && tx_ref) {
            api.post(`paypal_payment_callback/?paymentId=${paymentId}&PayerID=${PayerID}&tx_ref=${tx_ref}`)
                .then((response) => {
                    setStatusMessage(response.data.message);
                    setPaymentSuccess(true);
                    setCartnumber(0);
                    localStorage.removeItem('cart_id');
                
                    console.log(response.data);
                })
                .catch((error) => {
                    setStatusMessage("Payment failed. Please try again.");
                    setPaymentSuccess(false);
                    console.error(error);
                });
        } else {
            setStatusMessage("Invalid payment details. Payment not processed.");
            setPaymentSuccess(false);
        }
    }, [setCartnumber]);

    return (
        <>
        <div className='payment-status'>
            {paymentSuccess ? (
                 <Successpage statusMessage={statusMessage}/>
            ) : (
                <Errorpage statusMessage={statusMessage}/>
            )}
            
        </div>
        <Footer/>
        </>
    );
}

export default Paymentstatus;
