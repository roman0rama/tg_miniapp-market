import { ProfileInfoBlock } from '../../shared/ui/cabinet/ProfileInfoBlock';
import heart from '../../assets/icons/heart.png';
import basket from '../../assets/icons/basket.png';
import { HorizontalScroll } from '../../shared/ui/HorizontalScroll';
import React from 'react';
import { Rate } from 'antd';

export const InfoBlockComponent = () => {
  return <HorizontalScroll>
    <ProfileInfoBlock title='Избранное' subtitle='24 товара' link='/liked'>
      <img src={heart} alt='image failed loading' className='w-[25px] h-[25px] cursor-pointer'/>
    </ProfileInfoBlock>
    <ProfileInfoBlock title='Покупки' subtitle='Нет покупок' link='/liked'>
      <img src={basket} alt='image failed loading' className='w-[25px] h-[25px] cursor-pointer'/>
    </ProfileInfoBlock>
    <ProfileInfoBlock title='Отзывы' subtitle='Нет отзывов' link='/liked'>
      <Rate count={1} value={1}></Rate>
    </ProfileInfoBlock>
  </HorizontalScroll>
}