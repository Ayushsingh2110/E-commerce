import { useState, useEffect, createContext, useContext } from 'react';

const CartContext = createContext({
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
});

export const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    
    useEffect(() => {
        initializeCartItems();
    }, []);

    useEffect(() => {
        sessionStorage.setItem("cart", JSON.stringify(cartItems))
    }, [cartItems]);

    function initializeCartItems(){
        const cart = JSON.parse(sessionStorage.getItem("cart"))
        if (cart && cart.length > 0) {
            setCartItems(cart)
        }
    }

    const addToCart = (payload) => {
        setCartItems((prev) => {
            // Check if the item already exists in the cart
            const existingItemIndex = prev.findIndex((item) => item.id === payload.id);

            // If item exists, update its quantity
            if (existingItemIndex !== -1) {
                const updatedCart = prev.map((item, index) =>
                    index === existingItemIndex ? { ...item, selectedQuantity: payload.selectedQuantity } : item
                );
                return updatedCart;
            }
            // If item doesn't exist, add it to the cart
            return [...prev, payload];
        })
    }

    const hasItem = (id) => {
       const isPresent = cartItems?.some((item) => item.id === id);
       return isPresent;
    }

    const getCartItem = (id) => {        
        const cartItems = cartItems.filter((item) => item.id === id);
        return cartItems;
    }

    const updateCart = (payload) => {
        setCartItems((prev) => {
            const updatedPrev = [...prev];
            for (let i in updatedPrev) {
                if (updatedPrev[i].id === payload.id) {
                    updatedPrev[i] = payload
                }
            }
            return updatedPrev;
        })
    }

    const removeFromCart = (payload) => {
        setCartItems((prev) => {
            const updatedCart = prev.filter((item) => item.id !== payload.id)
            return updatedCart;
        })
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, hasItem, getCartItem, updateCart }}>
            {children}
        </CartContext.Provider>
    )

}

export const useCart = () => {
    return useContext(CartContext);
}