import React from 'react'
import { UserBlock } from './UserBlock';

const AdditionalText = ({ text }: {text: string}) => {
  return(
    <span className='opacity-30 text-sm pb-[5px]'>{ text }</span>
  )
}

export const ReviewItem = ({className}: never) => {
  return(
    <div className={`px-[10px] ${className}`}>
      <div className='border p-[10px] flex flex-col gap-[15px] rounded-lg'>
        <UserBlock name='Аноним' rate={3} publishedAt={'2023/02/23'}></UserBlock>
        <div>
          <AdditionalText text={'Достоинства'}/>
          <p>Супер пон мега пон ультра пон крутой пон умный пон апкакани пон </p>
        </div>
        <div>
          <AdditionalText text={'Недостатки'}/>
          <p>Не обнаружено</p>
        </div>
        <div>
          <AdditionalText text={'Комментарий'}/>
          <p>Не описано</p>
        </div>
      </div>
    </div>
  )
}