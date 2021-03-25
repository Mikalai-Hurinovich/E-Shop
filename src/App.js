import React, {useEffect, useState} from 'react';
import Products from "./Components/Products/Products";
import Navbar from "./Components/NavBar/Navbar";
import Cart from './Components/Cart/Cart'
import {commerce} from "./lib/commerce";

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
    const addToCart = async (productID, quantity) => {
        const item = await commerce.cart.add(productID, quantity);
        setCart(item.cart)
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, [])
    console.log(cart)
    return (
        <div>
            <Navbar totalItems={cart.total_items}/>
            {/*<Products products={products} onAddToCart={addToCart}/>*/}
            <Cart cart={cart}/>
        </div>
    )
}

export default App;
