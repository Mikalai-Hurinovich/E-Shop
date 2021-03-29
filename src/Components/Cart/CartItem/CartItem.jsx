import React from "react";
import useStyles from './styles'
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";

const CartItem = ({i, HandleUpdateCartQty, HandleRemoveFromCart}) => {
    const s = useStyles();
    return (
        <div>
            <Card>
                <CardMedia image={i.media.source} aly={i.name} className={s.media}/>
                <CardContent className={s.cardContent}>
                    <Typography variant={"h5"}>{i.name}</Typography>
                    <Typography variant={"h5"}>{i.line_total.formatted_with_symbol}</Typography>
                </CardContent>
                <CardActions className={s.cartActions}>
                    <div className={s.buttons}>
                        <Button type={'button'} size={'small'} color={"default"}
                                onClick={() => HandleUpdateCartQty(i.id, i.quantity - 1)}>-</Button>
                        <Typography>{i.quantity}</Typography>
                        <Button type={'button'} size={'small'} color={"default"}
                                onClick={() => HandleUpdateCartQty(i.id, i.quantity + 1)}>+</Button>
                    </div>
                    <Button
                        variant={'contained'}
                        type={"button"}
                        color={"secondary"}
                        onClick={() => HandleRemoveFromCart(i.id)}>Delete</Button>
                </CardActions>
            </Card>
        </div>
    )
}
export default CartItem
