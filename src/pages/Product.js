import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Rating from '@mui/material/Rating';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ErrorPage from './ErrorPage';
import { getData } from '../utils/server';
import { useCart } from '../contexts/cartContext';

const Product = () => {
  const { id } = useParams();
  const [ProductData, setProductData] = useState({}); //this variable will store data coming from server
  const [Error, setError] = useState(false); //this variable is to return an Error page if value is true
  let [ProductQuantity, setProductQuantity] = useState(ProductData.selectedQuantity ? ProductData.selectedQuantity : 1);

  const { addToCart } = useCart();

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

  function handleQuantity(e){
    e.preventDefault()
    if(e.target.innerText === "-" && e.target.id === "quantityMinus" && ProductQuantity > 1){
      setProductQuantity(--ProductQuantity);
    }
    if(e.target.innerText === "+" && e.target.id === "quantityPlus" && 
      (ProductData?.available_units ? ProductQuantity < ProductData.available_units : true)){
        
      setProductQuantity(++ProductQuantity);
    }
  }

  function AddProductToCart() {
    ProductData.selectedQuantity = ProductQuantity
    addToCart({ id: ProductData.id, image: ProductData.image, name : ProductData.name, unitCount: ProductData.unitCount, selectedQuantity: ProductData.selectedQuantity})
  }

  if (Error) {
    return (
      <ErrorPage message={"Data not found"} statusCode={"404"} />
    )
  }

  return (
    <div className="container">
      <div className="product_container">
        <div className="product_image--container">
          <img className="product_image" src="https://tse4.mm.bing.net/th?id=OIP.dB-Vbafoy4ZOavlv_OCUogHaJ4&pid=Api&P=0&h=180" alt={ProductData?.name} />
        </div>
        <div className="product_content--container">
          {/* <======= NAME =======> */}
          <h1>{ProductData?.name}</h1>

          {/* <======= RATING =======> */}
          <Rating name="read-only" value={ProductData?.rating || 0} readOnly />

          {/* <======= DESCRIPTION =======> */}
          <p className="product_desc">{ProductData?.description || "Product descripton..."}</p>

          {/* <======= TAGS =======> */}
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

          {/* <======= PRICE =======> */}
          <h3 className="product_price"><CurrencyRupeeIcon />{(ProductData?.price*ProductQuantity).toFixed(2) || 0}</h3>

          {/* <======= QUANTITY =======> */}
          <div className="product_quantity">
            <button className="minus" id="quantityMinus" onClick={handleQuantity} disabled={ProductQuantity <= 1 ? "True":""}>
              -
            </button>
            <span className="value">{ProductQuantity}</span>
            <button className="plus" id="quantityPlus" onClick={handleQuantity} disabled={ProductQuantity >= ProductData.unitCount ? "True" : ""}>
              +
            </button>
          </div>

          {/* <======= ADD TO CART && BOOK BUTTON =======> */}
          <div className="product_action">
            <button className="add-to-cart" onClick={AddProductToCart}>Add to cart</button>
            <button className="buy">Buy Now</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Product