import React from 'react'
import { CategoryCard } from '../shared/ui/category/CategoryCard';
import { CategorySkeleton } from '../shared/ui/loaders/CategorySkeleton';
import { HorizontalScroll } from '../shared/ui/HorizontalScroll';
import { useSelector } from 'react-redux';
import { RootState } from '../features/redux/store';

export const CategoryList = () => {
  const categories = useSelector((state: RootState) => state.category);

  return(
    <div className='px-[10px]'>
      <HorizontalScroll>
        {
          categories.categories.map((item) => (
            <CategoryCard key={item.title} imagePath='red' linkTo={`/categories/${item.id}`} name={item.title} id={item.id}/>
          ))
        }
      </HorizontalScroll>
    </div>
  )
}