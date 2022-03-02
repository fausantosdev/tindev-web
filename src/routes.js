import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Main from './pages/Main'

const Index = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Login />} />
                <Route path='/home/:id' element={<Main />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Index