import React from 'react'
export const Banner = ({category} : never) => {
  return(
    <div className='px-[10px]'>
      <div className='w-full h-[250px] bg-[#F7F7F7] rounded-xl relative'>
        <p className='absolute pt-[5x] px-[10px] bg-[#B49BD8] text-[#fff] rounded-bl-lg rounded-tr-lg text-sm left-[10px] -top-[5px] cursor-pointer'>{category}</p>
      </div>
    </div>
  )
}