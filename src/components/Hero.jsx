import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen lg:h-[700px] bg-slate-900 overflow-hidden flex items-center justify-center">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={assets.hero}
        alt="Hero Background"
      />

      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-6 md:p-12">
        <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
          <div className="flex flex-col gap-4 text-center lg:text-left max-w-2xl items-center lg:items-start">
            <span className="text-white text-xs md:text-sm font-medium border border-blue-500 bg-blue-500/30 px-4 py-1.5 rounded-full w-fit">
              Mastering Ethical Hacking through Hands-On Labs
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-slate-100 font-extrabold tracking-tight leading-tight text-center lg:text-left">
              India’s Most Advanced <br />
              <span className="bg-linear-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
                Cybersecurity & Ethical
              </span>{" "}
              <br />
              Hacking Training Academy
            </h1>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-3xl">
              Building a safe-play culture. Accredited by EC Council USA. Top
              Cyber Security Courses and Ethical Hacking Training in India &
              GCC. Proudly known as the Leading and No.1 Cybersecurity Academy.
            </p>
            <button className="w-fit text-slate-200 px-6 py-2.5 border border-blue-400 rounded-full cursor-pointer hover:bg-blue-500 hover:border-blue-500 transition-all duration-300 font-medium mt-2">
              Read More
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
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl cursor-pointer transition-all duration-300 shadow-lg shadow-blue-600/30 mt-2 active:scale-[0.98]">
              BOOK A CALLBACK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
