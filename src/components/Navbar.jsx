import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)


  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/courses', label: 'Courses' },
    { path: '/events', label: 'Events' },
    // { path: '/press', label: 'Press' },
    { path: '/internships', label: 'Internships' },
    { path: '/contact', label: 'Contact Us' },
  ]


  const linkStyles = ({ isActive }) =>
    `relative py-1 text-sm font-semibold transition-colors duration-200 cursor-pointer hover:text-blue-600 ${
      isActive ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600' : 'text-slate-600'
    }`

  return (
    <nav className=' sticky top-0 z-50 bg-white border-b border-slate-100 px-6 py-4 md:px-12 flex items-center justify-between  shadow-xs'>
      
      <div className='text-xl sm:text-2xl font-black tracking-tight text-slate-800 selection:bg-blue-500/20'>
        <span className='text-blue-600'>NULLBYTE</span> Hacker Academy
      </div>
      <div className='hidden md:flex items-center gap-8'>
        {navLinks.map((link) => (
          <NavLink key={link.path} to={link.path} className={linkStyles}>
            {link.label}
          </NavLink>
        ))}
      </div>
      <button 
        onClick={toggleMenu} 
        className='md:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors focus:outline-none'
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div 
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />
      <div 
        className={`fixed top-0 right-0 bottom-0 w-72 bg-white p-6 flex flex-col gap-6 shadow-2xl transition-transform duration-300 ease-in-out transform md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex items-center justify-between pb-4 border-b border-slate-100'>
          <span className='font-bold text-slate-400 text-sm tracking-wider uppercase'>Navigation</span>
          <button onClick={toggleMenu} className='p-1 text-slate-500 hover:text-slate-800 transition-colors'>
            <X size={20} />
          </button>
        </div>

        
        <div className='flex flex-col gap-4'>
          {navLinks.map((link) => (
            <NavLink 
              key={link.path} 
              to={link.path} 
              onClick={toggleMenu}
              className={({ isActive }) => 
                `block px-4 py-3 text-base font-semibold rounded-xl transition-all ${
                  isActive 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar