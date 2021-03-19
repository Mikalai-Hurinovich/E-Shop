import React, {useEffect, useState} from 'react';
import Products from "./Components/Products/Products";
import Navbar from "./Components/NavBar/Navbar";
import {commerce} from "./lib/commerce";

const App = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const {data} = await commerce.products.list();
        setProducts(data);
    }
    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <div>
            <Navbar/>
            <Products products={products}/>

        </div>
    )
}

export default App;
