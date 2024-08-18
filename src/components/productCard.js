import React from 'react'
import Rating from '@mui/material/Rating';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const ProductCard = ({ productData }) => {
  return (
    <div className="card_container">

      <div className="card_content">

        <div className="product_card--img_container">
          <img src="https://tse4.mm.bing.net/th?id=OIP.dB-Vbafoy4ZOavlv_OCUogHaJ4&pid=Api&P=0&h=180" className="product_card--img" alt={productData.name || "Product"} />
        </div>

        <div className="product_details_container">
          <h2 className="product_title">{productData.name || "product Name"}</h2>
          <Rating name="read-only" value={productData.rating || 0} readOnly />
          <div className="product_tags">
            {
              productData.tags.map((tag, index) => {
                return (
                  <div key={index} className="product_tag">
                    {tag}
                  </div>
                )
              })
            }
          </div>
          <h3 className="product_price"><CurrencyRupeeIcon />{productData.price || 0}</h3>
        </div>

      </div>
    </div>
  )
}

export default ProductCard