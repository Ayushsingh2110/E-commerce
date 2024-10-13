import React, { useState, useEffect } from 'react'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { useCart } from '../contexts/cartContext';
import CartItem from './cartItem';
import { getData } from '../utils/server';

const CartDrop = () => {

    const { cartItems, removeFromCart } = useCart();

    // let unitCounts = [];

    // useEffect(() => {
    //     function upper(){
    //         function getUnitCounts(){
    //             for(let item of cartItems){
    //                 let itemData = getData(`http://localhost:4000/products?id=${item.id}`);
    //                 console.log(unitCounts, "unit Array")
    //                 unitCounts.push(itemData[0]?.unitCount)
    //             }
    //         }
    //         getUnitCounts();
    //     }
        
    //     upper();     
    // }, []);

    return (
        <>
            <div className="cart_body">
                {
                    cartItems.length !== 0 ?
                        (
                            <>
                                <div className="cart-item_list">
                                    {
                                        cartItems?.map((item, i) => {
                                            return <CartItem product={item} key={i} />
                                        })
                                    }
                                </div>
                                <button className="order_button">Place order</button>
                            </>
                        ) :
                        (
                            <p className="Empty_cart-message">
                                You havn't added anything to the cart
                            </p>
                        )
                }
            </div>
        </>
    )
}

export default CartDrop