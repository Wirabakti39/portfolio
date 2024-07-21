/* eslint-disable no-unused-vars */
import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import tailwindcss from '../assets/tailwind.png'
import reactjs from '../assets/react.png'

const Skill = () => {
  return (
    <div className="text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3 place-items-center md:flex md:justify-between md:items-center">
        <h2 className="text-gray-700 text-xl md:text-4xl font-bold m-4">
            Tech <br /> Stack <br /> Saya
        </h2>

        <div className="flex flex-col items-center justify-center m-4 sm:my-0 w-[40px] md:w-[100px]">
            <img src={html} alt="" />
            <p className='mt-2'>HTML</p>
        </div>
        <div className="flex flex-col items-center justify-center m-4 sm:my-0 w-[40px] md:w-[100px]">
            <img src={css} alt="" width={100} height={100} />
            <p className='mt-2'>CSS</p>
        </div>
        <div className="flex flex-col items-center justify-center m-4 sm:my-0 w-[40px] md:w-[100px]">
            <img src={javascript} alt="" width={100} height={100} />
            <p className='mt-2'>Javascript</p>
        </div>
        <div className="flex flex-col items-center justify-center m-4 sm:my-0 w-[40px] md:w-[100px]">
            <img src={tailwindcss} alt="" width={100} height={100} />
            <p className='mt-2'>TailwindCSS</p>
        </div>
        <div className="flex flex-col items-center justify-center m-4 sm:my-0 w-[40px] md:w-[100px]">
            <img src={reactjs} alt="" width={100} height={100} />
            <p className='mt-2'>ReactJS</p>
        </div>
    </div>
  )
}

export default Skill