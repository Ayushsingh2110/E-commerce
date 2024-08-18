import React, { useState, useEffect } from 'react'
import ProductCard from '../components/productCard';
import { Link } from "react-router-dom";

const Home = () => {
    const [ProductList, setProductList] = useState([]);
    async function getData() {
        try {
            const res = await fetch("http://localhost:4000/products", {
                method: "GET",
            });

            if (!res.ok) {
                return [];
            }

            const products = await res.json()
            if (Array.isArray(products)) {
                return products;
            }

            return [];
        } catch (error) {
            alert(error.message);
        }
    }

    useEffect(() => {
        async function onLoad() {
            const data = await getData();
            setProductList(data);
        }
        onLoad();
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
                                    <Link key={index} to={`/${product?.id}`} className="card_link">
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