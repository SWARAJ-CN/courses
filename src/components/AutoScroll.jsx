import React from 'react'
import { Hero } from '../assets/assets'

const AutoScroll = () => {
  return (
    <div className='flex flex-col bg-linear-to-r from-blue-900 via-slate-950 to-blue-900 pb-10'>

      <p className='text-center pt-6 pb-4 text-xs font-bold tracking-widest text-slate-300 uppercase'>
        Our Courses
      </p>

      <div className='w-full overflow-x-auto flex items-center justify-between gap-8 px-8 [&::-webkit-scrollbar]:hidden'>
        {Object.values(Hero).map((imageSrc, index) => (
          <img 
            key={index} 
            className='h-12 w-auto object-contain shrink-0 opacity-90 hover:opacity-100 transition-opacity' 
            src={imageSrc} 
            alt={`Course logo ${index + 1}`} 
          />
        ))}
      </div>
    </div>
  )
}

export default AutoScroll