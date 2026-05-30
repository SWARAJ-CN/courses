import React from 'react'
import { assets, companyLogos } from '../assets/assets'

const TrustedBy = () => {
  

  return (
    <div className='w-full bg-[#0f1115] text-white py-16 px-6 md:px-16 lg:px-24 flex items-center justify-center font-sans'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-7xl w-full'>
      <div className='flex flex-col text-left items-start lg:col-span-5 max-w-xl'>
          <span className='text-blue-500 font-bold text-sm md:text-base tracking-wide mb-3'>
            NULLBYTE Trusted by the Best:
          </span>
          <h2 className='text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-6'>
            Our Students Represent Top Cybersecurity Companies
          </h2>
          <p className='text-slate-400 text-sm md:text-base leading-relaxed font-normal'>
            Our program boasts a distinguished student body, attracting individuals from the UAE's leading cybersecurity companies. From industry giants like Etisalat, Etihad, and Emirates to tech titans like Amazon and DP World, our graduates come equipped with real-world experience from some of the most respected organizations in the region.
          </p>
        </div>
        <div className='lg:col-span-7 w-full grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-12 items-center justify-items-center bg-white/5 border border-slate-800/40 rounded-2xl p-8 md:p-12 shadow-xl shadow-black/20 backdrop-blur-sm'>
          {companyLogos.map((logoSrc, index) => (
            <img 
              key={index}
              src={logoSrc} 
              alt={`Trusted company logo ${index + 1}`}
              className='h-10 md:h-12 w-auto object-contain shrink-0 filter brightness-0 invert opacity-70 hover:opacity-100 transition-all duration-300' 
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustedBy