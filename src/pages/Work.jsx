import React from 'react'
import webImage from '../assets/codeImage.JPG';
import webImage2 from '../assets/codeImage1.JPG';
import webImage3 from '../assets/codeImage1.JPG';
import git from '../assets/git.png';
import folder from '../assets/link.png';

import { Card } from '.';
import Cards from '../components/Cards'


const Work = () => {
    return (
        <div className=' mt-28 ml-32 max-sm:ml-24 ' id='work'>
            <div className=' '>
                <h2 className='text-gray-300
                                text-3xl
                                font-bold 
                                md:ml-20
                               max-sm:-ml-20
                                max-sm:text-xl '>
                    <span className='text-green-300 text-3xl font-mono max-sm:text-xl '> 03.</span>
                    Some Things I’ve Built
                    <hr className=' ml-96 w-56 -mt-4 opacity-30  max-sm:ml-64 max-sm:w-16' />
                </h2>
                
                <div className='ml-20 max-w-2xl mt-10 max-sm:-ml-20 max-sm:opacity-40 max-sm:w-72 max-sm:px-5'>
                    <img src={webImage} alt='' className='md:h-96   max-sm:h-72'></img>
                </div>
                
                <div className='sticky ml-96 max-sm:ml-80'>
                    <h5 className='-mt-80 font-mono mr-40 text-emerald-300  ml-96 pl-20 max-sm:sticky max-sm:hidden'>Featured Project</h5>
                    <h3 className='text-gray-300 ml-96 pl-20 mr-40 mb-4 text-2xl font-bold max-sm:hidden'>Halcyon Theme</h3>
                    <p className=' bg-white bg-opacity-10 max-w-md 
                                    py-8 px-5 rounded-md 
                                    shadow-md ml-60 text-right text-gray-400
                                    text-md max-sm:w-80  max-sm:-ml-96 max-sm:px-7
                                    max-sm:-mt-72 max-sm:mb-32 max-sm:bg-opacity-30 max-sm:pt-20 max-sm:pb-14' >
                       A minimal, dark blue theme for VS Code,
                        Sublime Text, Atom, iTerm, and more. Available on <span className='text-emerald-300'>Visual Studio Marketplace,
                            Package Control, Atom Package Manager</span>, and <span className='text-emerald-300 '>npm</span>.</p>
                </div>

                <div className=' flex text-gray-400 
                font-mono ml-72 text-sm pl-96 space-x-4 pt-3 max-sm:-ml-96 max-sm:-mt-40 maxa-sm:text-md max-sm:sticky'>
                    <a href="web" className='ml-20 max-sm:-ml-5 max-sm:gap-x-0'>VS Code</a>
                    <a href="web">Sublime Text</a>
                    <a href="web">Atom</a>
                    <a href="web">iTerm2</a>
                    <a href="web" className='max-sm:hidden'>Hyper</a>
                </div>
                <div className=' mb-20 flex space-x-2 md:ml-64 pl-96 space-y-3'>
                    <img src={git} alt='' className='h-6 mt-auto ml-96 cursor-pointer' id='git'></img>
                    <img src={folder} alt='' className='h-6 cursor-pointer' id='folder'></img>
                </div>
                <div className='spotify'></div>
                <div className='opswork2'></div>
                <div className='max-w-2xl ml-96 '>
                    <img src={webImage2} className="md:ml-5  " alt='' id='code_img2'></img>
                </div>
                <div className='md:ml-20'>
                    <h5 className='font-mono text-emerald-300 -mt-96 pt-10 max-sm:-mt-32  max-sm:-ml-5'>Featured Project</h5>
                    <h3 className='text-gray-300 text-3xl font-bold mb-5 max-sm:-ml-5 '>Spotify Profile</h3>
                    <div className='bg-white bg-opacity-10 py-5 max-w-lg  sticky rounded-md shadow-md max-sm:-ml-16  
                     max-sm:mr-10 max-sm:mb-20  max-sm:w-80 max-sm:-mt-20 max-sm:bg-opacity-30'>
                        <p className='text-gray-400 text-md text-right px-5 max-sm:mt-20 max-sm:mb-20'  >
                            A web app for visualizing personalized Spotify data.
                            View your top artists, top tracks, recently played tracks, and detailed audio information about each track.
                            Create and save new playlists of recommended tracks based on your existing playlists and more.</p>
                    </div>
                    <div className='flex gap-x-4 text-gray-400 font-mono py-4 max-sm:-ml-32 max-sm:-mt-48 md:text-sm'>
                        <a href="web" className='max-sm:text-sm max-sm:-ml-6'>React</a>
                        
                        <a href="web" className='max-sm:text-sm'>Express</a>
                        <a href="web" className='max-sm:text-sm'>Spotify API</a>
                        <a href="web" className='max-sm:text-sm'>Heroku</a>

                    </div>
                    <div className='flex pb-10 gap-x-4'>
                        <img src={git} alt='' className='h-7' id='git2'></img>
                        <img src={folder} alt='' className='smedia2' id='folder2'></img>

                    </div>

                </div>
            </div>
           
                    <div className='md:ml-32 max-w-2xl mt-20 max-sm:-ml-27 max-sm:w-80'>
                    <img src={webImage3} alt='' className='max-sm:hidden  '></img>
                </div>
                <div className='ml-64 -mt-96 pl-96 max-sm:-ml-96 max-sm:w-md max-sm:-mt-12'>
                    <h5 className='text-emerald-300 font-mono ml-10 pl-60 mt-10 max-sm:hidden '>Featured Project</h5>
                    <h3 className='text-gray-400 text-xl font-bold  ml-36 pb-5 max-sm:-ml-48
                     max-sm:text-white
                     max-sm:text-dm max-sm:mt-32 max-sm:-mb-20 max-sm:hidden'>Build a Spotify Connected App</h3>
                    
                    <div className='max-sm:-ml-24'>
                    <Cards 
                         description="A web app for visualizing personalized Spotify data.
                            View your top artists, top tracks, recently played tracks, and detailed audio information about each track.
                            Create and save new playlists of recommended tracks based on your existing playlists and more." 
                      />
                        </div>

                    <div className='flex font-mono space-x-5 md:text-sm max-sm:py-5
                     text-gray-400 ml-28 mt-4 max-sm:-ml-5 max-sm:-mt-10 max-sm:sticky '>
                        <a href="web" className='max-sm:-ml-3 md:hidden '>React</a>
                        <a href="web"> Express</a>
                        <a href="web" >Spotify API</a>
                        <a href="web" className='max-sm:hidden'>Styled Components</a>


                    </div>
                   
                    <div className='mt-10 ml-32 max-sm:-ml-24  '>
                        <a href='btn' className='border-2  border-green-300 px-5 py-3
                            text-green-300 rounded-md ml-36 font-mono max-sm:text-sm max-sm:py-1 max-sm:px-2 ' >Learn More</a>
                    </div>
                </div>


            

            <div className='pt-32'>
                <h1 className='text-center text-gray-300 text-3xl font-bold max-sm:-ml-20'>Other Noteworthy Projects</h1>
                <h5 className='text-center font-mono text-emerald-400 py-6 max-sm:-ml-20'>view the archieve</h5>
                <div className="flex-col lg:mx-40 ">
                    <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 -ml-20'>

                        <Card
                            title="Time to Have Move Fun"
                            description="A single page web app for helping me choose where to travel, built with Next.js, Firebase and Tailwind CSS"
                            footer={["Next.js", "Tailwind CSS", 'Firebase']}
                        />
                        <Card
                            title="Time to Have Move Fun"
                            description="A single page web app for helping me choose where to travel, built with Next.js, Firebase and Tailwind CSS"
                            footer={["Next.js", "Tailwind CSS", 'Firebase']}
                        />
                        <Card
                            title="Time to Have Move Fun"
                            description="A single page web app for helping me choose where to travel, built with Next.js, Firebase and Tailwind CSS"
                            footer={["Next.js", "Tailwind CSS", 'Firebase']}
                        />




                        <Card
                            title="Time to Have Move Fun"
                            description="A single page web app for helping me choose where to travel, built with Next.js, Firebase and Tailwind CSS"
                            footer={["Next.js", "Tailwind CSS", 'Firebase']}
                        />
                        <Card
                            title="Time to Have Move Fun"
                            description="A single page web app for helping me choose where to travel, built with Next.js, Firebase and Tailwind CSS"
                            footer={["Next.js", "Tailwind CSS", 'Firebase']}
                        />
                        <Card
                            title="Time to Have Move Fun"
                            description="A single page web app for helping me 
                            choose where to travel, built with Next.js, Firebase and Tailwind CSS"
                            footer={["Next.js", "Tailwind CSS", 'Firebase']}
                        />


                    </div>
                </div>


            </div>
            <div className="text-center py-20 -ml-72 mb-96">
                <a href='btn' className='border-2  border-green-300 px-7 py-3
          text-green-300 rounded-md ml-36 font-mono'>Show More</a>
            </div>
        </div>
    )
}

export default Work