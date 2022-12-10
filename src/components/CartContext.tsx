import { createContext } from 'react'

const CartContext = createContext({
    quantity: 0,
    product: [],

    setQuantity: (qty) => {},
    setProduct: (prod) => [],
})

export default CartContext
