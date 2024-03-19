import React from 'react'
import { Link } from 'react-router-dom';

export const ProfileInfoBlock = ({title, subtitle, children, link} : { title: string, subtitle: string, children?: never, link: string}) => {
  return <Link to={link}>
    <div className='w-full p-[20px] bg-[#F7F7F7] rounded-xl'>
      <p className='font-semibold flex items-center gap-[5px]'> <span>{ children }</span> { title } </p>
      <p className='opacity-30 text-sm'> { subtitle } </p>
    </div>
  </Link>
}