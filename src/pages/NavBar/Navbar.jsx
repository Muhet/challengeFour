import React from 'react';

import { Link } from 'react-scroll';
import logo from '../../assets/LogoB2.png';


const Navbar = () => {
return (
<div className="container mx-auto flex justify-between items-center text-gray-500 fixed h-20 -mt-8 nav shadow-lg">
      <img src={logo} alt="" className='mt-10 max-sm:mt-5 max-sm:w-8 max-sm:ml-5' />
      <ul className='hidden md:flex items-center mt-10 pr-10 text-base font-semibold cursor-pointer'>
        <Link to="intro" className='hover:text-emerald-400 py-4 px-6 transition-500 font-mono ' smooth={true} ><span className='text-emerald-500'>00.</span>Introduction</Link >
        <Link to="about" className='hover:text-emerald-400 py-4 px-6 transition-500 font-mono ' smooth={true} ><span className='text-emerald-500'>01.</span>About</Link >
        <Link to="experience" className='hover:text-emerald-400 py-4 px-6 transition-500 font-mono' smooth={true}  ><span className='text-emerald-500'>02.</span>Experience</Link >
        <Link to="work" className='hover:text-emerald-400 py-4 px-6 transition-500 font-mono' smooth={true}  ><span className='text-emerald-500'>03.</span>Work</Link >
        <Link to="contact" className='hover:text-emerald-400 py-4 px-6 transition-500 font-mono' smooth={true} ><span className='text-emerald-500'>04.</span>Contact</Link>
        <a href='btn' className='border-2  border-green-300 px-7 py-3 ml-7
          text-green-300 rounded-md font-mono'>Go App</a>
      </ul>

      <button className='block md:hidden py-3 px-4 mx-2 rounded fucus:outline-none hover:bg-emerald-500 group max-sm:mr-24'>
        <div className="w-5 h-1 bg-emerald-500 mb-1"></div>
        <div className="w-5 h-1 bg-emerald-500 mb-1"></div>
        <div className="w-5 h-1 bg-emerald-500"></div>
        <div className='absolute top-0 -right-full h-screen w-8/12 bg-slate-900 border border-slate-900 opacity-0
        group-focus:right-0 group-focus:opacity-100 transition-all duration-300'>
          <ul className='flex flex-col items-center w-full text-base cursor-pointer pt-10'>
            <Link to='intro' className='hover:bg-emerald-500 py-4 px-6 w-full transition-500' smooth={true} >Intro</Link>
            <Link to='about' className='hover:bg-emerald-500 py-4 px-6 w-full transition-500' smooth={true}>About</Link>
            <Link to='work' className='hover:bg-emerald-500 py-4 px-6 w-full transition-500' smooth={true}>Work</Link>
            <Link to='experience' className='hover:bg-emerald-500 py-4 px-6 w-full transition-500' smooth={true}>Experience</Link>
            <Link to='contact' className='hover:bg-emerald-500 py-4 px-6 w-full transition-500' smooth={true}>Contact</Link>

          </ul>

        </div>
      </button>
    </div>

  )
}



export { Navbar }
