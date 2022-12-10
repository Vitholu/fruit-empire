import React, { useContext } from 'react'
import CartContext from './CartContext.js'

const ShoppingCart = (props) => {
    const { quantity } = useContext(CartContext)
    return (
        <span className="material-symbols-outlined cursor-pointer">
            shopping_cart
            <sub>{quantity}</sub>
        </span>
    )
}

export default ShoppingCart
