import React from 'react'
import ShoppingCart from './ShoppingCart'

export const Logo = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center ml-3/20">
                <h2 className="text-2xl font-roboto text-white font-bold">Food</h2>
                <h2 className="text-2xl font-sacramento text-white">Empire</h2>
            </div>
        </>
    )
}

const Header = () => {
    return (
        <>
            <Logo />

            <div className="flex items-center justify-center mr-3/20">
                <ul className="flex flex-row gap-16">
                    <li>Favorite Fruits</li>
                    <li>Fruit Shop</li>
                    <li>About Us</li>
                    <li className="flex flex-row gap-6">
                        <span class="material-symbols-outlined">login</span>
                        <ShoppingCart />
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header
