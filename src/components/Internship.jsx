import React from "react";
import Testimonials from "./Testimonials";
import HandsOn from "./HandsOn";
import CourseModules from "./CourseModules";

const Internship = () => {
  return (
    <>
      <div className="relative w-full min-h-screen lg:h-175 bg-slate-900 overflow-hidden flex items-center justify-center">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://www.pixelstalk.net/wp-content/uploads/images6/Hacker-Wallpaper-4K-HD-Free-download.jpg"
          alt="Hero Background"
        />

        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-6 md:p-12">
          <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
            
          
            <div className="flex flex-col gap-4 text-center lg:text-left max-w-2xl items-center lg:items-start">
              <span className="text-white text-xs md:text-sm font-medium border border-blue-500 bg-blue-500/30 px-4 py-1.5 rounded-full w-fit">
                Get Hands-on Experience
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-slate-100 font-extrabold tracking-tight leading-tight text-center lg:text-left">
                Cyber Security <br />
                <span className="bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Internships for Tech
                </span>{" "}
                <br />
                Enthusiasts
              </h1>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-3xl">
                Passionate about tech and security? Cyber Security Internships
                are your launchpad! Gain hands-on experience working with pros,
                develop in-demand skills like ethical hacking and network
                security, and build your industry network. Ideal for students
                with a technical background and a drive to learn. Explore our
                ethical hacking course and our exciting opportunities and take
                the first step towards an in-demand career – apply today!
              </p>
              <button className="w-fit text-slate-200 px-6 py-2.5 border border-blue-400 rounded-full cursor-pointer hover:bg-blue-500 hover:border-blue-500 transition-all duration-300 font-medium mt-2">
                Get Started
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

              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl cursor-pointer transition-all duration-300 shadow-lg shadow-blue-600/30 mt-2 active:scale-[0.98]"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <HandsOn />
      <CourseModules />
    </>
  );
};

export default Internship;