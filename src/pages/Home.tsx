import React from 'react'
import { useInitData } from '@tma.js/sdk-react';
import { SearchInput } from '../shared/ui/SearchInput';
import { CategoryList } from '../components/CategoryList';
import { Banner } from '../shared/ui/homeBanner/Banner';
import { ProductCard } from '../shared/ui/product/ProductCard';
import { CategoryProductsList } from '../components/product/CategoryProductsList';
import { useSelector } from 'react-redux';
import { RootState } from '../features/redux/store';
import { CategorySkeleton } from '../shared/ui/loaders/CategorySkeleton';

export default function HomePage() {
  const initData = useInitData();
  const products = useSelector((state: RootState) => state.products.products);

  return(
    <>
      <SearchInput placeholder='Искать товары' className='mt-[10px]'></SearchInput>
      <CategoryList></CategoryList>
      <Banner category='Техника и гаджеты'/>

      <CategoryProductsList title='Новинки техники'>
        {
          products.slice(0, 5).map((item) => (
            <ProductCard key={item.title}
                         title={item.title}
                         price={item.price}
                         oldPrice={(item.price * 1 + (item.price * 1) / 100 * item.markup)}
                         discount={item.markup}
                         reviewCost={5}
                         id={1} reviewCount={33}></ProductCard>
          ))
        }
      </CategoryProductsList>

      <CategoryProductsList title='Всё для дома'>
        <CategorySkeleton/>
        <CategorySkeleton/>
        <CategorySkeleton/>
        <CategorySkeleton/>
        <CategorySkeleton/>
        <CategorySkeleton/>
      </CategoryProductsList>

      <div className="">
        <pre className='hidden'>{JSON.stringify(initData?.user, null, 2)}</pre>
      </div>
    </>
  )
}