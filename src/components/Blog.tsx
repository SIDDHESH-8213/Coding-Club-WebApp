import React from 'react'
import ai from "../assets/af.gif"

const Blog = () => {
    return (
        <div className='relative w-[1430px] h-[130px] bg-[#0e406efd] rounded-bl-[30px] rounded-tl-[10px] mb-5'>
            <a href="">
                <div className='absolute w-[1398px] h-[126px] top-[2px] bg-white left-[30px] flex justify-start items-center'>
                    <img src={ai} alt="" className='w-[80px] h-[80px] ml-10' />
                    <div className='ml-20 w-[65%]'>
                        <div className='text-xl font-medium'>Rise of Data Science and Data Analysis</div>
                        <div className='font-normal italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatibus illo amet nobis expedita, dolor velit sit soluta dicta voluptas reiciendis.
                        </div>
                    </div>
                    <div className='absolute right-[100px]'>
                        <div>Author</div>
                        <div>Date</div>
                        <a href=""><div>Link</div></a>  
                    </div>
                </div>
            </a>

        </div>
    )
}

export default Blog