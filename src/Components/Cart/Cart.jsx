import React from "react";
import {Button, Container, Grid, Typography} from "@material-ui/core";
import useStyles from './styles'
import CartItem from "./CartItem/CartItem";
import {Link} from "react-router-dom";

const Cart = ({cart, HandleUpdateCartQty, HandleRemoveFromCart, HandleEmptyCart}) => {
    const s = useStyles();
    const EmptyCart = () => {
        return <Typography variant={"subtitle1"}>No Items in Your Cart...
            <br/>
            <hr/>
            <Button variant={"contained"} size={"large"} color={"primary"}>
                <Link style={{color: 'white'}} to={'/'} className={s.link}>Start adding some...</Link>
            </Button>
        </Typography>
    }
    const FilledCart = () => {
        return <>
            <Grid container spacing={4}>
                {cart.line_items.map(i => (
                    <Grid item xs={12} sm={4} key={i.id}>
                        <CartItem i={i} HandleUpdateCartQty={HandleUpdateCartQty}
                                  HandleRemoveFromCart={HandleRemoveFromCart}/>
                    </Grid>
                ))}
            </Grid>
            <div className={s.cardDetails}>
                <Typography variant={'h4'}>Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={s.emptyButton}
                            size={'large'}
                            type={'button'}
                            variant={"contained"}
                            color={"secondary"} onClick={HandleEmptyCart}>Empty Cart</Button>
                    <Button component={Link} to={'/checkout'}
                            className={s.checkoutButton}
                            size={'large'}
                            type={'button'}
                            variant={"contained"}
                            color={"primary"}>Checkout</Button>
                </div>
            </div>
        </>
    }
    if (!cart.line_items) return 'Loading...'
    return (
        <Container>
            <div className={s.toolbar}/>
            <Typography className={s.title} variant={'h3'}>Shopping Cart</Typography>
            {!cart.line_items.length ? <EmptyCart/> : <FilledCart/>}
        </Container>
    )
}
export default Cart;
