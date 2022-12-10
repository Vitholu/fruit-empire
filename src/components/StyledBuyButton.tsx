import React, { useContext } from 'react'
import CartContext from './CartContext.js'

const StyledBuyButton = (props) => {
    const { setQuantity } = useContext(CartContext)
    const handleClick = () => setQuantity((prev) => prev + 1)

    return (
        <button className={props.style} onClick={handleClick}>
            Buy Now
        </button>
    )
}

export default StyledBuyButton
