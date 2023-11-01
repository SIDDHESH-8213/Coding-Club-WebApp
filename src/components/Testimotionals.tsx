import React from 'react'
import tom from "../assets/tom.jpg";
import google from "../assets/google.png";
const Testimotionals = () => {
  return (
    <div className='relative w-354 h-324 shadow-xl hover:shadow-2xl border-t-4 border-t-[#626EE3] bg-white '>
      <img src={tom} alt="" className='absolute -top-10 l-137 rounded-full object-cover w-20 h-20 ' />

      <div className='flex flex-col items-center mt-12 px-2 '>
        <div className='font-normal text-2xl'>
          Alex
        </div>

        <div className=' font-light text-sm '>
          Software Engineer
        </div>

        <img src={google} alt="" className=' w-28 h-10 mt-2 mb-2 ' />

        <div className='text-[#445D6E] font-normal text-sm'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, s
          ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec.
          Eget nunc lobortis mattis aliquam faucibus.
        </div>
      </div>

    </div>
  )
}

export default Testimotionals