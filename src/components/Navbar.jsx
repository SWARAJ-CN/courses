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
    `relative py-1 text-sm font-semibold transition-colors duration-200 cursor-pointer hover:text-blue-400 ${
      isActive 
        ? 'text-blue-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500' 
        : 'text-slate-300'
    }`

  return (

    <nav className='sticky top-0 z-50 bg-slate-950/80 border-b border-slate-900/80 backdrop-blur-md px-6 py-4 md:px-12 flex items-center justify-between shadow-lg shadow-black/20'>
      
      <div className='text-xl sm:text-2xl font-black tracking-tight text-white selection:bg-blue-500/20'>
        <span className='text-blue-500'>NULLBYTE</span> Hacker Academy
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
        className='md:hidden p-2 text-slate-300 hover:text-blue-400 transition-colors focus:outline-none'
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />

      <div 
        className={`fixed top-0 right-0 bottom-0 w-72 bg-slate-950 border-l border-slate-900 p-6 flex flex-col gap-6 shadow-2xl transition-transform duration-300 ease-in-out transform md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex items-center justify-between pb-4 border-b border-slate-900'>
          <span className='font-bold text-blue-400 text-xs tracking-wider uppercase'>Navigation</span>
          <button onClick={toggleMenu} className='p-1 text-slate-400 hover:text-white transition-colors'>
            <X size={20} />
          </button>
        </div>

        <div className='flex flex-col gap-3'>
          {navLinks.map((link) => (
            <NavLink 
              key={link.path} 
              to={link.path} 
              onClick={toggleMenu}
              className={({ isActive }) => 
                `block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-200 ${
                  isActive 
                    ? 'bg-blue-950/50 border border-blue-500/20 text-blue-400' 
                    : 'text-slate-300 hover:bg-slate-900/50 hover:text-white'
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