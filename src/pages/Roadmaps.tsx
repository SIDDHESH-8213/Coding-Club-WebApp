import React from 'react'
import f from "../assets/ui-design (1).png"
import b from "../assets/blockchain (1).png"
import an from "../assets/android (1).png"
import ai from "../assets/artificial-intelligence (1).png"
import d from "../assets/agile.png"
import ba from "../assets/programming (1).png"
import RoadmapItem from '../components/RoadmapItem'
import ab  from '../assets/frontgif.gif'
import da  from '../assets/backendgif.gif'
import db  from '../assets/devopsgif.gif'
import dc  from '../assets/Blockchaingif.gif'
import af  from '../assets/androidgif.gif'
import ag from '../assets/mlgif.gif'
import ImageSlider from '../components/ImageSlider'



const Roadmaps = () => {
  
  return (
    <div className=' h-800 bg-[#f6f9fc] relative' >
      <div className=' top-16 absolute left-1/2 transform -translate-x-1/2 text-center '>
          <div className=' font-medium text-5xl text-[#02203C]'>Developer Roadmaps</div>
          <div className='font-normal text-lg text-[#02203C] mt-3'>Step by step guides and paths to learn different tools or technologies</div>
      </div>
      <div className='absolute top-48 left-1/4 transform -translate-x-1/2'>
        <RoadmapItem image={f} rname='Frontend Development' rlink = "https://roadmap.sh/frontend"/>
      </div>

      <div className='absolute top-72 left-1/4 transform -translate-x-1/2'>
        <RoadmapItem image={ba} rname='Backend Development' rlink = "https://roadmap.sh/backtend"/>
      </div>

      <div className='absolute top-96 left-1/4 transform -translate-x-1/2'>
        <RoadmapItem image={d} rname='DevOps Development' rlink = "https://roadmap.sh/devops"/>
      </div>
      
      <div className='absolute t-120 left-1/4 transform -translate-x-1/2'     >
        <RoadmapItem image={b} rname='Blockchain Development' rlink = "https://roadmap.sh/blockchain"/>
      </div>

      <div className='absolute t-144 left-1/4 transform -translate-x-1/2'>
        <RoadmapItem image={an} rname='Android Development' rlink = "https://roadmap.sh/android"/>
      </div>

      <div className='absolute t-168 left-1/4 transform -translate-x-1/2'>
        <RoadmapItem image={ai} rname='Machine Learning' rlink = "https://whimsical.com/machine-learning-roadmap-2020-CA7f3ykvXpnJ9Az32vYXva"/>
      </div>

      
        
      <div className='absolute top-[15rem] left-[46%]'>
      <ImageSlider 
      images= {[ab, da, db, dc, af, ag]} 
      rnamee={[
        "Frontend Development",
        "Backend Development",
        "DevOps Development", 
        "Blockchain Development",
        "Android Development",
        "Machine Learning"
      ]}/>
      </div>
       

       


      

    </div>
  )
}

export default Roadmaps