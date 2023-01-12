import React from 'react'

export const Cards = ({ feature, title, description }) => {
  return (
    <div className='wwww'>
      <h1 className='text-white font-bold font-sans mt-5 hover:text-green-300'>{title}</h1>
      <h1 className='text-white font-bold font-sans mt-5 hover:text-green-300 mb-3'>{feature}</h1>
      <div className='max-w-sm mx-auto flex-row p-6 bg-slate-800
    rounded-lg shadow-lg cursor-pointer
     max-sm:mx-7 max-sm:justify-center'>

        <p className='text-gray-400 font-sans mb-5'>{description}</p>

      </div>
    </div>
  )
}

export default Cards
