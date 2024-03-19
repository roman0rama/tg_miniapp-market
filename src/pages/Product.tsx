import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ShareButton from '../shared/ui/buttons/ShareButton';
import back from '../assets/icons/back.png'
import { Carousel, Rate } from 'antd';
import { FullProductPayBtn } from '../shared/ui/buttons/FullProductPayBtn';
import { SendReviewButton } from '../shared/ui/buttons/SendReviewButton';
import { ReviewItem } from '../shared/ui/reviews/ReviewItem';

const CarouselItem = ({ children }: never) => {
 return(
   <div className='h-[70vh] bg-[#B49BD8] color-[#fff]'>
     <p className='flex h-[92%] text-[#1D1717] bg-[#fff] items-center justify-center'>{ children }</p>
   </div>
 )
}

export default function Product() {
  const { productId } = useParams();

  return(
    <>
      <FullProductPayBtn></FullProductPayBtn>
      <div className='flex justify-between p-[10px]'>
        <Link to='/'> <img src={back} alt='' className='w-[25px] h-[25px]'/> </Link>
        <ShareButton></ShareButton>
      </div>

      <Carousel autoplay>
        <CarouselItem>
          <h3 className=''>1</h3>
        </CarouselItem>
        <CarouselItem>
          <h3>2</h3>
        </CarouselItem>
      </Carousel>

      <p className='font-semibold p-[10px] text-lg '>Приставка игровая Sony PlayStation 5 Blu-Ray, 825Gb, White, CFI-1218A</p>

      <div className='flex flex-row items-center h-max'>
        <Rate className='text-sm px-[10px] w-max'  disabled value={4.5} count={5}/>
        <p className='text-sm opacity-30'>246 отзывов</p>
      </div>

      <div className='flex flex-col gap-[10px] pt-[10px] px-[10px]'>
        <p className='font-semibold text-lg '>Информация о товаре: </p>
        <p>PlayStation 5 - стационарная игровая консоль 9-го поколения от Sony, совместившая в себе передовые игровые технологии и богатый мультимедиа функционал. Мощнейший видеопроцессор на базе AMD Radeon RDNA 2 (10,3 терафлопс) и 8-ми ядерный процессор AMD Ryzen Zen 2 с поддержкой частоты кадров до 120 fps продемонстрируют великолепную графику в видеоиграх в разрешениях 4К и 8К при наличии соответствующего телевизора или монитора, а также максимально наполнят качественным кристаллическим изображением ваш HD-телевизор, даже если в нем нет поддержки 4К. Высокоскоростной жесткий диск SSD молниеносно загружает и воспроизводит медиаданные, что в сравнении с прошлыми поколениями игровых консолей исключает длительное ожидание загрузки игр, локаций или сохранений. Ваш игровой процесс сопроводится объёмным трехмерным звучанием, а сверхтехнологичный геймпад DualSense тактильно передаст все ощущения от игрового процесса прямо в руки. Цифровое издание PS5 — это версия консоли PS5 без дисковода. Войдите в свою учетную запись для PlayStation Network и перейдите в PlayStationStore, чтобы приобрести и загрузить игры.</p>
      </div>

      <Link to={`/product/reviews/${productId}`}>
        <div className='flex w-full justify-between px-[10px] pt-[10px]'>
          <p className='font-semibold text-lg '>Отзывы: </p>
          <Link to='/'> <img src={back} alt='' className='w-[25px] h-[25px] rotate-180'/> </Link>
        </div>
      </Link>

      <p className='font-medium text-base px-[10px] py-[10px]'>
        Оценка 4.96
        <Rate className='text-base pl-[5px]' disabled value={1} count={1}/>
        <span className='opacity-30 text-sm pl-[20px]'>на основе 246 оценок</span>
      </p>
      <div className=' text-sm flex flex-col gap-[5px]'>
        <p><Rate className='text-sm px-[10px]' disabled value={5} count={5}/> 238 отзывов</p>
        <p><Rate className='text-sm px-[10px]' disabled value={4} count={5}/> 7 отзывов</p>
        <p><Rate className='text-sm px-[10px]' disabled value={3} count={5}/> 0 отзывов</p>
        <p><Rate className='text-sm px-[10px]' disabled value={2} count={5}/> 0 отзывов</p>
        <p><Rate className='text-sm px-[10px]' disabled value={1} count={5}/> 1 отзыв</p>
      </div>
      <SendReviewButton text='Оставить отзыв'></SendReviewButton>
      <ReviewItem className='mt-[20px]'></ReviewItem>
      <SendReviewButton text='Посмотреть все отзывы' className='w-[70%] mx-auto mb-[10vh] '></SendReviewButton>

    </>
  )
}