import React from 'react';

export const Avatar = ({name, avatar}: {name: string, avatar: string}) => {
  return <div>
    {
      avatar? (
        <img className='w-[50px] h-[50px] rounded-full' src={avatar} alt='' />
      ) : (
        <div className='w-[50px] h-[50px] bg-gradient-to-t from-[#B49BD8] to-[#D9D1F0] flex items-center justify-center rounded-full'>
          <p className='text-[#fff]'>{name[0]}</p>
        </div>
      )
    }
  </div>
}