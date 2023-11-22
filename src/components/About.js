import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsMedium } from "react-icons/bs";

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-slate-950 text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#38BDF8]'>
              About
            </p>
          </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Charles Anene, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?</p>  
            </div>
          </div>
            <ul className="flex mx-auto justify-center py-16">
              <li className="p-4  hover:scale-125 ease-in-out duration-700"><FaInstagram size={30} color="#38BDF8"/></li>
              <li className="p-4 hover:scale-125 ease-in-out duration-700"><FaLinkedin size={30} color="#38BDF8"/></li>
              <li className="p-4 hover:scale-125 ease-in-out duration-700"><FaXTwitter size={30} color="#38BDF8"/></li>
              <li className="p-4 hover:scale-125 ease-in-out duration-700 sca"><BsMedium size={30} color="#38BDF8"/></li>
            </ul>
      </div>
       
    </div>

  );
};

export default About;