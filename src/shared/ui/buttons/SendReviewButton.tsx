import React from 'react';

export const SendReviewButton = ({ text , className}: { text: string, className?: never }) => {
  return (
    <div className={`px-[10px] pt-[20px] ${className}`}>
      <button className='w-full py-[10px] bg-[#B49BD8] text-[#fff] rounded-xl'>{ text }</button>
    </div>
  )
}