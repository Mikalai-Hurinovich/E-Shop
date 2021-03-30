import React, {useEffect, useState} from 'react';
import Products from "./Components/Products/Products";
import Navbar from "./Components/NavBar/Navbar";
import Cart from './Components/Cart/Cart'
import {commerce} from "./lib/commerce";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Checkout from "./Components/CheckoutForm/Checkout/Checkout";

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({})

    const fetchProducts = async () => {
        const {data} = await commerce.products.list();
        setProducts(data);

    }
    const fetchCart = async () => {
        const response = await commerce.cart.retrieve();

        setCart(response)
    }
    const handleAddToCart = async (productID, quantity) => {
        const response = await commerce.cart.add(productID, quantity);
        setCart(response.cart)
    }

    const HandleUpdateCartQty = async (productID, quantity) => {
        const response = await commerce.cart.update(productID, {quantity})
        setCart(response.cart);
    }
    const HandleRemoveFromCart = async (productID) => {
        const {cart} = await commerce.cart.remove(productID);
        setCart(cart)
    }
    const HandleEmptyCart = async () => {
        const {cart} = await commerce.cart.empty()
        setCart(cart)
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, [])
    return (
        <BrowserRouter>
            <div>
                <Navbar totalItems={cart.total_items}/>
                <Switch>
                    <Route exact path={'/'}>
                        <Products products={products} onAddToCart={handleAddToCart}/>
                    </Route>
                    <Route exact path={'/cart'}>
                        <Cart cart={cart}
                              HandleUpdateCartQty={HandleUpdateCartQty}
                              HandleRemoveFromCart={HandleRemoveFromCart}
                              HandleEmptyCart={HandleEmptyCart}
                        />
                    </Route>
                    <Route exact path={'/checkout'}>
                        <Checkout cart={cart}/>
                    </Route>

                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;
