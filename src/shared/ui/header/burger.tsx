const MenuLine = () => {
  return(
    <div className='w-[100%] bg-[#8C959B] h-[2px]'></div>
  )
}

export const Burger = () => {
  return(
    <div className='flex flex-col gap-[5px] w-[25px] cursor-pointer'>
      <MenuLine/>
      <MenuLine/>
      <MenuLine/>
    </div>
  )
}