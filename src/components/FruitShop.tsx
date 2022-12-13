import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { SectionHeader } from './FavoriteFruit'
import FavoriteFruitCard from './FavoriteFruitCard'

import {
    BananaShop_Card,
    MelonShop_Card,
    PineappleShop_Card,
    AppleShop_Card,
    OrangeShop_Card,
    CherryShop_Card,
    AvocadoShop_Card,
    StrawberriesShop_Card,
} from '../assets/index.js'

const shopItems = [
    {
        fruit: 'Banana',
        url: BananaShop_Card,
        currentPrice: '39',
        previousPrice: '55',
    },
    {
        fruit: 'Melon',
        url: MelonShop_Card,
        currentPrice: '18',
        previousPrice: '27',
    },
    {
        fruit: 'Orange',
        url: OrangeShop_Card,
        currentPrice: '18',
        previousPrice: '45',
    },
    {
        fruit: 'Pineapple',
        url: PineappleShop_Card,
        currentPrice: '57',
        previousPrice: '90',
    },
    {
        fruit: 'Apple',
        url: AppleShop_Card,
        currentPrice: '15',
        previousPrice: '21',
    },
    {
        fruit: 'Cherry',
        url: CherryShop_Card,
        currentPrice: '43',
        previousPrice: '67',
    },
    {
        fruit: 'Avocado',
        url: AvocadoShop_Card,
        currentPrice: '13',
        previousPrice: '51',
    },
    {
        fruit: 'Strawberries',
        url: StrawberriesShop_Card,
        currentPrice: '29',
        previousPrice: '74',
    },
]

const FruitShop = () => {
    return (
        <>
            <SectionHeader title={'Fruit Shop'} bool={true} />
            <div className="grid grid-cols-4 justify-between gap-x-8 gap-y-8 pt-16">
                {shopItems.map((item) => {
                    return (
                        <FavoriteFruitCard
                            picture={item.url}
                            fruit={item.fruit}
                            currentPrice={item.currentPrice}
                            previousPrice={item.previousPrice}
                            key={item.fruit}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default FruitShop
