import React from "react";

const Offer = () => {

  return (

    <div className="bg-[#0f1115] text-white py-16 px-6 md:px-12">
      <div className="text-center mb-16">
        <p className="text-blue-500 text-sm font-bold tracking-widest uppercase mb-3">
          What We Offer
        </p>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          Our Ethical Hacking Course Modes
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="bg-[#161920] border border-slate-800/60 rounded-2xl p-8 md:p-10 flex items-center justify-between relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
          <div className="max-w-sm z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">In-Person Training</h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8">
              RTHA’s ethical hacking course equips both professionals and
              newcomers with the advanced practical skills.
            </p>
            <button className="cursor-pointer border border-blue-500 text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-blue-600 transition duration-200">
              Get Started
            </button>
          </div>
          <h1 className="text-[120px] md:text-[160px] font-black text-blue-600/10 select-none pointer-events-none transition-transform duration-300 group-hover:scale-105">
            1
          </h1>
        </div>
        {/* Card 2 */}
        <div className="bg-[#161920] border border-slate-800/60 rounded-2xl p-8 md:p-10 flex items-center justify-between relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
          <h1 className="text-[120px] md:text-[160px] font-black text-blue-600/10 select-none pointer-events-none transition-transform duration-300 group-hover:scale-105">
            2
          </h1>
          <div className="max-w-sm text-right z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Pentest Garage</h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8">
              Students enrolled in the cyber security course have access to a
              secured penetration test platform.
            </p>
            <button className="cursor-pointer border border-blue-500 text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-blue-600 transition duration-200">
              Get Started
            </button>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-[#161920] border border-slate-800/60 rounded-2xl p-8 md:p-10 flex items-center justify-between relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
          <div className="max-w-sm z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">NULLBYTE360</h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8">
              NULLBYTE 360 provides a virtual and classroom learning environment
              for ethical hacking.
            </p>
            <button className="cursor-pointer border border-blue-500 text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-blue-600 transition duration-200">
              Get Started
            </button>
          </div>
          <h1 className="text-[120px] md:text-[160px] font-black text-blue-600/10 select-none pointer-events-none transition-transform duration-300 group-hover:scale-105">
            3
          </h1>
        </div>
        {/* Card 4 */}
        <div className="bg-[#161920] border border-slate-800/60 rounded-2xl p-8 md:p-10 flex items-center justify-between relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
          <h1 className="text-[120px] md:text-[160px] font-black text-blue-600/10 select-none pointer-events-none transition-transform duration-300 group-hover:scale-105">
            4
          </h1>
          <div className="max-w-sm text-right z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">NULLBYTE Xperience</h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8">
              Interactive learning platform with personalized ethical hacking
              experience.
            </p>
            <button className="cursor-pointer border border-blue-500 text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-blue-600 transition duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;