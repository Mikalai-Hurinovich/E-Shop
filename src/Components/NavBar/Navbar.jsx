import React from "react";
import {AppBar, Badge, IconButton, Toolbar, Typography} from "@material-ui/core";
import {ShoppingCart} from "@material-ui/icons";
import useStyles from './styles'

const Navbar = () => {
    const s = useStyles();
    return (
        <>
            <AppBar position={'fixed'} className={s.appBar} color={'inherit'}>
                <Toolbar>
                    <Typography variant={'h6'} className={s.title} color={'inherit'}>
                        <img src={'https://e-shop.org.ua/img/logo.png'} alt={'E-Shop'} height={'25px'}
                             className={'s.image'}/>
                    </Typography>
                    <div className={s.grow}/>
                    <div className={s.button}>
                        <IconButton aria-label={'Show Cart Items'} color={'inherit'}>
                            <Badge badgeContent={2} color={'secondary'}>
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>

            </AppBar>
        </>
    )
}

export default Navbar;
