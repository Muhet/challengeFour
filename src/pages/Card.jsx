import React from 'react'
import folder from './../assets/link.png';
import folder2 from './../assets/folder.png';

export const Card = ({ title, description, footer}) => {
  
    return (
        <div className='max-w-sm mx-auto flex-row p-6 bg-slate-800
         rounded-lg shadow-lg cursor-pointer
          max-sm:mx-7 max-sm:justify-center hover:translate-y-1 hover:shadow-neutral-600'>
            <div className="flex justify-between">
            <img src={folder2} alt='' className='h-12 '></img>
            <img src={folder} alt='' className='h-7' ></img>
            </div>
            
            <h1 className='text-white font-bold font-sans mt-5 hover:text-green-300 mb-3'>{title}</h1>
            <p className='text-gray-400 font-sans mb-5'>{description}</p>
            <div className='text-gray-400 flex font-mono '>
                {footer?.length > 0 ? footer.map((txt) => <a className='flex justify-between text-center pr-3'>{txt}</a>) : null}
            </div>
        </div>
    )
}

