import React from 'react'
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

const FruitShop = () => {
    return (
        <>
            <SectionHeader title={'Fruit Shop'} bool={true} />
            <div className="grid grid-cols-4 justify-between gap-x-8 gap-y-8 pt-16">
                <FavoriteFruitCard
                    picture={BananaShop_Card}
                    fruit={'Banana'}
                    currentPrice={'39'}
                    previousPrice={'55'}
                />
                <FavoriteFruitCard
                    picture={OrangeShop_Card}
                    fruit={'Orange'}
                    currentPrice={'20'}
                    previousPrice={'30'}
                />
                <FavoriteFruitCard
                    picture={PineappleShop_Card}
                    fruit={'Pineapple'}
                    currentPrice={'32'}
                    previousPrice={'47'}
                />
                <FavoriteFruitCard
                    picture={AppleShop_Card}
                    fruit={'Apple'}
                    currentPrice={'17'}
                    previousPrice={'25'}
                />
                <FavoriteFruitCard
                    picture={CherryShop_Card}
                    fruit={'Cherry'}
                    currentPrice={'21'}
                    previousPrice={'24'}
                />
                <FavoriteFruitCard
                    picture={MelonShop_Card}
                    fruit={'Melon'}
                    currentPrice={'18'}
                    previousPrice={'27'}
                />
                <FavoriteFruitCard
                    picture={StrawberriesShop_Card}
                    fruit={'Strawberries'}
                    currentPrice={'12'}
                    previousPrice={'15'}
                />
                <FavoriteFruitCard
                    picture={AvocadoShop_Card}
                    fruit={'Avocado'}
                    currentPrice={'24'}
                    previousPrice={'36'}
                />
            </div>
        </>
    )
}

export default FruitShop
