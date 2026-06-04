import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Talents = () => {
  const navigate = useNavigate()
  return (
   <>
        <div className="w-full bg-white py-16 px-6 md:px-16 lg:px-24 flex items-center justify-center overflow-hidden font-sans">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl w-full">
            
            {/* Left Side*/}
            <div className="flex flex-col text-left items-start max-w-xl">
              
              <span className="text-blue-600 font-bold text-sm md:text-base tracking-wide mb-3">
                NULLBYTE Talents
              </span>
              
              <h1 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
                To accomplish our goals, we engage with the community.
              </h1>
              
              <p className="text-slate-500 text-sm md:text-base leading-relaxed font-normal">
                Empowering your cybersecurity journey: We connect our ethical
                hacking and cybersecurity course graduates with the cybersecurity
                community, opening doors to job opportunities, mentorship, and
                valuable resources to propel them toward fulfilling careers.
              </p>
            </div>
    
          
            <div className="w-full flex items-center justify-center relative select-none pointer-events-none">
              <img
                src={assets.roatational}
                alt="Rotating partner ecosystem network illustration"
                className="w-full max-w-105 lg:max-w-125 h-auto object-contain animate-[spin_60s_linear_infinite]"
              />
            </div>
          </div>
        </div>

        <div className="w-full  mt-14  mx-auto bg-slate-400  p-8 md:p-12 flex flex-row sm:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-950/20">
                    <div className="text-center sm:text-left">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                        Secure Your Seat Now!
                        </h2>
                        <p className="text-sm md:text-base text-blue-100 mt-2 font-medium opacity-90">
                        start your cybersecurity course today.
                        </p>
                    </div>

                    
                    <button onClick={()=>navigate(`/contact`)}  className="whitespace-nowrap px-8 py-3.5 border border-white/40 hover:border-white text-sm font-semibold text-white bg-white/5 hover:bg-white/15 rounded-xl transition-all duration-200 shadow-sm active:scale-[0.98] cursor-pointer">
                        Book Now
                    </button>

            </div>
   </>
  );
};

export default Talents;