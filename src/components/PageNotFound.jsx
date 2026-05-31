import React from 'react'
import { assets } from '../assets/assets'

const PageNotFound = () => {
  return (
    <>
    <div className='h-full w-full p-10 flex flex-col items-center justify-center gap-5'>
        <img src={assets.opps} alt='..' className='max-w-xl'/>
        <p className='text-7xl font-extrabold md:text-9xl'>404</p>
        <p className='text-center font-base '>We can't seem to find the page you are looking for. It might have been removed, had its name changed, or is temporarily unavailable.</p>
    </div>
    </>
  )
}

export default PageNotFound