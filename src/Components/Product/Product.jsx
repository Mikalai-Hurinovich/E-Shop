import React from "react";
import {Card, CardActions, CardContent, CardMedia, IconButton, Typography} from "@material-ui/core";
import {AddShoppingCart} from "@material-ui/icons";
import useStyles from './styles'

const Product = (props) => {
    const s = useStyles();
    return (
        <Card className={s.root}>
            <CardMedia className={s.media} image={props.product.media.source} title={props.product.name}/>
            <CardContent>
                <div className={s.cardContent}>
                    <Typography variant={"h6"} gutterBottom>
                        {props.product.name}
                    </Typography>

                </div>
                <Typography dangerouslySetInnerHTML={{__html: props.product.description}}
                            variant={'body2'} color={'textSecondary'}/>
            </CardContent>
            <CardActions disableSpacing className={s.cardActions}>
                <Typography variant={"h5"}>
                    {props.product.price.formatted_with_symbol}
                </Typography>
                <IconButton aria-label={'Add to Cart'} onClick={() => props.onAddToCart(props.product.id, 1)}>
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product;
