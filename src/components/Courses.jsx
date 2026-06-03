import React from "react";
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import { courses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Courses = () => {

  const navigate = useNavigate();

  const handleDownload = () => {
    const downloadPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = true;
        if (isSuccess) {
          resolve("Downloaded");
        } else {
          reject(new Error("Network failed"));
        }
      }, 2000);
    });

    toast.promise(downloadPromise, {
      loading: "Downloading file...",
      success: <b>Download complete!</b>,
      error: <b>Could not download.</b>,
    });
  };

  return (
    <div className="w-full min-h-screen bg-[#0f1115] text-white py-16 px-6 md:px-16 lg:px-24 font-sans">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <span className="text-blue-500 font-semibold text-sm tracking-wider uppercase block mb-2">
            Explore our Best Cyber Security Courses
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white max-w-2xl leading-tight">
            Launch Your Future with <br className="hidden sm:inline" />{" "}
            Cybersecurity Courses
          </h2>
        </div>
          
        <button
          onClick={() => {
            navigate("/courses");
            scrollTo(0, 0);
          }}
          className="cursor-pointer w-fit border border-slate-700 hover:border-blue-500 text-sm font-semibold text-slate-200 hover:text-white px-6 py-2.5 rounded-lg bg-transparent hover:bg-blue-600/10 transition-all duration-200 shrink-0 flex items-center gap-1.5 group"
        >
          View All Courses
          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
        </button>
      </div>

     

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center sm:justify-items-start">
        {courses.slice(0, 8).map((course, index) => {
          return (
            <div
              key={index}
              className="w-full max-w-[320px] bg-[#161920] border border-slate-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_10px_30px_rgba(37,99,235,0.1)] flex flex-col group"
            >
              <div className="relative w-full aspect-4/3 overflow-hidden bg-slate-900">
                <img
                  src={course.image}
                  alt="Course Cover"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#161920] via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-5 flex flex-col grow justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-wide line-clamp-2 leading-snug min-h-12.5 group-hover:text-blue-400 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 mt-2 tracking-wide">
                    {course.duration}
                  </p>
                </div>
                <div className="flex flex-col gap-3 pt-2">
                  <button
                    onClick={handleDownload}
                    className="cursor-pointer flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors w-fit group/btn"
                  >
                    <div className="p-1.5 bg-blue-500/10 rounded-md group-hover/btn:bg-blue-500/20 transition-colors">
                      <ArrowDownToLine className="w-4 h-4 text-blue-500" />
                    </div>
                    Download Syllabus
                  </button>

                  <button className="cursor-pointer w-full text-center py-2.5 mt-1 border border-slate-700 hover:border-blue-500 text-sm font-semibold text-slate-200 hover:text-white rounded-lg bg-transparent hover:bg-blue-600/10 transition-all duration-200 flex items-center justify-center gap-1.5">
                    Explore more
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full max-w-6xl mt-14  mx-auto bg-linear-to-r from-blue-700/50 to-blue-600/20 rounded-2xl p-8 md:p-12 flex flex-row sm:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-950/20">
        <div className="text-center sm:text-left">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Book Your Free Demo
          </h2>
          <p className="text-sm md:text-base text-blue-100 mt-2 font-medium opacity-90">
            Book a free demo for our Cybersecurity Course training.
          </p>
        </div>

        <button className="whitespace-nowrap px-8 py-3.5 border border-white/40 hover:border-white text-sm font-semibold text-white bg-white/5 hover:bg-white/15 rounded-xl transition-all duration-200 shadow-sm active:scale-[0.98] cursor-pointer">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Courses;
