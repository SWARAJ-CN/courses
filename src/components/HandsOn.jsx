import { Maximize2, Play, Quote, Volume2 } from 'lucide-react'
import React from 'react'
import { assets } from '../assets/assets';

const HandsOn = () => {
  return (
    <>
      <div className="w-full bg-slate-100 text-black py-20 px-6 md:px-16 lg:px-24 font-sans flex flex-col items-center border-t border-slate-900">
        
        <div className="w-full max-w-6xl text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight mb-4 leading-tight">
            Get Hands-On Experience: <br/>
            <span className="bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Explore Our Cyber Security Internships
            </span>
          </h2>
        </div>

    
        <div className="w-full max-w-5xl relative mb-12 rounded-2xl overflow-hidden border border-slate-800/60 shadow-2xl shadow-blue-950/20 select-none filter brightness-[0.85] contrast-[1.05]">
          <img 
            src={assets.exp} 
            alt="Experience Map" 
            className="w-full h-auto object-cover"
          />
        </div>

      </div>
    </>
  )
}

export default HandsOn