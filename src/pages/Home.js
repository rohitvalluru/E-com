import React from 'react'
import Navbar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/ProductList";
import { Footer } from '../features/navbar/Footer';

export const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ProductList></ProductList>
            <Footer></Footer>
        </div>
    )
}
