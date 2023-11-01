import { useState } from 'react'
import ck from "../assets/check.png";
interface QuestionItemProps {
    tp: string;
    dsc: string;
}

const QuestionItem = (props: QuestionItemProps) => {

    const [isHovered, setisHovered] = useState(false);

    const handlemousein = () => {
        setisHovered(true)
    }

    const handlemouseout = () => {
        setisHovered(false)
    }

    return (
        <div className='relative w-306 h-130 bg-[#15314B] shadow-xl hover:shadow-2xl' onMouseEnter={handlemousein} onMouseLeave={handlemouseout}>
            {!isHovered &&
                (<div>
                    <img src={ck} alt="" className='absolute top-12 transform -translate-y-1/2 -translate-x-1/2 w-9 h-9 left-1/2' />

                    <div className='absolute t-86 transform -translate-y-1/2 -translate-x-1/2 text-white  left-1/2 w-306 text-center'>{props.tp}</div>
                </div>
                )
            }

            {isHovered &&
                (<div className='absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white  left-1/2 text-center w-306'>{props.dsc}</div>)
            }
        </div>
    )
}

export default QuestionItem