/* eslint-disable no-unused-vars */
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import heroImg from '../assets/picture-dwb.png'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>

        <div className="my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
            <img src={heroImg} alt="Hero Image" />
        </div>

        <div className="px-5 my-auto">
            <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-extrabold">
                <span className='primary-color text-2xl sm:text-3xl lg:text-4xl'>
                    I&apos;m a
                </span> <br />
                <TypeAnimation 
                    sequence={[
                        "Highschool Student",
                        1000,
                        "Front-end Dev",
                        1000,
                        "Web Developer",
                        1000,
                    ]}
                    wrapper='span'
                    speed={50}
                    repeat={Infinity}
                />
            </h1>
            <p className='text-white sm:text-lg my-6 lg:text-xl'>
                {/* Nama saya Dimas Wirabakti dan pengalaman pengembangan web saya adalah 2+ tahun. */}
                Dimas Wirabakti, student at SMA N 1 Gianyar.
            </p>

            <div className="my-8">
                <a href="/" className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white">
                    Download CV
                </a>
                <a href="#contact" className="px-6 py-3 w-full rounded-xl border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none">
                    Contact
                </a>
            </div>

        </div>
    </div>
  )
}

export default Hero