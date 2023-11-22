import React from 'react'
import Home from '../assets/Home.png'
import image2 from '../assets/image2.png'
import realestate from '../assets/realestate.jpg'
import screenshot from '../assets/screenshot.png'

function Work() {
  return (
    <div className='w-full md:h-screen text-gray-300 bg-slate-950'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-blue-300'>Work</p>
            <p className='py-6'>// Check out some of my recent work</p>
          </div>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div style={{ backgroundImage: `url(${Home})`}}
            className='shadow shadow-slate-300 group container rounded-md flex justify-center items-center mx-auto content-div'>

              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font bold text-white tracking-wider'>
                React JS Applications
                </span>
                <div className='pt-8 text-center'>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>
            </div>
            <div style={{ backgroundImage: `url(${image2})`}}
            className='shadow shadow-slate-300 group container rounded-md flex justify-center items-center mx-auto content-div'>

              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font bold text-white tracking-wider'>
                Front-End Project
                </span>
                <div className='pt-8 text-center'>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>
            </div>
            <div style={{ backgroundImage: `url(${realestate})`}}
              className='shadow shadow-slate-300 group container rounded-md flex justify-center items-center mx-auto content-div'>

              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font bold text-white tracking-wider'>
                Real Estate Project
                </span>
                <div className='pt-8 text-center'>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>
            </div>

            <div style={{ backgroundImage: `url(${screenshot})`}}
              className='shadow shadow-slate-300 group container rounded-md flex justify-center items-center mx-auto content-div'>

              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font bold text-white tracking-wider'>
                BootCamp Website
                </span>
                <div className='pt-8 text-center'>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>
            </div>

            <div style={{ backgroundImage: `url(${realestate})`}}
              className='shadow shadow-slate-300 group container rounded-md flex justify-center items-center mx-auto content-div'>

              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font bold text-white tracking-wider'>
                Real Estate Project
                </span>
                <div className='pt-8 text-center'>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>
            </div>

            <div style={{ backgroundImage: `url(${realestate})`}}
              className='shadow shadow-slate-300 group container rounded-md flex justify-center items-center mx-auto content-div'>

              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font bold text-white tracking-wider'>
                Real Estate Project
                </span>
                <div className='pt-8 text-center'>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Work