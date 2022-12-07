import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import './App.css'

function App() {
    return (
        <div className="flex bg-header flex-col">
            <div className=" flex h-24 justify-between shadow-2xl">
                <Header />
            </div>

            <div className="flex">
                <Hero />
            </div>
        </div>
    )
}

export default App
