import React from 'react'
import { CartContextProvider } from './cartContext'

const CombinedContext = ({children}) => {
  return (
    <CartContextProvider>
        {children}
    </CartContextProvider>
  )
}

export default CombinedContext