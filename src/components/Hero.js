import React from "react";


const Hero = () => {
    return (
        <div className="text-white bg-slate-950 border-b-1 border-gray-400">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#38BDF8] font-bold p-2">PROFESSIONAL SOFTWARE DEVELOPER</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow with Software. </h1>
                <div className="flex justify-center items-center">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">Fast, flexible Solutions for <span className="text-gray-300">B2B</span></p>
                    
                </div>
                <p className="md:text-2xl text-xl font-bold text-[#515D71] ">Enhance Your Business Performance With Reliable Software Solutions</p>
                <button className="bg-[#38BDF8] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-blue-300 hover:text-white ease-in-out duration-500">Contact Us</button>
            </div>


        </div>
        
    )
}

export default Hero;