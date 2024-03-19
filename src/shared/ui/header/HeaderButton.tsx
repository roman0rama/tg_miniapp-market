import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export const HeaderButton = ({ linkTo, title, setOpen }: { linkTo: string, title: string, setOpen: never }) => {
  const location = useLocation()

  return(
    <Link
      preventScrollReset={true}
      to={`${linkTo}`}
      onClick={() => {
        setOpen(false)
      }}
      className={`w-full cursor-pointer text-lg bg-transparent relative  px-[25px] border-none ${location.pathname == linkTo ? 'text-[#B49BD8]' : "text-[#1D1717]"} font-semibold leading-[50px]`}>
      {location.pathname == linkTo ? <div className='w-[5px] rounded-r-lg h-full bg-[#B49BD8] absolute -left-[10px]' /> : ''}
      {title}
    </Link>
  )
}