import React, { useState } from 'react';


interface ims {
    images: string[];
    rnamee: string[];

}

const ImageSlider = (props: ims) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const changeImage = (direction: string) => {
        if (direction === 'left') {
            setCurrentIndex(currentIndex === 0 ? props.images.length - 1 : currentIndex - 1);
        } else {
            setCurrentIndex(currentIndex === props.images.length - 1 ? 0 : currentIndex + 1);
        }
    };

    return (
        <div>

            <div className='mb-5 text-center text-3xl '>{props.rnamee[currentIndex]}</div>

            <div className="relative image-slider h-[400px] w-[700px] flex flex-row items-center justify-between ">
                <div className='text-4xl'>
                    <span onClick={() => changeImage('left')  }>&#60;</span>
                </div>

                <img src={props.images[currentIndex]} alt="current" className='h-[400px] w-[600px]' />

                <div className="arrows text-4xl ">
                    <span onClick={() => changeImage('right')}>&#62;</span>
                </div>
            </div>
        </div>

    );
};

export default ImageSlider;