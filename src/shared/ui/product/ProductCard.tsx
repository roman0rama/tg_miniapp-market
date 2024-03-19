import React from 'react'
import { Rate } from 'antd';
import { ProductPayBtn } from '../buttons/ProductPayBtn';
import { Link } from 'react-router-dom';

export const ProductCard = ({price, oldPrice, title, reviewCount, reviewCost, discount, id, direction, classname} :
                              {price: number, oldPrice: number, title: string, reviewCount: number, reviewCost: number, discount: number, id: number, direction?: string, className?: string}) => {
  const horizontal = direction == 'horizontal'

  return(
    <Link to={`product/${id}`}>
      <div className={`bg-[#F7F7F7] w-max p-[5px] flex ${horizontal ? 'flex-row' : 'flex-col'} rounded-xl gap-[10px] ${classname}`}>
        <div className='bg-[#fff] h-[130px] rounded-xl relative'>
          <p className='absolute text-[12px] rounded-br-lg rounded-tl-lg px-[3px] bg-[#FF0000] text-[#FFF] -bottom-[5px] left-[10px]'>-{discount}%</p>
        </div>
        <div className={`flex flex-col gap-[10px] ${horizontal ? 'px-[10px]' : ''}`}>
          <div className='flex flex-row'>
            <p className='text-base'>{price} ₽</p>
            <p className='line-through text-[12px] pl-[5px] opacity-30'>{oldPrice} ₽</p>
          </div>
          <p className='w-[130px] overflow-hidden line-clamp-2 text-sm '>{title}</p>
          <div className='flex flex-row gap-[5px] items-center text-sm'>
            <Rate className='' disabled value={1} count={1}/>
            <p>{ reviewCost }</p>
            <p className='opacity-30'>({ reviewCount })</p>
          </div>
          <ProductPayBtn></ProductPayBtn>
        </div>
      </div>
    </Link>
  )
}