import React, {useState} from "react";
import {Paper, Step, StepLabel, Stepper, Typography} from "@material-ui/core";
import useStyles from "./styles";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";

function Confirmation() {
    return <div>
        Confirmation
    </div>
}

const Checkout = () => {
    const s = useStyles();
    const steps = ['Shipping address', 'Payment details']
    const [activeStep, setActiveStep] = useState(0)
    const Form = () => activeStep === 0 ? <AddressForm/> : <PaymentForm/>
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
                    {activeStep === steps.length ? <Confirmation/> : <Form/>}
                </Paper>
            </main>
        </>
    )
}
export default Checkout;
