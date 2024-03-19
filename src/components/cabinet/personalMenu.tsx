import React from 'react';
import { PersonalMenuItem } from '../../shared/ui/cabinet/personalMenuItem';

export const PersonalMenu = () => {
  return(
    <div className='flex flex-col gap-[20px]'>
      <div className='flex flex-col w-full rounded-xl border'>
        <PersonalMenuItem title='Купленные товары' link='/'></PersonalMenuItem>
        <PersonalMenuItem title='Возвраты' link='/'></PersonalMenuItem>
        <PersonalMenuItem title='Отзывы' link='/'></PersonalMenuItem>
        <PersonalMenuItem title='Сотрудничество' link='/'></PersonalMenuItem>
      </div>
      <div className='flex flex-col w-full rounded-xl border'>
        <PersonalMenuItem title='Помощь' link='/'></PersonalMenuItem>
        <PersonalMenuItem title='Связаться с нами' link='/'></PersonalMenuItem>
      </div>
    </div>
  )
}