import { createContext } from 'react'

interface Cart {
    quantity?: number
    itemQuantity?: number
    product?: string
    [key: string]: any
}

const CartContext: Cart = createContext({
    quantity: 0,
    itemQuantity: 0,
    product: [],

    setItemQuantity: (qty: number) => {},
    setQuantity: (qty: number) => {},
    setProduct: (prod: string) => {},
})

export default CartContext
