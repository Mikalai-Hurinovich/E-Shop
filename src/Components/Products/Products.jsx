import React from "react";
import {Grid} from '@material-ui/core'
import Product from "../Product/Product";
import useStyles from './styles'


const Products = ({products, onAddToCart}) => {
    const s = useStyles();

    return (
        <main className={s.content}>
            <div className={s.toolbar}/>
            <Grid container justify={'center'} spacing={6}>
                {products.map(product => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart}/>
                    </Grid>
                ))}
            </Grid>
        </main>)
}

export default Products;
