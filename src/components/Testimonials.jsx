import React from 'react'
import { Star, Quote, Play, Volume2, Maximize2 } from 'lucide-react'
import { assets } from '../assets/assets'

const Testimonials = () => {
  
  return (
    <div className='w-full min-h-screen bg-[#0f1115] text-white py-16 px-6 md:px-16 lg:px-24 font-sans flex flex-col items-center'>
      
     
      <div className='text-center mb-12'>
        <span className='text-blue-500 font-semibold text-sm tracking-wider uppercase block mb-2'>
          The Proof is in the Results:
        </span>
        <h2 className='text-3xl md:text-4xl font-bold tracking-tight text-white'>
          Student Testimonials
        </h2>
      </div>

     
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full'>
        
        
        <div className='relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl group'>
          {/* heheheh dummy videooooooooooooooooooo bllalalall */}
          <img 
            src="https://images.unsplash.com/photo-1573164713712-03790a178651?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Student Video Testimonial" 
            className='w-full h-full object-cover grayscale-20 brightness-90 group-hover:scale-[1.02] transition-transform duration-500'
          />
          
         
          <div className='absolute bottom-0 inset-x-0 bg-linear-to-t from-black/90 via-black/40 to-transparent p-4 flex flex-col gap-2'>
            
            <div className='w-full h-1 bg-white/30 rounded-full overflow-hidden relative'>
              <div className='absolute left-0 top-0 h-full w-[15%] bg-blue-500 rounded-full' />
            </div>
            
            
            <div className='flex items-center justify-between text-xs text-slate-200 mt-1'>
              <div className='flex items-center gap-3'>
                <Play className='w-4 h-4 fill-white text-white cursor-pointer hover:text-blue-400 transition-colors' />
                <span>0:05 / 1:20</span>
              </div>
              <div className='flex items-center gap-3 opacity-80'>
                <Volume2 className='w-4 h-4 cursor-pointer hover:text-blue-400' />
                <Maximize2 className='w-3.5 h-3.5 cursor-pointer hover:text-blue-400' />
              </div>
            </div>
          </div>
        </div>

        
        <div className='bg-[#161920] border border-slate-800/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden shadow-lg group hover:border-blue-500/30 transition-colors duration-300'>
          
          <Quote className='absolute top-6 right-6 w-12 h-12 text-blue-500/10 rotate-180 transform pointer-events-none' />

          <div>
           
            <div className='flex items-center gap-1 mb-5'>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className='w-4 h-4 fill-amber-500 text-amber-500' />
              ))}
            </div>

            
            <p className='text-sm md:text-base text-slate-300 leading-relaxed font-normal mb-6 pr-6'>
              Joining this academy was the best decision I’ve made for my career. My teacher has been extremely patient enough to teach me all the basics of cybersecurity as I am someone who is very new to the subject. Mr. Akhil has not only taught me the basic ABC’s of cybersecurity but has also helped me gain an immense interest in the subjects CPT and CEH. Everyone at the training center is extremely helpful with all aspects. I recommend for anyone who wants to have a change in their career path to cybersecurity to join the NULLBYTE Hacker Academy.
            </p>
          </div>

          
          <div className='flex items-center gap-4 border-t border-slate-800/60 pt-4 mt-auto'>
            <div className='w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold border border-blue-500/30 shrink-0 overflow-hidden'>
              <img src={assets.avatarOne} alt="" />
            </div>
            <div>
              <h4 className='text-sm font-bold text-white tracking-wide'>Taniya Dastakeer</h4>
              <p className='text-xs text-slate-400 font-medium mt-0.5'>Certified Ethical Hacker</p>
            </div>
          </div>
        </div>

        
        <div className='bg-[#161920] border border-slate-800/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden shadow-lg group hover:border-blue-500/30 transition-colors duration-300'>
          <Quote className='absolute top-6 right-6 w-12 h-12 text-blue-500/10 rotate-180 transform pointer-events-none' />
          <div>
            <div className='flex items-center gap-1 mb-5'>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className='w-4 h-4 fill-amber-500 text-amber-500' />
              ))}
            </div>
            <p className='text-sm md:text-base text-slate-300 leading-relaxed font-normal mb-6 pr-6'>
              I particularly enjoyed my time at the NULLBYTE Hacker Academy because the CEO, Mr. Jaizal Ali. While learning how to be an ethical hacker, participants in the workshop on “Ethical Hacking” were given an engaging and educational experience. The training was a huge success overall and helped participants understand cybersecurity better.
            </p>
          </div>
          <div className='flex items-center gap-4 border-t border-slate-800/60 pt-4 mt-auto'>
            <div className=' overflow-hidden w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold border border-blue-500/30 shrink-0'>
              <img src={assets.avatarTwo} alt="" />
            </div>
            <div>
              <h4 className='text-sm font-bold text-white tracking-wide'>Ahanzaib Afzaal</h4>
              <p className='text-xs text-slate-400 font-medium mt-0.5'>Cyber Security Analyst</p>
            </div>
          </div>
        </div>

       
        <div className='bg-[#161920] border border-slate-800/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden shadow-lg group hover:border-blue-500/30 transition-colors duration-300'>
          <Quote className='absolute top-6 right-6 w-12 h-12 text-blue-500/10 rotate-180 transform pointer-events-none' />
          <div>
            <div className='flex items-center gap-1 mb-5'>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className='w-4 h-4 fill-amber-500 text-amber-500' />
              ))}
            </div>
            <p className='text-sm md:text-base text-slate-300 leading-relaxed font-normal mb-6 pr-6'>
              Finished learning Penetration Testing and Ethical Hacking course. Thanks to Mr. Akhil and the admin for helping me and training me in attaining the certificate without hassle. The trainers here really make the courses interesting for you. Truly an amazing experience studying here. I’d really recommend this institute to people who are planning to venture into cybersecurity.
            </p>
          </div>
          <div className='flex items-center gap-4 border-t border-slate-800/60 pt-4 mt-auto'>
            <div className='overflow-hidden w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold border border-blue-500/30 shrink-0'>
              <img src={assets.avatarThree} alt="" />
            </div>
            <div>
              <h4 className='text-sm font-bold text-white tracking-wide'>Ashwath Pillay</h4>
              <p className='text-xs text-slate-400 font-medium mt-0.5'>Penetration Tester</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Testimonials