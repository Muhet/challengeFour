import React from 'react'

export const Cards = ( {feature, title, description}) => {
  return (
    <div className='md:max-w-md  mx-auto flex-row p-6 bg-slate-800
    rounded-lg shadow-lg cursor-pointer -ml-0  max-sm:-ml-80 max-sm:max-w-72
     max-sm:mx-7 max-sm:justify-center'>
      <h3 className='font-mono text-emerald-300 -mt-96 pt-10 max-sm:-mt-32  max-sm:-ml-5'>{feature}</h3>
      <h1 className='text-gray-300 text-3xl font-bold mb-5 max-sm:-ml-5'>{title}</h1>
        <p className='text-gray-400 text-md text-right px-5 max-sm:mt-20 max-sm:mb-20'>{description}</p>
    </div>
  )
}

export default Cards
