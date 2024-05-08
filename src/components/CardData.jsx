import React from 'react'
import { cardData } from '../data/data'


const CardData = () => {
    return (
        <>
            <div className='flex justify-center items-center'>
                <div className="skillCards grid grid-cols-3 mt-10 sm:gap-12 gap-5">
                    {
                        cardData && cardData.map((card) => (
                            <div key={card.id} className='md:px-5 lg:px-20  bg-[#1b204093] rounded-lg duration-300 border-[0.5px] border-[#1b266b93] cursor-pointer hover:shadow-md hover:shadow-[#1b266be1] lg:flex flex-col justify-center'>
                                <img src={card.path} alt={card.tech} />
                                <h1 className='text-center sm:text-xl 2xl:text-3xl text-xs my-3 bg-gradient-to-br from-blue-700  to-white text-transparent bg-clip-text'>{card.tech}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default CardData
