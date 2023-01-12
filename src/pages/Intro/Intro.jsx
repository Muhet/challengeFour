import React from 'react'

import { FiLinkedin} from 'react-icons/fi';
import { BsInstagram} from 'react-icons/bs';
import {FiTwitter} from 'react-icons/fi';
import { AiFillGithub} from 'react-icons/ai';
import { TbWorldLongitude} from 'react-icons/tb';

const Intro = () => {
  return (
    <div className='flex justify-between pt-20 max-sm:hidden' id='intro'>
      <div className="social ">
       <a ><FiLinkedin /></a>
       <a ><BsInstagram/></a>
       <a ><FiTwitter /></a>
       <a ><AiFillGithub /></a>
       <a ><TbWorldLongitude /></a>
        
      </div>
    
      <div className="container xl:px-10 pt-2 px-20 ">
        <h3 className='text-cyan-300  text-lg py-10 ml-60 mt-20 
                 px-20 font-mono h-10 max-sm:-ml-32' >Hi, My name is</h3>
        <h1 className='text-3xl md:text-6xl lg:text-7xl 
        font-bold px-20 ml-44
         text-slate-300 max-sm:-ml-10 '>Brittany Chiang.</h1>
        <h1 className='text-md md:text-2xl lg:text-7xl font-bold ml-44
         text-slate-400 px-20 max-sm:-ml-10 '>I build thigs for the web.</h1>
        <p className='text-gray-400 py-8 px-20 text-xl
                      max-lg:text-xl max-md:text-dm ml-44
                      max-md:w-auto max-w-3xl 
                      mb-10 max-sm:-ml-10'>
          I’m a software engineer specializing in building (and occasionally designing)
          exceptional digital experiences. Currently,
          I’m focused on building accessible, human-centered products at <span className='text-green-300 '>Upstatement.</span></p>
            <a href='btn' className='border-2  border-green-300 px-7 py-3 
                    text-green-300 rounded-md ml-80 font-mono max-sm:text-sm max-sm:px-1 '>Check out my cource!</a>
                 </div>
                <div className='mt-80 pt-20 text-slate-400 font-mono font-thin'>

        <ul className='rotate-90 max-sm:hidden '>
          <li><a className='' href='email'>brittany.chiang@gmail.com</a></li>
        </ul>
      </div>
     
    </div>
  )
}

export default Intro
