import React, { useState } from 'react';

const ContactUs = () => {
  return (

    <div className="bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 font-sans min-h-screen text-slate-100">
      

      <div className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-2">
            Get In Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Connect With Our Cyber Security Experts
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions about our internships, certifications, or custom team training? Drop us a line and our admissions team will reach out within 24 hours.
          </p>
        </div>
      </div>


      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 -mt-10">
        

        <div className="lg:col-span-5 space-y-6 lg:pt-10">

          <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800/80 shadow-2xl backdrop-blur-md flex gap-4 items-start">
            <div className="p-3 bg-blue-950/50 border border-blue-500/20 rounded-xl text-blue-400 shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg mb-1">Our Headquarters</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                NULLBYTE Hacker Academy Inc.<br />
                Tech District<br />
                Kochi, Kakkanad, Kerala, India
              </p>
            </div>
          </div>

          <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800/80 shadow-2xl backdrop-blur-md flex gap-4 items-start">
            <div className="p-3 bg-blue-950/50 border border-blue-500/20 rounded-xl text-blue-400 shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.72.73.73 0 00.58.45l3.77.75a1 1 0 01.7.73l.22.73a1 1 0 00.93.72h3.15a2 2 0 012 2v3.61a2 2 0 01-.4 1.2l-1.9 2.5a1 1 0 01-1.2.4L13 18.27a1 1 0 01-.7-.7l-.75-3.77a.73.73 0 00-.45-.58L10.42 12a1 1 0 01-.72-.94V5z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg mb-1">Call Us Directly</h3>
              <p className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors cursor-pointer">
                Admissions: +91 005 660 770
              </p>
              <p className="text-slate-500 text-xs mt-0.5">Mon - Sat, 9:00 AM to 6:00 PM IST</p>
            </div>
          </div>

   
          <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800/80 shadow-2xl backdrop-blur-md flex gap-4 items-start">
            <div className="p-3 bg-blue-950/50 border border-blue-500/20 rounded-xl text-blue-400 shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg mb-1">Email Correspondence</h3>
              <p className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors cursor-pointer">
                info@nullbyteacademy.com
              </p>
              <p className="text-slate-500 text-xs mt-0.5">General queries & corporate alignments.</p>
            </div>
          </div>

        </div>

  
        <div className="lg:col-span-7 bg-slate-900/40 p-8 md:p-10 rounded-2xl border border-slate-800/80 shadow-2xl backdrop-blur-md relative">
          
          <h2 className="text-2xl font-bold text-white mb-2">Send a Message</h2>
          <p className="text-slate-400 text-sm mb-6">Fill out the form configurations to open an inquiry pipeline.</p>

          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="Your name" 
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:bg-slate-950 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="your@gmail.com" 
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:bg-slate-950 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Subject / Field of Interest</label>
              <input 
                type="text" 
                name="subject"
                required
                placeholder="Inquiry regarding Cyber Security Internship" 
                className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:bg-slate-950 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Your Transmission (Message)</label>
              <textarea 
                rows="5"
                name="message"
                required
                placeholder="Type your detailed message here..." 
                className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:bg-slate-950 transition-colors resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-4 rounded-xl shadow-lg shadow-blue-900/40 transition-all duration-200 active:scale-[0.99] focus:outline-none"
            >
              Send Message
            </button>
          </div>

        </div>

      </section>
    </div>
  );
};

export default ContactUs;