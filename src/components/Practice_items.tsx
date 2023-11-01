import { useState } from 'react'
import yt from "../assets/play.png";
import lt from "../assets/leetcode.png";

interface Practice_itemsProps {
    qname: string;
    qlink: string;
    vlink: string;
    dif:number;
}

const Practice_items = (props: Practice_itemsProps) => {

    const [isClicked, setisClicked] = useState(false)

    const handleclick = () => {
        setisClicked(!isClicked)
    }

    return (
        <div className='w-90 h-12 bg-white flex items-center relative rounded-md shadow-md hover:shadow-2xl border-2 border-gray-400 '>

            <div className={`absolute w-7 h-7 rounded-full left-4 ${isClicked ? `bg-green-500` : `bg-gray-200`} `} onClick={handleclick}></div>
            <a href={props.qlink} target="_blank" className='absolute left-16'><div className=' ques_name text-[#02203c] text-base font-semibold '>Reverse the array</div></a>
            <a href={props.vlink} target="_blank" className='absolute  right-8 h-8'><img src={yt} alt="alt" className=' bg-transparent' /></a>
            <a href={props.qlink} target="_blank" className='absolute  right-20 '><img src={lt} alt="leetcode" className='bg-transparent h-7' /></a>
            <div className={`absolute h-full w-4 right-0 ${props.dif === 0? `bore` : props.dif === 1? `borm` : `borh`} `}></div>


        </div>
    )
}

export default Practice_items