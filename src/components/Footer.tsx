import React from 'react'
import { Logo } from './Header'

const Footer = () => {
    return (
        <>
            <div className="flex bg-black h-[10rem]">
                <Logo />
                <ul className="flex flex-4 items-center justify-end gap-24 w-full">
                    <li>Best Fruits</li>
                    <li>Social Media</li>
                    <li>More For You</li>
                    <li>Your Shop</li>
                </ul>

                <div className="flex flex-2 justify-center items-center">
                    <p>The Copyright 2022 guide covers 14 jurisdictions. </p>
                </div>
            </div>
        </>
    )
}

export default Footer
