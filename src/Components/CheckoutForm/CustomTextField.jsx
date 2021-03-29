import React from 'react'
import {Grid, TextField} from "@material-ui/core";
import {Controller} from "react-hook-form";

function CustomTextField() {
    return (
        <Grid item xs={12} sm={6}>
            <Controller as={TextField}/>
        </Grid>
    )
}

export default CustomTextField

