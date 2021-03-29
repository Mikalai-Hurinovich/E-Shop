import React from "react";
import {AppBar, Badge, IconButton, Toolbar, Typography} from "@material-ui/core";
import {ShoppingCart} from "@material-ui/icons";
import useStyles from './styles'
import {Link, useLocation} from "react-router-dom";

const Navbar = ({totalItems}) => {
    const s = useStyles();
    const location = useLocation();
    return (
        <>
            <AppBar position={'fixed'} className={s.appBar} color={'inherit'}>
                <Toolbar>
                    <Typography component={Link} to={'/'} variant={'h6'} className={s.title} color={'inherit'}>
                        <img src={'https://e-shop.org.ua/img/logo.png'} alt={'E-Shop'} height={'25px'}
                             className={'s.image'}/>
                    </Typography>
                    <div className={s.grow}/>
                    {location.pathname === '/' && (
                    <div className={s.button}>
                        <IconButton component={Link} to={'/cart'} aria-label={'Show Cart Items'} color={'inherit'}>
                            <Badge badgeContent={totalItems} color={'secondary'}>
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div> )}
                </Toolbar>

            </AppBar>
        </>
    )
}

export default Navbar;
