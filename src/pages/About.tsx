import { useState } from 'react'
import About_item from '../components/About_item'
import icon from "../assets/icon.png"
import Testimotionals from '../components/Testimotionals'
import Teamitem from '../components/Teamitem'

const About = () => {

  const dd = "Coding interview prep is a numbers game that many candidates lose. We've hand-picked 180 of the best coding interview questions to prepare you for every interview you could encounter."

  const [value, setValue] = useState(50);

  function handleSliderChange(newValue: number) {
    setValue(newValue);
  }


  return (
    <div className='relative h-3000 bg-[#f6f9fc]'>
      <div className="headline text-4xl font-normal text-[#02203C] flex justify-center mt-12 ">
        What is Elite Coders Club?
      </div>

      <div className='absolute l-180 t-90'>
        <About_item icn={icon} Mt="coding" dsc={dd} />
      </div>

      <div className='absolute l-580 t-90'>
        <About_item icn={icon} Mt="coding" dsc={dd} />
      </div>

      <div className='absolute l-980 t-90'>
        <About_item icn={icon} Mt="coding" dsc={dd} />
      </div>

      <div className='absolute l-180 t-385'>
        <About_item icn={icon} Mt="coding" dsc={dd} />
      </div>

      <div className='absolute l-580 t-385'>
        <About_item icn={icon} Mt="coding" dsc={dd} />
      </div>

      <div className='absolute l-980 t-385'>
        <About_item icn={icon} Mt="coding" dsc={dd} />
      </div>

      <div className=" text-4xl font-normal text-[#02203C]  t-700 absolute  left-1/2 transform -translate-x-1/2 ">
        Testimonials
      </div>

      <div className='font-normal text-sm text-[#02203C]  t-780 absolute  left-1/2 transform -translate-x-1/2'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Arcu non sodales neque sodales ut etiam.
      </div>

      <div className='absolute t-920 left-1/4 transform -translate-x-1/2'>
        <Testimotionals />
      </div>

      <div className='absolute t-920 left-2/4 transform -translate-x-1/2'>
        <Testimotionals />
      </div>

      <div className='absolute t-920 left-3/4 transform -translate-x-1/2'>
        <Testimotionals />
      </div>

      <button className='absolute t-1330 left-1/2 transform -translate-x-1/2 bg-white shadow-lg hover:shadow-xl w-300 py-4
                         text-[#02203C] text-normal 
                      '>
        Read More Testimonials
      </button>

      <div className='absolute t-1460 left-1/2  transform -translate-x-1/2 font-normal text-4xl text-[#02203C]'>
        Team
      </div>

      <div className='absolute t-1540 left-1/2 transform -translate-x-1/2 font-normal text-sm text-[#02203C] w-100%'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi illum eveniet culpa ipsam quam reprehenderit!
      </div>

      <div className='absolute t-1680 left-1/4 transfomr -translate-x-1/2 '>
        <Teamitem />
      </div>

      <div className='absolute t-1680 left-2/4 transfomr -translate-x-1/2 '>
        <Teamitem />
      </div>

      <div className='absolute t-1680 left-3/4 transfomr -translate-x-1/2 '>
        <Teamitem />
      </div>

      <div className='absolute t-2120 left-1/4 transfomr -translate-x-1/2 '>
        <Teamitem />
      </div>

      <div className='absolute t-2120 left-2/4 transfomr -translate-x-1/2 '>
        <Teamitem />
      </div>

      <div className='absolute t-2120 left-3/4 transfomr -translate-x-1/2 '>
        <Teamitem />
      </div>
    </div>
  )
}

export default About