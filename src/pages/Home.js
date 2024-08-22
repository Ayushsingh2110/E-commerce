import React, { useState, useEffect } from 'react'
import ProductCard from '../components/productCard';
import { Link } from "react-router-dom";
import { getData } from '../utils/server';
const Home = () => {
    const [ProductList, setProductList] = useState([]); //this variable will store data coming from server

    useEffect(() => {
        async function onLoad() {
            const data = await getData("http://localhost:4000/products"); //getData() function gets called everytime page loads to get data
            setProductList(data);
        }
        onLoad(); //this function executes actions on every page load
    }, []);

    return (
        <div className="container">
            <div className="home_container">
                {
                    (ProductList.length === 0 || !Array.isArray(ProductList)) ?
                        (
                            <h1>No data found</h1>
                        ) :
                        (
                            ProductList.map((product, index) => {
                                return (
                                    <Link key={index} to={`product/${product?.id}`} className="card_link">
                                        <ProductCard productData={product} />
                                    </Link>
                                )
                            }
                            )
                        )
                }
            </div>
        </div>
    )
}

export default Home