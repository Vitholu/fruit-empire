import React from 'react'
import Blueberries from '../assets/Blueberries.png'
import Apple from '../assets/Apple.png'
import StyledBuyButton from './StyledBuyButton'

const HeroHighlight = () => {
    return (
        <div className="flex ml-3/20 bg-black-g200">
            <div className="flex flex-1 border-l-2 border-gray-50 gap-12">
                <div>
                    <img src={Blueberries} alt="" />
                </div>
                <div className="flex flex-col gap-2 pt-4">
                    <h3 className="text-2xl">Blueberries</h3>
                    <p className="text-gray-50 max-w-xxs pb-3">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    </p>
                    <p className="text-gray-50">Amet minim mollit non deserunt ullamco </p>
                </div>
                <div className="flex flex-col gap-4 pl-6">
                    <div className="flex gap-4 pt-12">
                        <span className="text-3xl h-12">39$</span>
                        <span className="text-xl pt-1 text-gray-50 line-through h-12">59$</span>
                    </div>

                    <StyledBuyButton style={'p-3 mb-4 bg-yellow-400 rounded-3xl'} />
                </div>
            </div>

            <div className="flex-1 border-l-2 border-gray-50">
                <div className="flex flex-1 border-l-1 border-gray-50 gap-12">
                    <div>
                        <img src={Apple} alt="" />
                    </div>
                    <div className="flex flex-col gap-2 pt-4">
                        <h3 className="text-2xl">Apple</h3>
                        <p className="text-gray-50 max-w-xxs pb-3">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                            sint.
                        </p>
                        <p className="text-gray-50">Amet minim mollit non deserunt ullamco </p>
                    </div>
                    <div className="flex flex-col gap-4 pl-6">
                        <div className="flex gap-4 pt-12">
                            <span className="text-3xl h-12">49$</span>
                            <span className="text-xl pt-1 text-gray-50 line-through h-12">59$</span>
                        </div>

                        <StyledBuyButton style={'p-3 mb-4 bg-yellow-400 rounded-3xl'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroHighlight
