import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import HeroHighlight from './components/HeroHighlight'
import './App.css'

function App() {
    return (
        <div className="flex bg-header flex-col  max-w-full">
            <span className="rounded-full h-128 w-128 bg-gradient-radial from-white-g50 to-black-g50 absolute top-1/4 left-1/3 z-1 blur-2xl"></span>
            <span className="rounded-full h-72 w-72 bg-gradient-radial from-white-g150 to-black-g150 absolute top-1/3 left-14/25 z-1 blur-2xl"></span>
            <div className=" flex h-24 justify-between shadow-2xl">
                <Header />
            </div>

            <div className="flex flex-col bg-gradient-to-b from-white-g100 to-black-g100">
                <Hero />
                <HeroHighlight />
            </div>
        </div>
    )
}

export default App
