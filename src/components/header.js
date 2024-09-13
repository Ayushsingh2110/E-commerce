import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
        <div className="logo">logo</div>
        <div className="header-cart_container">
          <div className="cart-icon_container">
            <div className="cart_count">1</div>
            <ShoppingCartIcon sx={{ fontSize: 50 }} />
          </div>
          <div className="cart_body">
            <button className="order_button">Place order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header