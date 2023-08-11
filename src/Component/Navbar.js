import React from 'react'
import logo from '../Images/Logo.png'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
    const active = (isActive) => {
        return (
            isActive ? 'text-white' : 'text-gray-400 hover:text-gray-500'
        )
    }
    const [navactive, setnavactive] = useState(false)
    return (
        <nav>
            <div className='navcontent bg-slate-700 py-1  sticky top-0 z-50 shadow-sm shadow-white '>
                <div className="navinnercontent flex h-14 justify-around items-center">
                    <div className='navimgbur'>
                        <img src={logo} alt="NitEdu" className='navimg' />
                        <div className="navburger">
                            <i className="fa-solid fa-bars fa-2xl text-white"
                                onClick={() => {
                                    setnavactive(!navactive)
                                }}></i>
                        </div>
                    </div>
                    <div className={navactive ? "text-white  bg-slate-700 text-xl p-5 gap-5 flex flex-col w-full" : "navfeatures flex justify-between gap-5 text-white font-normal font-mono text-xl ml-3"}>
                        <NavLink
                            to="/"
                            className={({ isActive }) => active(isActive)}
                            id="home">
                            Home
                        </NavLink>
                        <NavLink
                            to="/About"
                            className={({ isActive }) => active(isActive)}
                            id="about">
                            About
                        </NavLink>
                        <NavLink
                            to="/Courses"
                            className={({ isActive }) => active(isActive)}
                            id="courses">
                            Courses
                        </NavLink>
                        <NavLink
                            to="/Contact"
                            className={({ isActive }) => active(isActive)}
                            id="contact">
                            Contact
                        </NavLink>
                        <NavLink
                            to="/LoginSinup"
                            className={({ isActive }) => active(isActive)}
                            id="login">
                            SignUp
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}