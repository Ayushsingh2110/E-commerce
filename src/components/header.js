import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartDrop from './cartDrop';
import { useCart } from '../contexts/cartContext';

const Header = () => {
  const { cartItems } = useCart();

  const [CartVisible, setCartVisible] = useState(false);

  return (
    <div className="header">
      <div className="header_container">
        <div className="logo">logo</div>
        <div className="header-cart_container" onMouseOver={() => setCartVisible(true)} onMouseLeave={() => setCartVisible(false)}>
          <div className="cart-icon_container">
            {
              cartItems?.length > 0 ? <div className="cart_count">{cartItems.length}</div> : ""
            }
            <ShoppingCartIcon sx={{ fontSize: 50 }} />
          </div>
          {
            CartVisible && <CartDrop />
          }
        </div>
      </div>
    </div>
  )
}

export default Header