import { Rate } from 'antd';
import React from 'react'
import moment from 'moment'

export const UserBlock = ({ name, rate, publishedAt } : {name: string, rate: number, publishedAt: string}) => {
  return (
    <div className='flex gap-[10px]'>
      <div className='w-[50px] h-[50px] bg-gradient-to-t from-[#B49BD8] to-[#D9D1F0] flex items-center justify-center rounded-full'>
        <p className='text-[#fff]'>{name[0]}</p>
      </div>
      <div>
        <p>{ name }</p>
        <div className='flex gap-[10px]'>
          <Rate disabled value={rate} className='text-sm'></Rate>
          <p className='opacity-30 text-sm pl-[5px]'>{ moment(publishedAt).format('LL') }</p>
        </div>
      </div>
    </div>
  )
}