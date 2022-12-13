import React, { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import CartContext from './CartContext.js'

import {
    BananaShop_Card,
    MelonShop_Card,
    PineappleShop_Card,
    AppleShop_Card,
    OrangeShop_Card,
    CherryShop_Card,
    AvocadoShop_Card,
    StrawberriesShop_Card,
    Blueberries,
} from '../assets/index.js'

const DropMenuCard = (props) => {
    const { product } = props
    const { itemQuantity } = useContext(CartContext)
    const uniqueItemQuantity = new Set([...product])

    return (
        <div>
            <div className="w-[20rem] flex-col flex-wrap min-h-[3rem] absolute top-24 right-[2%] flex justify-center items-center bg-black gap-12">
                {[...uniqueItemQuantity].map((x) => {
                    return (
                        <h1 className="max-w-[14rem] text-ellipsis overflow-hidden" key={uuidv4()}>
                            <div>
                                <img
                                    src={(function () {
                                        switch (x) {
                                            case 'Apple':
                                                return AppleShop_Card
                                            case 'Blueberries':
                                                return Blueberries
                                            case 'Banana':
                                                return BananaShop_Card
                                            case 'Orange':
                                                return OrangeShop_Card
                                            case 'Pineapple':
                                                return PineappleShop_Card
                                            case 'Cherry':
                                                return CherryShop_Card
                                            case 'Melon':
                                                return MelonShop_Card
                                            case 'Strawberries':
                                                return StrawberriesShop_Card
                                            case 'Avocado':
                                                return AvocadoShop_Card

                                            default:
                                                console.log(x)
                                                break
                                        }
                                    })()}
                                    alt=""
                                />
                                <div className="flex justify-between border-b-2 border-gray-50">
                                    <h3 className="pt-8 pb-2 ">{x}</h3>
                                    <h3 className="pt-8 pb-2 ">
                                        {'Quantity: ' +
                                            product.filter(
                                                (item, index) =>
                                                    item ===
                                                    product[product.findLastIndex((a) => a === x)]
                                            ).length}
                                    </h3>
                                </div>
                            </div>
                        </h1>
                    )
                })}
            </div>
        </div>
    )
}

export const CartIcon = ({ setDropDown, dropDown }) => {
    const { quantity, product } = useContext(CartContext)
    const uniqueItemQuantity = new Set([...product])
    return (
        <span
            className="material-symbols-outlined cursor-pointer"
            onClick={() => setDropDown(!dropDown)}
        >
            shopping_cart
            <sub>{[...uniqueItemQuantity].length}</sub>
        </span>
    )
}

const ShoppingCart = ({ dropDown }) => {
    const { product } = useContext(CartContext)

    return <div className="flex flex-col ">{dropDown && <DropMenuCard product={product} />}</div>
}

export default ShoppingCart
