import React, { useContext, useState } from 'react'
import CartContext from './CartContext'
import StyledBuyButton from './StyledBuyButton'
import _ from 'lodash'

const FavoriteFruitCard = (props) => {
    const { itemQuantity, setItemQuantity, setProduct, product } = useContext(CartContext)
    const [toggle, setToggle] = useState(false)
    const [upOne, setUpOne] = useState(0)

    const handleIncrement = (fruit) => {
        setItemQuantity(upOne)
        setUpOne(upOne + 1)
    }

    const handleDecrement = (fruit) => {
        const removeItem = product.indexOf(fruit)
        setUpOne(upOne - 1)
        product.splice(removeItem, removeItem + 1)
    }

    return (
        <div className="flex flex-col w-72 h-min">
            <img src={props.picture} alt="" />
            <div className="flex flex-col bg-black-g200 p-4">
                <p className="text-2xl pt-2">{props.fruit}</p>
                <p className="text-gray-50 pt-2">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                </p>
                <div>
                    <div className="flex gap-4 pt-4">
                        <span className="text-2xl h-12">{props.currentPrice}$</span>
                        <span className="text-xl pt-1 text-gray-50 line-through h-12">
                            {props.previousPrice}$
                        </span>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="flex flex-1 justify-around items-center rounded-md border-2 border-gray-50 p-2">
                        <span
                            class="material-symbols-outlined cursor-pointer"
                            onClick={() => handleIncrement(props.fruit)}
                        >
                            add
                        </span>
                        <span>{upOne > 0 ? (upOne <= 0 ? 1 : upOne) : 1}</span>
                        <span
                            class="material-symbols-outlined cursor-pointer"
                            onClick={() => handleDecrement(props.fruit)}
                        >
                            remove
                        </span>
                    </div>
                    <div className="flex-1">
                        <StyledBuyButton
                            style="bg-yellow-400 rounded-md w-full h-full"
                            product={props.fruit}
                            quant={upOne}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavoriteFruitCard
