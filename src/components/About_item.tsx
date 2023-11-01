import React from 'react'
import icon from "../assets/icon.png"

interface AboutItemProps {
    icn: string;
    Mt: string;
    dsc: string;
    
  }

const About_item = (props : AboutItemProps) => {
    
  return (
    <div className= {`absolute flex flex-col w-360 h-265 hover:shadow-2xl hover:bg-white px-2 py-1 `} >
        <img src= {props.icn} alt="" className='flex h-12 w-12 mx-auto mb-2 mt-6'/>
        
        <div className='topic text-xl font-normal text-[#02203C] mx-auto mb-4 '>
            {props.Mt}
        </div>

        <div className='text-[#445D6E] text-sm font-normal mx-auto'>
            {props.dsc}
        </div>
    </div>
  )
}

export default About_item