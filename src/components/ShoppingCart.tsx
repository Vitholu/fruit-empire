import React, { useContext } from 'react'
import CartContext from './CartContext.js'

export const CartIcon = () => {
    return <span className="material-symbols-outlined cursor-pointer">shopping_cart</span>
}

const ShoppingCart = (props) => {
    const cartQuantity = useContext(CartContext)
    console.log(cartQuantity)
}

export default ShoppingCart
