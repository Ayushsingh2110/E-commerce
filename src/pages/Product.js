import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Rating from '@mui/material/Rating';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ErrorPage from './ErrorPage';
import { getData } from '../utils/server';

const Product = () => {
  const { id } = useParams();
  const [ProductData, setProductData] = useState({}); //this variable will store data coming from server
  const [Error, setError] = useState(false); //this variable is to return an Error page if value is true

  useEffect(() => {
    async function onLoad() {
      const data = await getData(`http://localhost:4000/products?id=${id}`); //getData() function gets called everytime page loads
      if(data.length && data[0].id){
        setProductData(data[0]);
      }else{
        setError(true); 
      }
    }
    onLoad(); //this function executes actions on every page load
  }, [id]);

  if(Error){
    return (
      <ErrorPage message={"Data not found"} statusCode={"404"}/>
    )
  }

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
          <h3 className="product_price"><CurrencyRupeeIcon />{ProductData?.price || 0}</h3>
          <div className="product_quantity">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Product