import React from "react";
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid';
import bgImg from '../assets/cyber.png'

const Hero = () => {
    return (
        <div name='home' className='w-full h-full bg-zinc-200 flex flex-col justif-between'>
            <div  className='grid md:grid-cols-2 max-w-[1240px] my-32 mx-12'>
                <div className="flex flex-col justify-center md:items-start w-full  ">
                <p className="text-2xl">Unique Production Method</p>
                <h1 className="py-3 text-2xl md:text-6xl font-bold">Cloud Engineer</h1>
                <p className="text-2xl">Our solution Outlet </p>
                <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
                </div>
            <div className="">
                <img className="w-full" src={bgImg} alt="/" />
            </div>
            <div className=" relative flex flex-col shadow-xl justify-center rounded-x1 bg-zinc-200 mx-1 md:min-w-[600px]
             md:left-1/2 transform md:-translate-x-1 px-4 text-center ">
                <p>Data Services</p>
                <div className="flex  flex-wrap px-4 justify-between">
                    <p className="flex px-4 py-2 text-slate-500"><CloudUploadIcon className="h-6 text-indigo-600" /> App Security</p>
                    <p className="flex px-4 py-2 text-slate-500"><DatabaseIcon className="h-6 text-indigo-600" /> Dashboard Design</p>
                    <p className="flex px-4 py-2 text-slate-500"><ServerIcon className="h-6 text-indigo-600" /> Cloud Data</p>
                    <p className="flex px-4 py-2 text-slate-500"><PaperAirplaneIcon className="h-6 text-indigo-600" /> API</p>
                </div>
            </div>
            </div>
        </div>
    )
        
    
}
export default Hero;