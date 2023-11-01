import React from 'react'
import Practice_table from '../components/Practice_table'
import topic from "../assets/clipboard.png";
const Practice = () => {
  return (
    <div className='relative h-[2300px] bg-[#f6f9fc]'>
      <div className='relative h-600 text-white bg-[#001528] items-center flex  flex-col'>
        <div className='absolute font-semibold text-4xl top-1/4'>
          180 Coding Interview Questions
        </div>
        <div className='absolute top-44 font-normal text-xl'>
          The practice you need to ace the interview
        </div>
        <button className='absolute top-64 bg-[#626EE3] hover:bg-[#4857e0] w-52 h-12 text-center font-normal flex
            items-center justify-between rounded-md '>
          <img src= {topic} alt="topic.png" className='ml-12 w-8 h-7 ' />
           <div className='mr-12'>Topic List</div>
        </button>
      </div>
      <div className='relative'>
        <div className='absolute text-[#001528] text-xl font-semibold top-10 text-center m-10 align-middle'>
            Coding interview prep is a numbers game that many candidates lose.
            We've hand-picked 180 of the best coding interview questions to prepare you for every 
            interview you could encounter.
        </div >
        
        <div className='absolute t-166 text-4xl  text-[#001528] w-full text-center'>{`#include <Level_1.ECC>`}</div>
        
        <div className='absolute top-56 left-1/4  '>
          <Practice_table  tablenm='Linked Lists' nq={7} />
        </div>
        <div className='absolute top-56 left-2/4  '>
          <Practice_table  tablenm='Strings' nq={8}/>
        </div>
        <div className='absolute top-56 left-3/4  '>
          <Practice_table  tablenm='Searching/Sorting' nq={9}/>
        </div>
        <div className='absolute top-56 left-4/4  '>
          <Practice_table  tablenm='Arrays' nq={9}/>
        </div>
        
        <div className='absolute t-586 text-4xl  text-[#001528] w-full text-center'>{`#include <Level_2.ECC>`}</div>

        <div className='absolute t-644 left-1/4  '>
          <Practice_table  tablenm='Queue' nq={7}/>
        </div>
        <div className='absolute t-644 left-2/4  '>
          <Practice_table  tablenm='Recursion' nq={8}/>
        </div>
        <div className='absolute t-644 left-3/4  '>
          <Practice_table  tablenm='Greedy Algorithms' nq={9}/>
        </div>
        <div className='absolute t-644 left-4/4  '>
          <Practice_table  tablenm='Stack' nq={9}/>
        </div>

        <div className='absolute t-1002 text-4xl  text-[#001528] w-full text-center'>{`#include <Level_3.ECC>`}</div>

        <div className='absolute t-1060 left-1/4  '>
          <Practice_table  tablenm='Binary Search Trees' nq={7}/>
        </div>
        <div className='absolute t-1060 left-2/4  '>
          <Practice_table  tablenm='Heaps' nq={8}/>
        </div>
        <div className='absolute t-1060 left-3/4  '>
          <Practice_table  tablenm='Graphs' nq={9}/>
        </div>
        <div className='absolute t-1060 left-4/4  '>
          <Practice_table  tablenm='Binary Trees' nq={9}/>
        </div>

        <div className='absolute t-1426 text-4xl  text-[#001528] w-full text-center'>{`#include <Level_4.ECC>`}</div>

       
        <div className='absolute t-1484 left-4/4  '>
          <Practice_table  tablenm='Tries' nq={8}/>
        </div>
        <div className='absolute t-1484 left-1/4  '>
          <Practice_table  tablenm='Dynamic Programming' nq={9}/>
        </div>
       


  

      </div>

     
    </div>
  )
}

export default Practice