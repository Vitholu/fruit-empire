import { createContext } from 'react'

const CartContext = createContext({
    quantity: 0,
    setQuantity: (qty) => {},
})

export default CartContext
