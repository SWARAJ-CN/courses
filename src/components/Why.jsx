import React from 'react'
import { Award, BookOpen, Briefcase, Check, GraduationCap, Laptop, ShieldCheck, Users } from 'lucide-react'

const Why = () => {
  return (
    <div id='more' className='w-full min-h-screen bg-[#0f1115] text-white py-16 px-6 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center font-sans'>
        
        <div className='grid grid-cols-2 gap-4 md:gap-6 order-2 md:order-1'>
            {/* Card 1 */}
            <div className='bg-[#161920] border border-slate-800 rounded-xl p-6 flex flex-col items-center text-center justify-center min-h-45 transition-all hover:border-blue-500/50 group'>
                <GraduationCap className='w-10 h-10 text-blue-500 mb-4 transition-transform group-hover:scale-110 duration-300' />
                <p className='text-sm md:text-base font-semibold text-slate-200 leading-snug'>100% Placement & Internship Assistance.</p>
            </div>

           
             <div className='bg-[#161920] border border-slate-800 rounded-xl p-6 flex flex-col items-center text-center justify-center min-h-45  transition-all hover:border-blue-500/50 group'>
                <Laptop className='w-10 h-10 text-blue-500 mb-4 transition-transform group-hover:scale-110 duration-300' />
                <p className='text-sm md:text-base font-semibold text-white leading-snug'>Hands-on Training & Experience</p>
            </div>

            {/* Card 3 */}
            <div className='bg-[#161920] border border-slate-800 rounded-xl p-6 flex flex-col items-center text-center justify-center min-h-45  transition-all hover:border-blue-500/50 group'>
                <BookOpen className='w-10 h-10 text-blue-500 mb-4 transition-transform group-hover:scale-110 duration-300' />
                <p className='text-sm md:text-base font-semibold text-slate-200 leading-snug'>Flexible Study Options</p>
            </div>

            {/* Card 4 */}
            <div className='bg-[#161920] border border-slate-800 rounded-xl p-6 flex flex-col items-center text-center justify-center min-h-45  transition-all hover:border-blue-500/50 group'>
                <Users className='w-10 h-10 text-blue-500 mb-4 transition-transform group-hover:scale-110 duration-300' />
                <p className='text-sm md:text-base font-semibold text-slate-200 leading-snug'>Industry Experts & Certified Trainers</p>
            </div>

            {/* Card 5 */}
            <div className='bg-[#161920] border border-slate-800 rounded-xl p-6 flex flex-col items-center text-center justify-center min-h-45  transition-all hover:border-blue-500/50 group'>
                <Award className='w-10 h-10 text-blue-500 mb-4 transition-transform group-hover:scale-110 duration-300' />
                <p className='text-sm md:text-base font-semibold text-slate-200 leading-snug'>International Certifications</p>
            </div>

            {/* Card 6 */}
            <div className='bg-[#161920] border border-slate-800 rounded-xl p-6 flex flex-col items-center text-center justify-center min-h-45  transition-all hover:border-blue-500/50 group'>
                <ShieldCheck className='w-10 h-10 text-blue-500 mb-4 transition-transform group-hover:scale-110 duration-300' />
                <p className='text-sm md:text-base font-semibold text-slate-200 leading-snug'>World-Class Infrastructure</p>
            </div>
        </div>

    
        <div className='flex flex-col space-y-6 order-1 md:order-2'>
            <div>
                <span className='text-blue-500 font-semibold text-sm tracking-wider uppercase block mb-2'>
                    Why NULLBYTE Hacker Academy?
                </span>
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white'>
                    Proven Results and <br /> Industry-Ready Training.
                </h2>
                <p className='mt-4 text-sm md:text-base text-slate-400 leading-relaxed max-w-xl'>
                    NULLBYTE Hacker Academy creates a path for a success-assured career with the help of an implementation-based Ethical Hacking course and Top Cyber Security training in India & GCC. Through a wide range of hands-on training courses, resources, hacking and community events, internship assistance, and certification courses, NULLBYTE helps you to hack out your career.
                </p>
            </div>

           
            <div className='space-y-3 pt-4'>
                <div className='flex items-center gap-4 bg-[#0a0c0f] border border-slate-900 rounded-lg p-4 transition-all hover:bg-slate-950'>
                    <Check className='w-5 h-5 text-blue-500 shrink-0' />
                    <span className='text-sm md:text-base font-medium text-slate-200'>Hands-On Experience & Expert Guidance</span>
                </div>
                <div className='flex items-center gap-4 bg-[#0a0c0f] border border-slate-900 rounded-lg p-4 transition-all hover:bg-slate-950'>
                    <Check className='w-5 h-5 text-blue-500 shrink-0' />
                    <span className='text-sm md:text-base font-medium text-slate-200'>Career Mentorship & Flexibility</span>
                </div>
                <div className='flex items-center gap-4 bg-[#0a0c0f] border border-slate-900 rounded-lg p-4 transition-all hover:bg-slate-950'>
                    <Check className='w-5 h-5 text-blue-500 shrink-0' />
                    <span className='text-sm md:text-base font-medium text-slate-200'>Real-World Case Studies</span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Why