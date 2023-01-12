import React from 'react'
import photo from '../assets/photoes.jpg';

const About = () => {

  return (
    <div className='container mx-auto mt-96 flex flex-row 
    justify-between max-sm:-ml-24' id="about">


      <div className="mx-52 max-sm:-mt-72 ">

        <h2 className='text-gray-400 text-3xl font-bold max-sm:-ml-24'>
          <span className='text-emerald-500 font-mono text-3xl'> 02.</span>
          About Me <hr className='md:w-44 ml-48 md:-mt-4 
                    max-sm:-mt-4 max-sm:w-24 max-sm:opacity-30 ' />

        </h2>
        <div className='flex flex-col max-sm:flex-col-reverse'>

          <p className='max-w-3xl text-gray-400 font-sans text-lg pt-9 pb-5 ml-20
       pr-14 max-sm:-ml-20 max-sm:max-w-sm max-sm:pr-10 items-center'>Hello! My name is Brittany and I enjoy creating things that live on the internet.
            My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together
            a custom reblog button taught me a lot about HTML & CSS!<br /><br />

            Fast-forward to today, and I’ve had the privilege of working at <span id='p1'>an advertising agency, a start-up, a huge corporation, and a student-led design studio</span>.
            My main focus these days is building accessible, inclusive products and digital experiences at <span id='upstatem'>Upstatement</span> for a variety of clients.<br /><br />

            I also recently <span id='p2'>launched a course </span> that covers everything you need to build a web app with the Spotify API using Node & React. <br /><br />

            Here are a few technologies I’ve been working with recently:</p>
        </div>


        <div className='flex md:mx-auto text-gray-400 font-mono justify-between w-80 max-sm:flex-row max-sm:-ml-20'>
          <h4>
            <span> JavaScript (ES6+)</span><br />
            <span> React</span><br />
            <span > Node.js</span>
          </h4>
          <h4>
            <span> TypeScript</span><br />
            <span> Eleventy</span><br />
            <span> WordPress</span>
          </h4>
        </div>
      </div>

      <div className='h-0 cursor-pointer mt-24'>
        <img src={photo} alt="phot" className="h-80 w-64 rounded-md pt-0 border-2 mr-60" />

      </div>
    </div>
  )

}

export default About
