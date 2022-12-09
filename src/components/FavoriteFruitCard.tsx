import React from 'react'

const FavoriteFruitCard = (props) => {
    return (
        <div className="flex flex-col w-72 h-110">
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
                        <span class="material-symbols-outlined">add</span>
                        <span>1</span>
                        <span class="material-symbols-outlined">remove</span>
                    </div>
                    <div className="flex-1">
                        <button className="bg-yellow-400 rounded-md w-full h-full">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavoriteFruitCard
