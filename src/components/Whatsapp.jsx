import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
const Whatsapp = () => {

    const goWhatsapp = () => {
        window.location.href="https://wa.me/919999999999?text=Hello%20I%20need%20help"
    }

  return (
    <div 
    onClick={goWhatsapp}
    className='
    absolute bottom-5 z-50 bg-green-500/20
    ml-5 px-5 py-1 text-center text-white
    font-bold rounded-full flex items-center
    gap-2 cursor-pointer fixed border-2 border-green-600
    '>
        <FaWhatsapp size={20}/>
       <p className='hidden md:flex '> How can i help you</p>
    </div>
  )
}

export default Whatsapp