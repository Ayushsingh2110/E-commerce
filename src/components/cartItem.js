import React, { useState, useEffect } from 'react'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { useCart } from '../contexts/cartContext';

const CartItem = ({ product }) => {
    let [ProductQuantity, setProductQuantity] = useState(1);
    const { updateCart, removeFromCart } = useCart();
     
    useEffect(() => {
        setProductQuantity(product.selectedQuantity);
    }, []);

    function handleQuantity(e) {
        e.preventDefault()
        if (e.target.innerText === "-" && e.target.id === "quantityMinus" && ProductQuantity > 1) {
            setProductQuantity(--ProductQuantity);
            product.selectedQuantity = ProductQuantity;
            updateCart(product);
        }
        if (e.target.innerText === "+" && e.target.id === "quantityPlus") {
            setProductQuantity(++ProductQuantity);
            product.selectedQuantity = ProductQuantity;
            updateCart(product);
        }
    }

    function Remove(data) {
        removeFromCart(data)
    }

    return (
        <div className="cart-item_card">
            <div className="cart-item_details">
                <div className="cart-item_img">
                    <img src={product.image} />
                </div>
                <h3 className="cart-item_name">
                    {product.name}
                </h3>
            </div>

            <div className="cart-item_action">
                <div className="product_quantity">
                    <button className="minus" id="quantityMinus" onClick={handleQuantity} disabled={ProductQuantity <= 1 ? "True" : ""}>
                        -
                    </button>
                    <span className="value">{ProductQuantity}</span>
                    <button className="plus" id="quantityPlus" onClick={handleQuantity} disabled={ProductQuantity >= product.unitCount ? "True" : ""}>
                        +
                    </button>
                </div>
                <DeleteForeverOutlinedIcon onClick={() => Remove(product)} />
            </div>
        </div>
    )
}

export default CartItem