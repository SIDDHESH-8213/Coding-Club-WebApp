import React from 'react'
import QuestionItem from '../components/QuestionItem'

const Questions = () => {
  return (
    <div className='bg-[#001528] h-1291 relative'>
      <div className="heading absolute left-1/2 transform -translate-x-1/2 text-white font-semibold text-4xl top-16 ">
        Questions spanning 15 categories
      </div>

      <div className="sub-head absolute left-1/2 transform -translate-x-1/2 text-white font-normal text-base text-center top-32">
        If you want to ace the coding interviews, being well-versed in all
        common data structures and popular problem-solving methods is paramount.
        With 170 questions spanning 15 categories and 4 difficulty levels,
        we've got you covered.
      </div>

      <button
        className='left-1/2 transform -translate-x-1/2 absolute top-64
         text-white font-normal text-center w-56 h-12 bg-[#626EE3] hover:bg-[#4857e0]'>
        Explore Questions
      </button>

      <div className='absolute t-234 text-white left-1/4 transform -translate-x-1/2'>
        <QuestionItem tp={"Arrays"} dsc='Harder than they seem' />
      </div>

      <div className='absolute t-234 text-white left-2/4 transform -translate-x-1/2'>
        <QuestionItem tp={"Graphs"} dsc='Harder than they seem' />
      </div>

      <div className='absolute t-234 text-white left-3/4 transform -translate-x-1/2'>
        <QuestionItem tp={"Stack"} dsc='Harder than they seem' />
      </div>

      <div className='absolute t-515 text-white left-1/4 transform -translate-x-1/2'>
        <QuestionItem tp={"Queue"} dsc='Harder than they seem' />
      </div>

      <div className='absolute t-515 text-white left-2/4 transform -translate-x-1/2'>
        <QuestionItem tp={"Binary Trees"} dsc='Harder than they seem' />
      </div>

      <div className='absolute t-515 text-white left-3/4 transform -translate-x-1/2'>
        <QuestionItem tp={"Tries"} dsc='Harder than they seem' />
      </div>

      <div className='absolute t-686 text-white left-1/4 transform -translate-x-1/2'>
        <QuestionItem tp={"Linked List"} dsc='Harder than they seem' />
      </div>

      <div className='absolute t-686 text-white left-2/4 transform -translate-x-1/2'>
        <QuestionItem tp={"Strings"} dsc='Harder than they seem' />
      </div>

      <div className='absolute t-686 text-white left-3/4 transform -translate-x-1/2'>
        <QuestionItem tp={"Searching"} dsc='Harder than they seem' />
      </div>

      <div className='absolute t-857 text-white left-1/4 transform -translate-x-1/2'>
        <QuestionItem tp={"Sorting"} dsc='Harder than they seem' />
      </div>

      <div className='absolute t-857 text-white left-2/4 transform -translate-x-1/2'>
        <QuestionItem tp={"Dynamic Programming"} dsc='Harder than they seem' />
      </div>

      <div className='absolute t-857 text-white left-3/4 transform -translate-x-1/2'>
        <QuestionItem tp={"Greedy Algorithms"} dsc='Harder than they seem' />
      </div>

      <div className='absolute t-1028 text-white left-1/4 transform -translate-x-1/2'>
        <QuestionItem tp={"Recursion"} dsc='Harder than they seem' />
      </div>

      <div className='absolute t-1028 text-white left-2/4 transform -translate-x-1/2'>
        <QuestionItem tp={"Binary Search Trees"} dsc='Harder than they seem' />
      </div>

      <div className='absolute t-1028 text-white left-3/4 transform -translate-x-1/2'>
        <QuestionItem tp={"Heaps"} dsc='Harder than they seem' />
      </div>


    </div>
  )
}

export default Questions