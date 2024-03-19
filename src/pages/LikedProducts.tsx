import React from 'react'
import { ProductCard } from '../shared/ui/product/ProductCard';

export default function LikedProducts() {
  return(
    <div className='p-[10px] '>
      <div className='flex flex-col p-[10px] border gap-[10px] rounded-xl items-center'>
        <ProductCard id={1} direction='horizontal' className='mx-[auto]'></ProductCard>
        <ProductCard id={1} direction='horizontal'></ProductCard>
      </div>
    </div>
  )
}