import { Link } from 'react-router-dom';
import React from 'react'
import back from '../../../assets/icons/back.png'

export const PersonalMenuItem = ({ title, link }: {title: string, link: string}) => {
  return <Link className='flex w-[90%] mx-[auto] border-b justify-between p-[10px] items-center first:pt-[15px] last:pb-[15px] last:border-0' to={link}>
    <p>{title}</p>
    <img src={back} alt='' className='w-[15px] h-[15px] rotate-180 opacity-40'/>
  </Link>
}
