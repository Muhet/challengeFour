import React from 'react';
import { BsListStars } from 'react-icons/bs';
import { Link } from 'react-scroll';
import logo from '../../assets/LogoB2.png';




const Navbar = () => {
  

  return (
  <nav className='nav '>
    <div className="container m-auto flex justify-between items-center text-gray-500">
      <img src={logo} alt="" className='py-5 max-sm:w-4'/>
      <ul className='hidden md:flex items-center pr-10 text-base font-semibold cursor-pointer'>
        <Link to="about" className='hover:text-emerald-400 py-4 px-6 transition-500 font-mono ' smooth={true} ><span className='text-emerald-500'>1.</span>About</Link >
        <Link to="work" className='hover:text-emerald-400 py-4 px-6 transition-500 font-mono' smooth={true}  ><span className='text-emerald-500'>2.</span>Work</Link >
        <Link to="experience" className='hover:text-emerald-400 py-4 px-6 transition-500 font-mono' smooth={true}  ><span className='text-emerald-500'>3.</span>Experience</Link >
        <Link to="contact" className='hover:text-emerald-400 py-4 px-6 transition-500 font-mono' smooth={true} ><span className='text-emerald-500'>4.</span>Contact</Link>
         <a href='btn' className='border-2  border-green-300 px-7 py-3 ml-7
          text-green-300 rounded-md font-mono'>Go App</a>
           
      </ul>
     
      <button className='block md:hidden py-3 px-4 mx-2 rounded fucus:outline-none hover:bg-emerald-500 group'>
        <div className="w-5 h-1 bg-emerald-500 mb-1"></div>
        <div className="w-5 h-1 bg-emerald-500 mb-1"></div>
        <div className="w-5 h-1 bg-emerald-500"></div>
        <div className='absolute top-0 -right-full h-screen w-8/12 bg-slate-900 border border-slate-900 opacity-0
        group-focus:right-0 group-focus:opacity-100 transition-all duration-300'>
          <ul className='flex flex-col items-center w-full text-base cursor-pointer pt-10'>
            <Link to='about' className='hover:bg-emerald-500 py-4 px-6 w-full'>About</Link>
            <Link to='work' className='hover:bg-emerald-500 py-4 px-6 w-full'>Work</Link>
            <Link to='experience' className='hover:bg-emerald-500 py-4 px-6 w-full'>Experience</Link>
            <Link to='contact' className='hover:bg-emerald-500 py-4 px-6 w-full'>Contact</Link>

          </ul>
        
        </div>
      </button>
    </div>
  </nav>
  )
}



export {Navbar}
