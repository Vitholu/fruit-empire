import React from 'react'

const Header = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center ml-3/20 border-l-2 border-gray-50 pl-12">
                <h2 className="text-2xl font-roboto text-white font-bold">Food</h2>
                <h2 className="text-2xl font-sacramento text-white">Empire</h2>
            </div>

            <div className="flex items-center justify-center mr-3/20">
                <ul className="flex flex-row gap-16">
                    <li>Favorite Fruits</li>
                    <li>Fruit Shop</li>
                    <li>About Us</li>
                    <li className="flex flex-row gap-6">
                        <span class="material-symbols-outlined">login</span>
                        <span class="material-symbols-outlined">shopping_cart</span>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header
