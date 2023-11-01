import React from 'react'

const Prompt = () => {
  return (
    <div className= "bg-[#02203c]  text-white text-sm absolute top-[50px] l-796 h-246 w-264 border-2 border-[#15314b] ">
        <h1 className="text-base font-medium bg-[#15314b] px-2 border-[#15314b] border-2">Prompt</h1>
       
        <p className='px-2 mt-2 font-medium text-base text-green-500'>Write a c++ program to print "Hello " + input</p>

        <p className='font-medium text-base px-2 text-pink-500'>Sample Input</p>
        <p className='px-2 mt-1 '>Maverick</p>
        <p className='px-2 mt-1'>Iceman</p>

        <p className='font-medium text-base px-2 mt-1 text-pink-500'>Output</p>
        <p className='px-2 mt-1 '>Hello Maverick</p>
        <p className='px-2 mt-1'>Hello Iceman</p>
        

    </div>
  )
}

export default Prompt