import React from 'react'
import { Background_PreFooter } from '../assets/index.js'

const PreFooter = () => {
    return (
        <div className="flex">
            <div className="flex flex-col flex-3 bg-pre-footer bg-no-repeat bg-cover min-h-[25rem] justify-center gap-8">
                <p className="text-4xl font-bold w-[300px] ml-[200px]">
                    Sign up and check our offers
                </p>
                <div>
                    <button className="bg-white flex text-black justify-center p-2 font-bold pl-6 pr-6 ml-[200px]">
                        Sign-Up
                    </button>
                </div>
            </div>

            <div className="flex flex-col flex-1 bg-black pl-12 ">
                <div className="pt-6">
                    <h2 className="text-xl">More Opinions</h2>
                    <p className="text-gray-50 max-w-[16rem]">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    </p>
                </div>
                <div className="pt-6">
                    <h2 className="text-xl">Newsletter</h2>
                    <p className="text-gray-50 max-w-[16rem]">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    </p>
                </div>
                <div className="pt-6">
                    <h2 className="text-xl">Subscribe</h2>
                    <p className="text-gray-50 max-w-[16rem]">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PreFooter
