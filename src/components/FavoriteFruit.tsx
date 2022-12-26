import React from 'react'
import FavoriteFruitCard from './FavoriteFruitCard'
import Banana from '../assets/Banana_Card.png'
import Orange from '../assets/Orange_Card.png'
import Pineapple from '../assets/Pineapple_Card.png'
import Apple from '../assets/Apple_Card.png'

interface PropsObjectType {
    bool: boolean
    title: string
    size?: string
}

const SectionHeader = (props: PropsObjectType) => {
    console.log(props)
    return (
        <div className="flex items-center justify-between border-b-2 pb-6 border-gray-50">
            <h2 className={`${props.size || 'text-2xl'}` + ' flex items-center'}>{props.title}</h2>
            <p className="flex justify-center h-8 gap-2 cursor-pointer">
                {props.bool && (
                    <>
                        <span>More</span>
                        <span className="material-symbols-outlined">arrow_right_alt</span>
                    </>
                )}
            </p>
        </div>
    )
}

const FavoriteFruit = () => {
    return (
        <div className="flex flex-col ml-3/20 mr-3/20 mt-24 ">
            <SectionHeader title={'Favorite Fruits'} bool={true} />
            <div className="grid grid-flow-col auto-cols-auto justify-between gap-x-8 pt-16">
                <FavoriteFruitCard
                    picture={Banana}
                    fruit={'Banana'}
                    currentPrice={'39'}
                    previousPrice={'55'}
                />
                <FavoriteFruitCard
                    picture={Orange}
                    fruit={'Orange'}
                    currentPrice={'20'}
                    previousPrice={'30'}
                />
                <FavoriteFruitCard
                    picture={Pineapple}
                    fruit={'Pineapple'}
                    currentPrice={'32'}
                    previousPrice={'47'}
                />
                <FavoriteFruitCard
                    picture={Apple}
                    fruit={'Apple'}
                    currentPrice={'17'}
                    previousPrice={'25'}
                />
            </div>
        </div>
    )
}

export { SectionHeader }
export default FavoriteFruit
