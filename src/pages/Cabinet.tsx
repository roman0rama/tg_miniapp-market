import React from 'react'
import { Avatar } from '../shared/ui/cabinet/Avatar';
import { InfoBlockComponent } from '../components/cabinet/InfoBlockComponent';
import { PersonalMenu } from '../components/cabinet/personalMenu';

export default function Cabinet({ name , avatar}: never) {
  return(
    <div className='px-[10px] py-[20px] flex flex-col gap-[20px]'>
      <div className='flex gap-[10px] items-center'>
        <Avatar name={name} avatar={avatar}></Avatar>
        <div>
          <p className='line-clamp-1 break-all text-lg'>{name}</p>
        </div>
      </div>
      <InfoBlockComponent></InfoBlockComponent>
      <PersonalMenu></PersonalMenu>
    </div>
  )
}