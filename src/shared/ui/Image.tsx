import React from 'react'

export const Image = ({src, width, height, classname}: string) => {
  return(
    <img
      src={src}
      alt='image failed loading'
      className={`w-[${width || '100%'}] h-[${height || '100%'}] ${classname}`}/>
  )
}