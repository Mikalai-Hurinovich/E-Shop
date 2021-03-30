import React, {useEffect, useState} from "react";
import {Paper, Step, StepLabel, Stepper, Typography} from "@material-ui/core";
import useStyles from "./styles";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import {commerce} from "../../../lib/commerce";

function Confirmation() {
    return <div>
        Confirmation
    </div>
}

const Checkout = ({cart}) => {
    const s = useStyles();
    const steps = ['Shipping address', 'Payment details']
    const [activeStep, setActiveStep] = useState(0)
    const [checkoutToken, setCheckoutToken] = useState(null)
    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'})
                setCheckoutToken(token)
            } catch (error) {
            }
        }
        generateToken()
    }, [cart])

    const Form = () => activeStep === 0
        ? <AddressForm checkoutToken={checkoutToken}/>
        : <PaymentForm/>
    return (
        <>
            <div className={s.toolbar}/>
            <main className={s.layout}>
                <Paper className={s.paper}>
                    <Typography variant={"h4"} align={"center"}>Checkout</Typography>
                    <Stepper activeStep={activeStep} className={s.stepper}>
                        {steps.map(step => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation/> : checkoutToken && <Form/>}
                </Paper>
            </main>
        </>
    )
}
export default Checkout;
