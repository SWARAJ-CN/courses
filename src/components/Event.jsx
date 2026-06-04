import React from 'react'
import { event } from '../assets/assets';
import { ArrowDownToLine, ArrowUpRight } from 'lucide-react';
import GlobalFootprint from './GlobalFootprint';

const Event = () => {
  return (
    <>
    <div className="w-full  mx-auto bg-linear-to-r from-blue-900 via-slate-950 to-blue-900  p-8 md:p-12 items-center justify-between gap-6 shadow-xl shadow-blue-950/20">
        <h2 className="text-2xl md:text-6xl font-extrabold text-white tracking-tight text-center">
            Our Events
        </h2>
    </div>

     <div className="w-full min-h-screen bg-[#0f1115] text-white py-16 px-6 md:px-16 lg:px-24 font-sans">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <span className="text-blue-500 font-semibold text-sm tracking-wider uppercase block mb-2">
           Our Upcoming RedTeam Academy Events
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white max-w-2xl leading-tight">
           NULLBYTE Hacker Academy: <br className="hidden sm:inline" />{" "}
           Where Ethical Hackers Gather
          </h2>
        </div>

      
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center sm:justify-items-start">
        {event.map((event, index) => {
          return (
            <div
              key={index}
              className="w-full max-w-[320px] bg-[#161920] border border-slate-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_10px_30px_rgba(37,99,235,0.1)] flex flex-col group"
            >
              <div className="relative w-full aspect-4/3 overflow-hidden bg-slate-900">
                <img
                  src={event.image}
                  alt="Course Cover"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#161920] via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-5 flex flex-col grow justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-wide line-clamp-2 leading-snug min-h-12.5 group-hover:text-blue-400 transition-colors">
                    {event.title}
                  </h3>
                  
                </div>
                <div className="flex flex-col gap-3 pt-2">
                  <button className="cursor-pointer w-full text-center py-2.5 mt-1 border border-slate-700 hover:border-blue-500 text-sm font-semibold text-slate-200 hover:text-white rounded-lg bg-transparent hover:bg-blue-600/10 transition-all duration-200 flex items-center justify-center gap-1.5">
                    Lern more
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
            
      </div>
    </div>
        <GlobalFootprint/>
    </>  
    )
}

export default Event