import { useState } from "react";

interface Rit{
    image: string;
    rname: string;
    rlink: string;
}

const RoadmapItem = (props : Rit) => {


  return (
    <a href={props.rlink} target="_blank">
        <div className="flex justify-around  w-96 p-10 h-20 items-center  hover:shadow-2xl bg-[#f6f9fc]">
        <img src={props.image} alt=""  className="h-12 w-12"/>
        <div className=" text-xl font-normal ">{props.rname}</div>
    </div>
    </a>
    
  )
}

export default RoadmapItem