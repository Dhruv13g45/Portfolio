import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import "../App.css"

const Navbar = () => {

    return (
        <>
            <div className='w-80 h-80 border-[200px] rounded-[50%] -z-50 border-violet-700 fixed top-[-100px] left-[-200px] blur-[100px]'></div>


            <div className='flex justify-center items-center w-full mt-12 '>
                <nav className=' lg:flex lg:justify-around lg:items-center p-3 sm:p-5 w-3/4 font-light z-50  border-white shadow-md rounded-xl bg-[#101723e1] fixed text-[15px] backdrop-blur hidden'>
                    <div className="leftnav w-auto text-3xl">

                        <NavLink to="/" className="bg-gradient-to-r from-violet-700 to-white inline-block text-transparent bg-clip-text text-[20px] 2xl:text-[3rem]">Dhruv's Portfolio</NavLink>
                    </div>


                    <div className="rightnav text-lg lg:flex lg:justify-around lg:w-3/5 lg:tracking-wider 2xl:text-[2rem] hidden">
                        <NavLink to="/" className={({ isActive }) => `${isActive ? "text-blue-300" : "text-white"} links`}>Home</NavLink>
                        <NavLink to="about" className={({ isActive }) => `${isActive ? "text-blue-300 " : "text-white"} links`}>About Me</NavLink>
                        <NavLink to="projects" className={({ isActive }) => `${isActive ? "text-blue-300" : "text-white"} links`}>Projects</NavLink>
                        <NavLink to="contact" className={({ isActive }) => `${isActive ? "text-blue-300 " : "text-white"} links`}>Contact</NavLink>
                    </div>
                </nav>


                <div className='sideNav bg-[#101723b4] backdrop-blur-md fixed top-[20px] z-50 flex justify-around p-5 w-3/4 rounded-lg lg:hidden'>
                    <span >
                        <NavLink to="/" >
                            <img src="https://img.icons8.com/nolan/34/home.png" alt="home" />
                        </NavLink>
                    </span>
                    <span >
                        <NavLink to="about">
                            <img src="https://img.icons8.com/nolan/34/1A6DFF/C822FF/guest-male.png" alt="about" />
                        </NavLink>
                    </span>
                    <span >
                        <NavLink to="projects">
                            <img src="https://img.icons8.com/nolan/34/1A6DFF/C822FF/service.png" alt="projects" />
                        </NavLink>
                    </span>
                    <span >
                        <NavLink to="contact">
                            <img src="https://img.icons8.com/nolan/34/1A6DFF/C822FF/new-post.png" alt="contact" />
                        </NavLink>
                    </span>
                </div>
            </div>


        </>
    )
}

export default Navbar
