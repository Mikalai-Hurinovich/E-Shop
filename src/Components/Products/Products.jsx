import React from "react";
import {Grid} from '@material-ui/core'
import Product from "../Product/Product";
import useStyles from './styles'

// const products = [
//     {
//         id: 1,
//         name: 'Nike Air Monarch IV',
//         description: 'Running Shoes.',
//         price: '$50',
//         image: 'https://img1.wbstatic.net/big/new/5480000/5489499-1.jpg'
//     },
//     {
//         id: 2,
//         name: 'Lenovo v580c',
//         description: 'Lenovo Laptop.',
//         price: '$500',
//         image: 'https://otziv-otziv.ru/assets/cache/images/product/11/101/otzyvy-lenovo-v580c-8525034-600x600-ef3.jpg'
//     },
// ]


const Products = ({products}) => {
    const s = useStyles();

    return (
        <main className={s.content}>
            <div className={s.toolbar}/>
            <Grid container justify={'center'} spacing={6}>
                {products.map(product => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>)
}

export default Products;
