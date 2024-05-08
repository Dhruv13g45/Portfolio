import React from 'react'
import { projInfo } from "../data/data.js"
import { NavLink } from 'react-router-dom'
import "../App.css"

const Projects = () => {
    return (
        <>
            <div className='m-10'>
                <h1 className='text-center text-xl underline underline-offset-4'>My Projects</h1>

                <div className="projectSection w-full flex flex-col justify-center items-center">
                    {

                        projInfo && projInfo.map((project) => (

                            <div className="project w-full sm:w-3/4 flex flex-col lg:flex-row lg:justify-evenly lg:items-center bg-[#16192d93] p-10 gap-10 rounded-2xl my-10" key={project.projectName}>
                                <img src={project.projImg} alt="porjectbackground" className='w-full lg:w-1/2 sm:rounded-3xl rounded-md' />
                                <div>
                                    <h1 className='projectName text-xl my-3 tracking-wider font-bold underline underline-offset-8 xl:text-3xl xl:my-5'>{project.projectName}</h1>
                                    <p className='projectDiscription text-justify text-xs sm:text-md md:text-lg xl:text-2xl'>{project.projectDisc}</p>

                                    <div className='flex justify-around mt-5'>
                                        <NavLink to={project.repo} target="_blank">
                                            <button type="button" className='bg-[#1a1f3f93] p-3 xl:p-10 xl:rounded-xl xl:text-xl rounded-lg shadow-xl tracking-wider'>GitHub</button>
                                        </NavLink>
                                        <NavLink to={project.live} target="_blank">
                                            <button type="button" className="bg-[#1a1f3f93] p-3 xl:p-10 xl:rounded-xl xl:text-xl rounded-lg shadow-xl tracking-wider">Live</button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>

                        ))

                    }
                </div>
            </div >
        </>
    )
}

export default Projects
