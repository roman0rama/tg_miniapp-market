import React from 'react'
import { Burger } from '../../shared/ui/header/burger';
import basket from '../../assets/icons/basket.png'
import person from '../../assets/icons/person.png'
import heart from '../../assets/icons/heart.png'
import { HeaderButton } from '../../shared/ui/header/HeaderButton';
import { Link } from 'react-router-dom';

export const Header = ({name}: never) => {
  const [open, setOpen] = React.useState(false)
  return(
    <div className={`flex gap-[10px] items-center p-[10px] justify-between border-b h-[45px] ${open ? 'fixed top-0 right-0 left-0 z-[1000] bg-[#fff]' : ''}`}>

      <div onClick={() => { setOpen(!open) }} className='cursor-pointer'>
        {
          open ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path d="M23.6668 2.68301L21.3168 0.333008L12.0002 9.64968L2.6835 0.333008L0.333496 2.68301L9.65016 11.9997L0.333496 21.3163L2.6835 23.6663L12.0002 14.3497L21.3168 23.6663L23.6668 21.3163L14.3502 11.9997L23.6668 2.68301Z" fill="#8C959B" />
            </svg>
          ) : (<Burger></Burger>)
        }
      </div>

      <p className='text-[#B49BD8] text-xl font-bold line-clamp-1 break-all max-w-[200px]'>Привет, {name}!</p>

      <div className='flex gap-[15px] items-center'>
        <Link to='/cabinet'>
          <img src={person} alt='image failed loading' className='w-[25px] h-[25px] cursor-pointer'/>
        </Link>
        <Link to='/liked'>
          <img src={heart} alt='image failed loading' className='w-[25px] h-[25px] cursor-pointer'/>
        </Link>
        <Link to='/basket'>
          <img src={basket} alt='image failed loading' className='w-[25px] h-[25px] cursor-pointer'/>
        </Link>
      </div>

      <div
        style={{
          height: "calc(100vh - 44px)"
        }}
        className={`w-full ${open ? 'h-[100vh] fixed z-[1000] top-[44px] left-0 flex flex-col ' : 'h-[0] hidden'} bg-white justify-start overflow-hidden
                    px-[10px]`}>
        <div className='mb-[10px] h-px w-full bg-[#EBEDEE]' />
        <HeaderButton setOpen={setOpen} linkTo='/' title='Главная' />
        <HeaderButton setOpen={setOpen} linkTo='/categories' title='Категории' />
      </div>
    </div>
  )
}