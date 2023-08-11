import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'
import Courses from './Courses/Courses'
import Contact from './Contact/Contect'
import LoginSinup from './LoginSinup/LoginSinup'

export default function Router() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/About" element={<About />} />
                <Route exact path="/Contact" element={<Contact />} />
                <Route exact path="/Courses" element={<Courses />} />
                <Route exact path="/LoginSinup" element={<LoginSinup />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </div>
    )
}
