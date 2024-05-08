import React, { useRef, useState } from 'react'
import contactImage from "../assets/contactImage.png"
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [name, setName] = useState("")
    const [mail, setmail] = useState("")
    const [message, setmessage] = useState("")
    const [sending, setSending] = useState(false)


    // template_dtipj4q
    //service_4nfmoyo
    // 2TzKWWO7cmrWe5mPB

    const handleSubmit = (e) => {
        e.preventDefault()
        setSending(true)
        emailjs.send(
            "service_4nfmoyo",
            "template_dtipj4q",
            {
                from_name: name,
                to_name: "Dhruv",
                from_email: mail,
                to_email: "dhruvhgoradia@gmail.com",
                message: message,
            },
            "2TzKWWO7cmrWe5mPB"
        )
            .then(() => {
                setSending(false)
                alert("Thank you I'll get back to you as soon as possible")
                setName("")
                setmail("")
                setmessage("")
            }, (error) => {
                setSending(false)
                alert("Oops!! Something went wrong🫠")
            })
    }



    return (
        <>
            <div className="contact w-full mt-20  flex flex-col md:flex-row md:justify-evenly md:items-start md:gap-10 px-12 xl:items-center">


                <div className='md:w-1/2 w-full flex flex-col justify-center xl:text-3xl'>
                    <img src={contactImage} alt="contactImage" className='hidden md:block' />
                    <p className='mb-3 text-justify'>I'm currently available to take on new projects,so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    <div className='contactDetail '>
                        <h3>
                            <span className='flex justify-start items-center my-3 text-xs sm:text-sm xl:text-3xl'>
                                <img src="https://img.icons8.com/nolan/30/new-post.png" alt="E-mail" className='xl:w-12' />
                                <p className='mx-3'>dhruvhgoradia@gmail.com</p>
                            </span>
                        </h3>
                        <h3>
                            <span className='flex justify-start items-start my-3 text-xs sm:text-lg xl:text-3xl'>
                                <img src="https://img.icons8.com/nolan/30/phone.png" alt="phone" className='xl:w-12' />
                                <p className='mx-3'>+91 7741088375</p>
                            </span>
                        </h3>
                        <h3>
                            <span className='flex justify-start items-start my-3 text-xs sm:text-lg xl:text-3xl'>
                                <img src="https://img.icons8.com/nolan/30/marker.png" alt="location" className='xl:w-12' />
                                <p className='mx-3'>Maharashtra,India</p>
                            </span>
                        </h3>
                    </div>
                </div>


                <form onSubmit={handleSubmit} className='md:w-1/2 w-full' method='POST'>
                    <h1 className='text-3xl my-5'><span className=' underline underline-offset-4 '>Let's Talk</span>👋</h1>

                    <div className="formArea flex flex-col">

                        <label htmlFor="name" className='my-5 xl:my-10 text-lg xl:text-3xl'>Enter your Name: </label>

                        <input type="text" name="name" id="name" placeholder='Your Name ...'
                            className='p-3 h-10 xl:h-20 shadow-xl bg-[#101723e1] text-white font-bold rounded-md xl:text-2xl'
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            required
                        />

                        <label htmlFor="email" className='my-5 xl:my-10 text-lg xl:text-3xl'>Enter your E-Mail: </label>
                        <input type="email" name="email" id="email" placeholder='Your mail ...'
                            className='p-3 h-10 xl:h-20 shadow-xl bg-[#101723e1] text-white font-bold rounded-md xl:text-2xl'
                            value={mail}
                            onChange={(event) => setmail(event.target.value)}
                            required
                        />


                        <label htmlFor="message" className='mt-5 xl:my-10 text-lg xl:text-3xl'>Your Message: </label>
                        <textarea className='p-3 h-[7rem] xl:h-[20rem] shadow-xl bg-[#101723e1] text-white font-bold rounded-md xl:text-2xl' placeholder='Your Message ...'
                            value={message}
                            onChange={(event) => setmessage(event.target.value)}
                            name='message'
                            required
                        ></textarea>


                        <input type="submit" name='submitbtn' value={`${sending ? "Sending..." : "Send"}`} className='p-3 bg-gradient-to-r w-24 cursor-pointer from-indigo-700 to-blue-500 m-auto mt-5 xl:my-10 rounded-md active:opacity-75 xl:text-3xl xl:p-10 xl:w-44 xl:rounded-lg' />
                    </div>
                </form >
            </div >
        </>
    )
}

export default Contact
