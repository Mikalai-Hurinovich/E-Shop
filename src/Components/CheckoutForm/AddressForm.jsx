import React, {useEffect, useState} from 'react'
import {useForm, FormProvider} from "react-hook-form";
import {Grid, InputLabel, MenuItem, Select, Typography} from "@material-ui/core";
import FormInput from './FormInput'
import {commerce} from "../../lib/commerce";

function AddressForm({checkoutToken}) {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubDivisions, setShippingSubDivisions] = useState([]);
    const [shippingSubDivision, setShippingSubDivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');
    const methods = useForm();
    /*Object.entries give us object keys and values of this object*/
    const countries = Object.entries(shippingCountries).map(([code, countryName]) => ({id: code, label: countryName}))
    const subdivisions = Object.entries(shippingSubDivisions).map(([code, countryName]) => ({
        id: code,
        label: countryName
    }))
    const options = shippingOptions.map((shippingOption)=> ({id: shippingOption.id, label: `${shippingOption.description} - (${shippingOption.price.formatted_with_symbol})`}))

    const fetchShippingCountries = async (checkTokenID) => {
        const {countries} = await commerce.services.localeListShippingCountries(checkTokenID);
        setShippingCountries(countries)
        setShippingCountry(Object.keys(countries)[0])
    }
    const fetchSubdivisions = async (countryCode) => {
        const {subdivisions} = await commerce.services.localeListSubdivisions(countryCode)
        setShippingSubDivisions(subdivisions)
        setShippingSubDivision(Object.keys(subdivisions)[0])
    }
    const fetchShippingOptions = async (checkoutTokenID, country, region = null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenID, {country, region})
        setShippingOptions(options)
        setShippingOption(options[0].id)

    }

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id)
    }, [])

    useEffect(() => {
        if (shippingCountry) fetchSubdivisions(shippingCountry)
    }, [shippingCountry])
    useEffect(() => {
        if (shippingSubDivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubDivision)
    }, [shippingSubDivision])
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
                            <Select value={shippingCountry} fullWidth onChange={(e) => {
                                setShippingCountry(e.target.value)
                            }}>{countries.map((country) => (
                                <MenuItem key={country.id} value={country.id}>
                                    {country.label}
                                </MenuItem>))}
                            </Select>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Subdivision</InputLabel>
                            <Select value={shippingSubDivision} fullWidth onChange={(e) => {
                                setShippingSubDivision(e.target.value)
                            }}>{subdivisions.map((subdivision) => (
                                <MenuItem key={subdivision.id} value={subdivision.id}>
                                    {subdivision.label}
                                </MenuItem>))}
                            </Select>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Options</InputLabel>
                            <Select value={shippingOption} fullWidth onChange={(e) => {
                                setShippingOption(e.target.value)
                            }}>{options.map((option) => (
                                <MenuItem key={option.id} value={option.id}>
                                    {option.label}
                                </MenuItem>))}
                            </Select>
                        </Grid>
                    </Grid>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm
