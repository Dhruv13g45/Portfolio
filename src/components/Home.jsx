import React from 'react'
import homeImage from "../assets/homeImage.png"
import { NavLink, Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className="main_home flex md:flex-row md:justify-evenly flex-col mt-10 lg:mt-20 xl:mt-[25%] justify-center">


                <div className="homeimg xl:w-1/2">
                    <img src={homeImage} alt="homeImage"
                        className='w-full'
                    />
                </div>



                <div className="hometext m-10">
                    <h1 className='text-5xl items-start mt-5 font-bold xl:text-[10rem]'>Hello , <span className='bg-gradient-to-r from-blue-500 to-white inline-block text-transparent bg-clip-text'>I'm Dhruv</span></h1>
                    <h2 className='text-4xl font-bold text-violet-500 mt-10 xl:text-[7rem]'>FrontEnd Developer</h2>
                    <div className='text mt-2 xl:mt-20'>
                        <p className='text-4xl font-bold xl:text-[5rem] xl:my-20'>Turning ideas into</p>
                        <p className='text-4xl font-bold xl:text-[5rem] xl:my-20'>real life <span className='bg-gradient-to-br from-violet-700  to-blue-500 text-transparent bg-clip-text'>projects</span></p>
                        <p className='text-4xl font-bold xl:text-[5rem] xl:my-20'>is my calling.</p>

                        <button className='tracking-widest p-3 duration-300 rounded-lg my-3 bg-gradient-to-br from-violet-700 to-blue-700 hover:scale-105'>
                            <NavLink to="https://drive.google.com/file/d/14_cyIHTFB755UgGzC1THIJoHQJkpMtpM/view?usp=sharing" >
                                Download CV
                            </NavLink>
                        </button>
                    </div>

                    <div className='mt-5 flex justify-center items-center gap-5 bg-[#1b20404e] p-3 rounded-lg xl:p-10 xl:rounded-xl'>
                        <h1 to="contact" className='tracking-widest text-white text-xl xl:text-5xl  font-light '> <span className='border-b-[.5px] border-white'>Let's </span>Connect</h1>
                        <div className='flex justify-center items-center gap-5'>
                            <span>
                                <Link to="https://www.linkedin.com/in/dhruv-goradia-3111102a6/" target='_blank'>
                                    <img src="https://img.icons8.com/nolan/64/linkedin.png" alt="LinkedIn" className='w-10 xl:w-20 duration-300 hover:scale-105' />
                                </Link>
                            </span>
                            <span>
                                <Link to="https://github.com/Dhruv13g45" target='_blank'>
                                    <img src="https://img.icons8.com/nolan/64/github.png" alt="Github" className='w-10 xl:w-20 duration-300 hover:scale-105' />
                                </Link>
                            </span>
                            <span>
                                <Link to="https://twitter.com/DhruvG1307" target="_blank">
                                    <img src="https://img.icons8.com/nolan/64/twitter.png" alt="Twitter" className='w-10 xl:w-20 duration-300 hover:scale-105' />
                                </Link>
                            </span>
                        </div>

                    </div>
                </div>
            </div >
        </>
    )
}

export default Home
