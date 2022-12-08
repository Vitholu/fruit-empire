import React from 'react'
import banana from '../assets/banana.png'

const Hero = () => {
    return (
        <div className="flex  ml-3/20 mr-3/20 h-v2/3 w-screen">
            <div className="flex-1 border-l-2 border-gray-50 pl-12">
                <div className="flex mt-20 text-xl">
                    <h2>01</h2>
                    <h2 className="text-gray-50">/02</h2>
                </div>
                <h2 className="text-xl pt-4">Banana</h2>
                <p className="pt-4 text-gray-50">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                </p>
            </div>
            <div className="flex flex-2 items-center w-full justify-center">
                <img src={banana} alt="" className=" z-10" />
            </div>
            <div className="flex-2"></div>
        </div>
    )
}

export default Hero
