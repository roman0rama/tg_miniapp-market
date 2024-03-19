import React from 'react'
import { Link } from 'react-router-dom';

export const CategoryCard = ({ imagePath, name, id } : { imagePath?: string, name: string, id: number }) => {
  return(
    <Link to={`/categories/${id}`}>
      <div className='flex flex-col justify-center items-center mt-[20px] cursor-pointer'>
        <div className={`bg-[#F7F7F7] w-[100px] h-[100px] rounded-xl`}>

        </div>
        <p className='text-[12px] mt-[5px] text-center'>{name}</p>
      </div>
    </Link>
  )
}