/* eslint-disable no-unused-vars */
import React from 'react'
import imgProject1 from '../assets/proj1.png'
import imgProject2 from '../assets/proj2.png'
import imgProject3 from '../assets/proj3.png'
import imgProject4 from '../assets/proj4.png'
import imgProject5 from '../assets/proj5.png'
import imgProject6 from '../assets/proj6.png'

const Project = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5' id='project'>
        <div className="pb-8">
          <p className="text-4xl mb-3 font-bold primary-color">Project</p>
          <p className="text-gray-400">
            Check out some of my recent projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

          <div className="transform transition-transform duration-100 hover:scale-105 overflow-hidden
                          shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                          h-[200px] bg-cover relative">
            <img src={imgProject1} alt="Project One" />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider">Project</span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="transform transition-transform duration-100 hover:scale-105 overflow-hidden
                          shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                          h-[200px] bg-cover relative">
            <img src={imgProject2} alt="Project One" />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider">Project</span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="transform transition-transform duration-100 hover:scale-105 overflow-hidden
                          shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                          h-[200px] bg-cover relative">
            <img src={imgProject3} alt="Project One" />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider">Project</span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="transform transition-transform duration-100 hover:scale-105 overflow-hidden
                          shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                          h-[200px] bg-cover relative">
            <img src={imgProject4} alt="Project One" />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider">Project</span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="transform transition-transform duration-100 hover:scale-105 overflow-hidden
                          shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                          h-[200px] bg-cover relative">
            <img src={imgProject5} alt="Project One" />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider">Project</span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="transform transition-transform duration-100 hover:scale-105 overflow-hidden
                          shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                          h-[200px] bg-cover relative">
            <img src={imgProject6} alt="Project One" />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider">Project</span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Project