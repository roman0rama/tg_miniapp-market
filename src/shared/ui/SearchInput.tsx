import search from '../../assets/icons/search.png'

export const SearchInput = ({placeholder, className} : never) => {
  return(
    <div className='w-[100%] px-[10px] relative flex items-center mt-[10px]'>
      <input
        type='text'
        placeholder={placeholder}
        className={`border rounded-[30px] outline-none w-[100%] py-[5px] pl-[50px] bg-[#F7F7F7] ${className}`}
      />
      <img src={search} alt='' className='absolute w-[25px] h-[25px] left-[25px] top-[15px]'/>
    </div>
  )
}