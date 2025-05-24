import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Auth from '../views/Auth/Auth'
import Chat from '../views/Chat/Chat'
import Navbar from '../components/layouts/Navbar'
import Documentation from '../components/pages/Documentation'

const AppRoutes = () => {
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<div>Home</div>} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/about" element={<div>About</div>} />
                <Route path="/docs" element={<Documentation/>} /> {/* New route added */}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes