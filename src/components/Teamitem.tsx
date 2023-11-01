import {useState} from 'react'
import tom from "../assets/tom.jpg";
import l from "../assets/linkedin.png";
import gm from "../assets/gmail.png";
import gi from "../assets/github.png"
import tw from "../assets/twitter.png";
const Teamitem = () => {

    const[isHovered, setisHovered] = useState(false);

   const handleMouseEnter = () =>{
    setisHovered(true)
   }

   const handleMouseleave = () =>{
    setisHovered(false)
   }

  return (
    <div className={`relative w-375 h-375 shadow-2xl hover:shadow-2xl `} 
        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseleave}>

        <div className='absolute '>
            <img src= {tom} alt="alt.png" className={` w-375 h-375 ${isHovered && `ti`}`} />
        </div>

        <div className={`info absolute pl-4 text-white ${isHovered ? `t-200` : `t-220`}`}>
            <div className="pos text-xl text-white font-medium">Managing Director</div>
            <div className="gap border-2 border-white mt-4"></div>
            <div className="name mt-4 font-bold text-4xl">TOM</div>
            <div className="surname mt-1 font-bold text-4xl">CRUISE</div>
        </div>

        {isHovered && (
            <div className="links flex items-center justify-around bottom-2 absolute w-375 mb-4 ">
            <div ><a href=""><img src={gm} alt="" className='w-9 h-9'/></a></div>
            <div ><a href=""><img src={l} alt="" className='w-9 h-9'/></a></div>
            <div ><a href=""><img src={gi} alt="" className='w-9 h-9'/></a></div>
            <div ><a href=""><img src={tw} alt="" className='w-9 h-9'/></a></div>
        </div>
        )}
    </div>
  )
}

export default Teamitem