import React from 'react'
import lo from "../assets/linkedin.png";
import ma from "../assets/gmail.png";
import yt from "../assets/youtube.png";
import tw from "../assets/twitter.png";
import icon from "../assets/contact-us.png";
import di from "../assets/discord (1).png";
import ig from "../assets/instagram (2).png";
import ht from "../assets/heart (1).png";

const Footer = () => {
  return (
    <div className='h-[203px] bg-[#001528] text-center relative'>
      <img src={icon} alt="" className='absolute top-[45px] w-[140px] h-[71px] left-1/2 transform -translate-x-1/2' />
      <div className='absolute top-[130px] left-1/2 transform -translate-x-1/2 flex justify-between' >
        <a href=""><img src={ma} alt="" className='h-[30px] w-[30px] mr-8'/></a>
        <a href=""><img src={ig} alt="" className='h-[30px] w-[30px] mr-8'/></a>
        <a href=""><img src={tw} alt="" className='h-[30px] w-[30px] mr-8'/></a>
        <a href=""><img src={lo} alt="" className='h-[30px] w-[30px] mr-8'/></a>
        <a href=""><img src={yt} alt="" className='h-[30px] w-[30px] mr-8'/></a>
        <a href=""><img src={di} alt="" className='h-[30px] w-[30px] '/></a>
      </div>
      <div className='absolute top-[170px] left-1/2 transform -translate-x-1/2 text-white text-xs flex'>
        <span>Made with</span>
        <span><img src= {ht} alt="" className='h-[16px] mx-1' /></span>
        <span>by SPCE CodeCell</span>
      </div>
    </div>
  )
}

export default Footer