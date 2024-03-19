import React, { useEffect, useState } from 'react';
import { CategoryCard } from '../shared/ui/category/CategoryCard';
import { CategorySkeleton } from '../shared/ui/loaders/CategorySkeleton';
import { getCategories } from '../api/category';

export default function Categories() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData]= useState<any>([])

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      const res = await getCategories();
      setData(res)
    };
    fetchData().then(() => {
      setIsLoading(false)
    });
  }, []);

  return(
      <div className='px-[10px]'>
        <div className='grid grid-cols-3'>
          {
            data?.length != 0 ? (
              data.map((item, index) => (
                <CategoryCard key={index} name={item?.title} id={item?.title}></CategoryCard>
              ))
            ) : (
              isLoading ?
                <>
                  <CategorySkeleton/>
                  <CategorySkeleton/>
                  <CategorySkeleton/>
                </>
                :
                <p className='text-[#9da3ae]'>Нет данных. Попробуйте зайти позднее!</p>
            )
          }
        </div>
      </div>
    )
}