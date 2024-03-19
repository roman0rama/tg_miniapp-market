import React from 'react'
import { HorizontalScroll } from '../../shared/ui/HorizontalScroll';

export const CategoryProductsList = ({title, children} : never) => {
  return <div className='px-[10px]'>
    <div
      style={{
        boxShadow: "2px 2px 8.9px 0px rgba(0, 0, 0, 0.08)"
      }}
      className='bg-[#fff] p-[15px] w-full mt-[20px] rounded-xl'>
      <p className='font-semibold text-xl mb-[10px]'>{title}</p>
      <HorizontalScroll>
        {children}
      </HorizontalScroll>
    </div>
  </div>
}