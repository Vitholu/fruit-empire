import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import About from './routes/About'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },

    {
        path: '/about',
        element: <About />,
    },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
