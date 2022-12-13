import { createContext } from 'react'

const CartContext = createContext({
    quantity: 0,
    itemQuantity: 0,
    product: [],

    setItemQuantity: (qty) => {},
    setQuantity: (qty) => {},
    setProduct: (prod) => [],
})

export default CartContext
