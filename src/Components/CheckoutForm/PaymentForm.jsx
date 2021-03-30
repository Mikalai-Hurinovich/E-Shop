import React from 'react'
import {loadStripe} from "@stripe/stripe-js/pure";
import Review from './Review'
function PaymentForm({shippingData, checkoutToken}) {
    return (
        <div>
            <>
            <Review checkoutToken={checkoutToken}/>
            </>
        </div>
    )
}

export default PaymentForm
