import React from 'react'
import aboutImage from "../assets/aboutImage.png"
import CardData from './CardData';

const About = () => {
    return (
        <>
            <div className='about flex m-10 justify-evenly items-center gap-3 2xl:mx-[20%] 2xl:w-auto 2xl:text-3xl 2xl:m-20'>
                <div className='aboutImage w-auto'>
                    <img src={aboutImage} alt="" />
                </div>

                <div className='abouttext w-3/4 tracking-wider text-justify sm:text-lg text-sm xl:text-2xl'>
                    <h1 className='text-lg underline underline-offset-4'>I'm Dhruv Goradia a BCA UnderGrad</h1>

                    <p className='my-3 text-gray-300'>🎓 I thrive in the realm of frontend development, boasting mastery in <span className='underline underline-offset-4 text-white'>HTML5, CSS3, and JavaScript</span>.</p>

                    <p className='my-3 text-gray-300'>   💻 My toolkit extends to leveraging advanced CSS frameworks such as <span className='underline underline-offset-4 text-white'> Bootstrap 5 and Tailwind CSS</span>, enabling me to craft visually stunning and responsive web interfaces.At present, my focus lies on deepening my <span className='underline underline-offset-4 text-white'>proficiency in React JS</span>, as I recognize its pivotal role in modern web development. </p>

                    <p className='my-3 text-gray-300'> 🔧I am committed to continually refining my frontend skills and open to work, <span className='text-white underline underline-offset-4'>constantly seeking for opportunities.</span></p>
                </div>
            </div>

            <div className="skills mt-10 ">
                <h1 className='text-center text-2xl tracing-wide underline underline-offset-[10px] xl:text-5xl'>My Skills</h1>
                <CardData />
            </div>
        </>
    )
}

export default About
