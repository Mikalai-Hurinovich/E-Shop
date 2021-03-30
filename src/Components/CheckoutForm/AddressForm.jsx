import React, {useState} from 'react'
import {useForm, FormProvider} from "react-hook-form";
import {Grid, InputLabel, MenuItem, Select, Typography} from "@material-ui/core";
import FormInput from './FormInput'

function AddressForm() {
    const [shippingCount, setShippingCount] = useState('');
    const methods = useForm();

    return (
        <>
            <Typography variant={'h6'} gutterBottom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit={() => {
                }}>
                    <Grid container spacing={3}>
                        <FormInput required name={'FirstName'} label={'First Name'}/>
                        <FormInput required name={'LastName'} label={'Last Name'}/>
                        <FormInput required name={'Address1'} label={'Address'}/>
                        <FormInput required name={'Email'} label={'Email'}/>
                        <FormInput required name={'City'} label={'City'}/>
                        <FormInput required name={'Zip'} label={'Zip code'}/>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={''} fullWidth onChange={() => {
                            }}>
                                <MenuItem key={''} value={''}>
                                    Select Me
                                </MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Subdivision</InputLabel>
                            <Select value={''} fullWidth onChange={() => {
                            }}>
                                <MenuItem key={''} value={''}>
                                    Select Me
                                </MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Options</InputLabel>
                            <Select value={''} fullWidth onChange={() => {
                            }}>
                                <MenuItem key={''} value={''}>
                                    Select Me
                                </MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm
