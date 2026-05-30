import React from 'react';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { batchData } from '../assets/assets';

const Batches = () => {
  
  


  return (

<>
    
        <div className="w-full bg-[#0f1115] text-white py-16 px-6 md:px-16 lg:px-24 font-sans">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 max-w-7xl mx-auto">
            <div>
              <span className="text-blue-500 font-semibold text-sm tracking-wider uppercase block mb-2">
                Upcoming Batches
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                Secure Your Seat, Limited Seats!
              </h2>
            </div>
            
            <button className="w-fit border border-slate-700 hover:border-blue-500 text-sm font-semibold text-slate-200 hover:text-white px-6 py-2.5 rounded-lg bg-transparent hover:bg-blue-600/10 transition-all duration-200 shrink-0 flex items-center gap-1.5 group">
              View All Batches
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {batchData.map((batch, index) => (
              <div 
                key={index} 
                className="w-full bg-[#161920] border border-slate-800/80 rounded-2xl overflow-hidden flex flex-row items-stretch shadow-lg transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(37,99,235,0.08)] group"
              >
                <div className="bg-linear-to-b from-blue-600 to-blue-700 text-white flex flex-col justify-center items-center px-6 md:px-8 min-w-26.25 md:min-w-32.5 text-center shrink-0 relative">
                  <span className="text-3xl md:text-4xl font-black tracking-tight leading-none">
                    {batch.day}
                  </span>
                  <span className="text-xs md:text-sm font-bold uppercase tracking-wider mt-1.5 opacity-90">
                    {batch.month}
                  </span>
                
                  <Calendar className="absolute -bottom-2 -left-2 w-12 h-12 opacity-5 pointer-events-none transform -rotate-12" />
                </div>
                <div className="p-5 md:p-6 flex flex-row items-center justify-between grow gap-4">
                  <div className="flex flex-col justify-center">
                    <h3 className="text-lg md:text-xl font-bold text-white tracking-wide group-hover:text-blue-400 transition-colors">
                      {batch.title}
                    </h3> 
                    <p className="text-xs font-medium text-slate-400 mt-1 flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-slate-500 shrink-0" />
                      {batch.hours} <span className="text-slate-700">|</span> {batch.pace}
                    </p>
                    <span className={`text-xs font-semibold mt-3 w-fit px-2.5 py-0.5 rounded-full ${
                      batch.mode === 'Online' 
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    }`}>
                      {batch.mode}
                    </span>
                  </div>
                  <button className="whitespace-nowrap border border-slate-700 hover:border-blue-500 text-xs md:text-sm font-semibold text-slate-200 hover:text-white px-4 py-2 rounded-lg bg-transparent hover:bg-blue-600/10 transition-all duration-200 shrink-0 active:scale-95">
                    Book now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full  mx-auto bg-black  p-8 md:p-12 flex flex-row sm:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-950/20">
                    <div className="text-center sm:text-left">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                         Book A Demo With US
                        </h2>
                        <p className="text-sm md:text-base text-blue-100 mt-2 font-medium opacity-90">
                            Book a free demo session and explore practical Ethical Hacking training in India.
                        </p>
                    </div>

                    
                    <button className="whitespace-nowrap px-8 py-3.5 border border-white/40 hover:border-white text-sm font-semibold text-white bg-white/5 hover:bg-white/15 rounded-xl transition-all duration-200 shadow-sm active:scale-[0.98] cursor-pointer">
                        Join Us Today
                    </button>

            </div>
</>
  );
};

export default Batches;