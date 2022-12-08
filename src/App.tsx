import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import './App.css'

function App() {
    return (
        <div className="flex bg-header flex-col">
            <span className="rounded-full h-128 w-128 bg-gradient-radial from-white-g50 to-black-g50 absolute top-1/4 left-1/3 z-1 blur-2xl"></span>
            <span className="rounded-full h-72 w-72 bg-gradient-radial from-white-g150 to-black-g150 absolute top-1/3 left-14/25 z-1 blur-2xl"></span>
            <div className=" flex h-24 justify-between shadow-2xl">
                <Header />
            </div>

            <div className="flex bg-gradient-to-b from-white-g100 to-black-g100">
                <Hero />
            </div>
        </div>
    )
}

export default App
