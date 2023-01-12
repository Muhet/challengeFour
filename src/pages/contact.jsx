import React from 'react'
import Footer from './Footer'

const contact = () => {
  return (
    <div className='' id='contact'>
    <div className='md:hidden'>
    <h6 className='text-center text-emerald-400 font-mono pt-10 max-sm:text-sm '>04. What’s Next?</h6>
      <h1 className='text-center text-gray-300 text-5xl font-bold pt-6 max-sm:text-2xl'>Get In Touch</h1>
      <p className='text-gray-400 text-center md:px-96 py-10 max-sm:text-center max-sm:px-10'>Although I’m not currently looking for any new opportunities, my inbox is always open.
         Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
         <div className="text-center mt-10 -ml-32 ">
         <a href='btn' className='border-2  border-green-300 px-7 py-3 
          text-green-300 rounded-md ml-36 font-mono text-center'>Say Hello!</a>
            </div>
            <div className="text-center pt-64 font-mono ">
            <div className="max-sm:hidden">
            <Footer/>

            </div>
            </div>
    </div>
      
            
                    </div>
   
  )
}

export default contact