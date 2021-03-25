import React from "react";
import useStyles from './styles'
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";

const CartItem = ({item}) => {
    const s = useStyles();
    return (
        <div>
            <Card>
                <CardMedia image={item.media.source} aly={item.name} className={s.media}/>
                <CardContent className={s.cardContent}>
                    <Typography variant={"h5"}>{item.name}</Typography>
                    <Typography variant={"h5"}>{item.line_total.formatted_with_symbol}</Typography>
                </CardContent>
                <CardActions className={s.cartActions}>
                    <div className={s.buttons}>
                        <Button type={'button'} size={'small'}>-</Button>
                        <Typography>{item.quantity}</Typography>
                        <Button type={'button'} size={'small'}>+</Button>
                    </div>
                    <Button variant={'contained'} type={"button"} color={"secondary"}>Delete</Button>
                </CardActions>
            </Card>
        </div>
    )
}
export default CartItem
