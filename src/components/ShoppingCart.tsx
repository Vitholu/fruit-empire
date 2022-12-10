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

    const itemQuantity = () => {
        const duplicateItemQuantity = product.filter((item, index) => item === product[0]).length
        console.log(duplicateItemQuantity)
    }

    const HandleImage = () => {
        switch (product) {
            case 'Apple':
                return console.log(product)

            default:
                console.log(product)
                break
        }
    }
    const uniqueItemQuantity = new Set([...product])

    return (
        <div>
            <div className="w-[14rem] flex flex-col flex-wrap min-h-[3rem] bg-yellow-50 absolute top-24">
                {[...uniqueItemQuantity].map((x) => {
                    return (
                        <h1
                            className="max-w-[14rem] text-black text-ellipsis overflow-hidden"
                            key={uuidv4()}
                        >
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
                                {x}
                            </div>
                        </h1>
                    )
                })}
            </div>
        </div>
    )
}

const ShoppingCart = (props) => {
    const { quantity, product } = useContext(CartContext)
    const [dropDown, setDropDown] = useState(false)

    const handleClick = () => {
        setDropDown(!dropDown)
    }

    return (
        <div className="flex flex-col">
            <span className="material-symbols-outlined cursor-pointer" onClick={handleClick}>
                shopping_cart
                <sub>{quantity}</sub>
            </span>
            {dropDown && <DropMenuCard product={product} />}
        </div>
    )
}

export default ShoppingCart
