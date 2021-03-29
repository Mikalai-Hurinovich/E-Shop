import React from 'react'
import {useForm, FormProvider} from "react-hook-form";
import {Grid, Typography} from "@material-ui/core";

function AddressForm() {
    const methods = useForm();

    return (
        <>
        <Typography variant={'h6'} gutterBottom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit={}>
                    <Grid container spacing={3}>

                    </Grid>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm
