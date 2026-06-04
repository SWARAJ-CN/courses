import React from "react";

import { useParams } from "react-router-dom";
import { assets, courses } from "../assets/assets";
import { Award, BookOpen, Check, GraduationCap, Laptop, ShieldCheck, Users } from "lucide-react";

const CourseDetails = () => {

    const {id} = useParams();

    const course = courses.find((item)=> item._id == id)

    if(!course){
        alert('no course found')
    }

  return (
    <>
      <div className="relative w-full min-h-screen lg:h-175 bg-slate-900 overflow-hidden flex items-center justify-center">
          <img
          className="absolute inset-0 h-full w-full object-cover"
          src={assets.linux}
          alt="Hero Background"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-6 md:p-12">
          <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
            
                <div key={id} className="flex flex-col gap-4 text-center lg:text-left max-w-2xl items-center lg:items-start">
                  <span className="text-white text-xs md:text-sm font-medium border border-blue-500 bg-blue-500/30 px-4 py-1.5 rounded-full w-fit">
                   {course.title}
                  </span>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl text-slate-100 font-extrabold tracking-tight leading-tight text-center lg:text-left">
                    {course.title}
                  </h1>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-3xl">
                   {course.subtitle}
                  </p>
                  <button className="w-fit text-slate-200 px-6 py-2.5 border border-blue-400 rounded-full cursor-pointer hover:bg-blue-500 hover:border-blue-500 transition-all duration-300 font-medium mt-2">
                    Download Syllubus
                  </button>
                </div>
              
            <div className="w-full max-w-md flex flex-col gap-4 items-center text-slate-200 p-6 md:p-8 bg-slate-900/80 border border-slate-700/50 backdrop-blur-md rounded-2xl shadow-2xl">
              <h3 className="text-xl font-semibold text-blue-400 self-start mb-2">
                Request a Call Back
              </h3>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full placeholder-slate-400 border p-3.5 bg-slate-800/50 border-slate-700 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
              />
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full placeholder-slate-400 border p-3.5 bg-slate-800/50 border-slate-700 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
              />
              <input
                type="text"
                placeholder="+91 223 445 556"
                className="w-full placeholder-slate-400 border p-3.5 bg-slate-800/50 border-slate-700 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
              />
              <input
                type="text"
                placeholder="Qualification eg.BCA"
                className="w-full placeholder-slate-400 border p-3.5 bg-slate-800/50 border-slate-700 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
              />

              <div className="flex items-center justify-between w-full p-4 bg-slate-800/40 rounded-xl border border-slate-700/60 shadow-sm font-sans select-none">
                <div className="flex items-center gap-3">
                  <label className="relative flex items-center justify-center w-6 h-6 cursor-pointer group">
                    <input type="checkbox" className="peer sr-only" />

                    <div className="w-full h-full border-2 border-blue-500 bg-slate-900/50 rounded transition-all duration-200 peer-checked:bg-blue-600 peer-checked:border-blue-600 shadow-inner group-hover:border-blue-400"></div>

                    <svg
                      className="absolute w-4 h-4 text-white opacity-0 transition-opacity duration-200 peer-checked:opacity-100 pointer-events-none"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </label>
                  <span className="text-sm font-medium text-slate-300">
                    I'm not a robot
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center scale-90 opacity-80">
                  <span className="text-[9px] text-blue-400 font-semibold mt-0.5 tracking-wider uppercase">
                    reCAPTCHA
                  </span>
                  <div className="flex gap-1 text-[8px] text-slate-400 mt-0.5 font-medium">
                    <p className="hover:underline cursor-pointer">Privacy</p>
                    <span>•</span>
                    <p className="hover:underline cursor-pointer">Terms</p>
                  </div>
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl cursor-pointer transition-all duration-300 shadow-lg shadow-blue-600/30 mt-2 active:scale-[0.98]">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

       <div id='more' className='w-full min-h-screen bg-[#0f1115] text-white py-16 px-6 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center font-sans'>
        
        <div className='grid grid-cols-2 gap-4 md:gap-6 order-2 md:order-1'>
            {/* Card 1 */}
            <div className='bg-[#161920] border border-slate-800 rounded-xl p-6 flex flex-col items-center text-center justify-center min-h-45 transition-all hover:border-blue-500/50 group'>
                <GraduationCap className='w-10 h-10 text-blue-500 mb-4 transition-transform group-hover:scale-110 duration-300' />
                <p className='text-sm md:text-base font-semibold text-slate-200 leading-snug'>Total Modules</p>
                <p className="text-slate-300">{course.modules.length}</p>
            </div>

           
             <div className='bg-[#161920] border border-slate-800 rounded-xl p-6 flex flex-col items-center text-center justify-center min-h-45  transition-all hover:border-blue-500/50 group'>
                <Laptop className='w-10 h-10 text-blue-500 mb-4 transition-transform group-hover:scale-110 duration-300' />
                <p className='text-sm md:text-base font-semibold text-white leading-snug'>Programme Format</p>
                <p className="text-slate-300">{course.modes}</p>
            </div>

            {/* Card 3 */}
            <div className='bg-[#161920] border border-slate-800 rounded-xl p-6 flex flex-col items-center text-center justify-center min-h-45  transition-all hover:border-blue-500/50 group'>
                <BookOpen className='w-10 h-10 text-blue-500 mb-4 transition-transform group-hover:scale-110 duration-300' />
                <p className='text-sm md:text-base font-semibold text-slate-200 leading-snug'>Duration</p>
                <p className="text-slate-300">{course.duration}</p>
            </div>

            {/* Card 4 */}
            <div className='bg-[#161920] border border-slate-800 rounded-xl p-6 flex flex-col items-center text-center justify-center min-h-45  transition-all hover:border-blue-500/50 group'>
                <Users className='w-10 h-10 text-blue-500 mb-4 transition-transform group-hover:scale-110 duration-300' />
                <p className='text-sm md:text-base font-semibold text-slate-200 leading-snug'>Effort</p>
                <p className="text-slate-300">{course.duration}</p>
            </div>

            
        </div>

    
        <div className='flex flex-col space-y-6 order-1 md:order-2'>
            <p className="text-blue-600 font-semibold">
                Learn more about the {course.title}
            </p>
            <h1 className="text-5xl font-semibold">
                {course.title}
            </h1>
            <p>
                {course.about}
            </p>
        </div>

    </div>
    {/*  */}

    <div className="bg-slate-950 font-sans min-h-screen text-slate-100">

      <div className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Modules In This {course.title}
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Take a look at our Comprehensive Curriculum
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {course.modules.map((module,index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 bg-slate-900/50 p-6 rounded-xl border border-slate-800/60 shadow-2xl backdrop-blur-md hover:border-blue-500/30 transition-all duration-200"
              >
                <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-lg tracking-wide shadow-md shadow-blue-900/50">
                  {module._id}
                </div>
                <p className="text-slate-300 font-medium text-sm leading-relaxed">
                  {module.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
    </>
  );
};

export default CourseDetails;
