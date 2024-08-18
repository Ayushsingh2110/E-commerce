import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Rating from '@mui/material/Rating';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Product = () => {
  const { id } = useParams();
  const [ProductData, setProductData] = useState({});

  async function getData() {
    try {
      const res = await fetch(`http://localhost:4000/products?id=${id}`, {
        method: "GET",
      });

      if (!res.ok) {
        return {};
      }

      const product = await res.json()
      if (Array.isArray(product)) {
        return product;
      }
      return {};
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    async function onLoad() {
      const data = await getData();
      setProductData(data[0]);
    }
    onLoad();
  }, []);

  return (
    <div className="container">
      <div className="product_container">
        <div className="product_image--container">
          <img className="product_image" src="https://tse4.mm.bing.net/th?id=OIP.dB-Vbafoy4ZOavlv_OCUogHaJ4&pid=Api&P=0&h=180" alt={ProductData?.name} />
        </div>
        <div className="product_content--container">
          <h1>{ProductData?.name}</h1>
          <Rating name="read-only" value={ProductData?.rating || 0} readOnly />
          <p className="product_desc">{ProductData?.description || "Product descripton..."}</p>
          <div className="product_tags">
            {
              ProductData?.tags?.map((tag, index) => {
                return (
                  <div key={index} className="product_tag">
                    {tag}
                  </div>
                )
              })
            }
          </div>
          <h3 className="product_price"><CurrencyRupeeIcon />{ProductData.price || 0}</h3>
        </div>
      </div>
    </div>
  )
}

export default Product