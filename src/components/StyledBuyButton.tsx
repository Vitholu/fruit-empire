import React, { useContext } from 'react'
import CartContext from './CartContext'

const StyledBuyButton = (props) => {
    const { setQuantity, setProduct, setItemQuantity, itemQuantity, product } =
        useContext(CartContext)

    const handleClick = () => {
        setQuantity((prev) => (itemQuantity >= 1 ? itemQuantity + 1 : prev + 1))
        for (let i = 1; props.quant >= i; i++) {
            setProduct((prev) => [...prev, props.product])
        }
    }

    return (
        <button className={props.style} onClick={handleClick}>
            Buy Now
        </button>
    )
}

export default StyledBuyButton
