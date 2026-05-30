import { Maximize2, Play, Quote, Volume2 } from 'lucide-react'
import React from 'react'
import { assets } from '../assets/assets';

const HandsOn = () => {
  return (
    <>

        <div className="w-full bg-white text-white py-20 px-6 md:px-16 lg:px-24 font-sans flex flex-col items-center">
          
         
          <div className="w-full max-w-6xl text-center mb-12 ">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight mb-4">
              Get Hands-On Experience: <br/>
              Explore Our Cyber Security Internships
            </h2>
           
          </div>

          <div className="w-full max-w-5xl relative mb-24 select-none pointer-events-none filter brightness-[0.85] contrast-[1.05]">
            <img 
              src={assets.exp} 
              alt="...map" 
              className="  "
            />
          </div>
        </div>
    </>
  )
}

export default HandsOn