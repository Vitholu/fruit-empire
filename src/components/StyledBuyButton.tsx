import React, { useState } from 'react'
import CartContext from './CartContext.js'

const StyledBuyButton = (props) => {
    const [quantity, setQuantity] = useState(0)

    const handleClick = () => {
        setQuantity(quantity + 1)
    }

    return (
        <CartContext.Provider value={{ quantity, setQuantity }}>
            <button className={props.style} onClick={handleClick}>
                Buy Now
            </button>
        </CartContext.Provider>
    )
}

export default StyledBuyButton
