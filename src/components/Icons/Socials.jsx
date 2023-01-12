import React from 'react';
import { FiLinkedin } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import { TbWorldLongitude } from 'react-icons/tb';

const socials = () => {
    return (
        <div className='fixed w-full -ml-44 max-sm:hidden'>
                <div className='container flex mx-auto '>
                    <div className='social'>
                 <div className=' hover:text-emerald-400 hover:-translate-y-2'><FiLinkedin /></div>
                <div className=' hover:text-emerald-400 hover:-translate-y-2'><BsInstagram /></div>
                <div className=' hover:text-emerald-400 hover:-translate-y-2'><FiTwitter /></div>
                <div className=' hover:text-emerald-400 hover:-translate-y-2'><AiFillGithub /></div>
                <div className=' hover:text-emerald-400 hover:-translate-y-2'><TbWorldLongitude /></div>
                    </div>
                    <div className='lg:mx-96 md:-44'></div>
                    <div className='lg:mx-44 md:-20'></div>
                <div className='flex-grow text-gray-400 rotate-90 items-center md:mt-0 lg:-mt-32 md:-ml-44 lg:-ml-80 md: -mr-44 lg:-mr-96 hover:text-emerald-400 hover:-translate-y-2' > 
                <a href='link'className='lg:ml-96 font-mono'>muhetodarius.gov.rw</a>
                </div>
                
                </div>
               
 
        </div>
    )
}

export default socials