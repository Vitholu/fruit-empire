import React from 'react'
import { FaInstagram, FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa'
const SubmitEmail = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Email sent')
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="flex w-full gap-4 pr-12">
                <input
                    type="text"
                    placeholder="example@email.com"
                    className="h-16 text-black indent-6 w-full flex-4 rounded-xl"
                />
                <button
                    type="submit"
                    className="bg-white text-black p-4 pl-8 pr-8 flex-1 rounded-xl"
                >
                    Subscribe
                </button>
            </form>
        </>
    )
}

const Newsletter = () => {
    return (
        <div className="flex min-h-[16rem]">
            <div className="flex flex-3 bg-black justify-center items-center">
                <div className="flex flex-1 gap-8">
                    <div className="text-4xl flex-1">
                        <h2 className="ml-auto w-64">Subscribe To Our Newsletter</h2>
                    </div>

                    <div className="flex flex-2 items-center">
                        <SubmitEmail />
                    </div>
                </div>
            </div>

            <div className="flex flex-1 flex-col pt-16 pl-12 bg-[#171719] gap-6">
                <h2 className="text-lg">Social Media</h2>
                <ul className="flex gap-6">
                    <li>
                        <FaInstagram size={24} />
                    </li>
                    <li>
                        <FaFacebookSquare size={24} />
                    </li>
                    <li>
                        <FaTwitterSquare size={24} />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Newsletter
