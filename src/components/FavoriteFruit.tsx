import React from 'react'
import Banana from '../assets/Banana_Card.png'

const FavoriteFruit = () => {
    return (
        <div className="flex flex-col ml-3/20 mr-3/20 mt-24 ">
            <div className="flex items-center justify-between border-b-2 pb-6 border-gray-50">
                <h2 className="text-2xl flex items-center">Favorite Fruits</h2>
                <p className="flex justify-center h-8 gap-2 cursor-pointer">
                    <span>More</span>
                    <span class="material-symbols-outlined">arrow_right_alt</span>
                </p>
            </div>

            <div className="grid grid-flow-col auto-cols-auto justify-between gap-x-8 pt-16">
                <div className="flex flex-col w-72 h-110">
                    <img src={Banana} alt="" />
                    <div className="flex flex-col bg-black-g200 p-4">
                        <p className="text-2xl pt-2">Banana</p>
                        <p className="text-gray-50 pt-2">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                            sint.
                        </p>
                        <div>
                            <div className="flex gap-4 pt-4">
                                <span className="text-2xl h-12">39$</span>
                                <span className="text-xl pt-1 text-gray-50 line-through h-12">
                                    55$
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
                                <button className="bg-yellow-400 rounded-md w-full h-full">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-72 h-110"></div>
                <div className="w-72 h-110"></div>
                <div className="w-72 h-110"></div>
            </div>
        </div>
    )
}

export default FavoriteFruit
