import React from 'react'




const Intro = () => {
  return (
    <div className='container mx-auto flex justify-between pt-20 mt-36
     mb-44 max-sm:-mt-24 max-sm:w-80 max-sm:mx-14' id='intro'>
   <div className="container xl:px-10 pt-2 md:px-20  ">
        <h3 className='text-cyan-300  text-lg py-10 ml-60 mt-20 
                 md:px-20 font-mono h-10 max-sm:-ml-1' >Hi, My name is</h3>
        <h1 className='text-3xl md:text-6xl lg:text-7xl 
        font-bold md:px-20 ml-44
         text-slate-300 max-sm:-ml-1'>Brittany Chiang.</h1>
        <h1 className='text-3xl md:text-6xl lg:text-7xl 
        font-bold md:px-20 ml-44
         text-slate-300 max-sm:-ml-1 '>I build thigs for the web.</h1>
        <p className='text-gray-400 py-8 md:px-20 text-xl
                      max-lg:text-xl max-md:text-dm ml-44
                      max-md:w-auto max-w-3xl 
                      mb-10 max-sm:-ml-5'>
          I’m a software engineer specializing in building (and occasionally designing)
          exceptional digital experiences. Currently,
          I’m focused on building accessible, human-centered products at <span className='text-green-300 '>Upstatement.</span></p>
        <a href='btn' className='border-2  border-green-300 px-7 py-3 
                    text-green-300 rounded-md ml-80 
                    font-mono max-sm:text-sm
                     max-sm:px-1 max-sm:mx-auto'>Check out my cource!</a>
      </div>
     
  
     

       
    </div>
  )
}

export default Intro
