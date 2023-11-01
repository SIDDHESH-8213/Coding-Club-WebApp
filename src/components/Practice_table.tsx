import React from 'react';
import Practice_items from './Practice_items';


interface PtProps {
    nq: number;
    tablenm: string;
}

const Practice_table = (props: PtProps) => {
    return (
        <div className='relative h-280 w-96 border-1 border-black p-4'>
            <div className="absolute text-[#001528] top-0 text-2xl w-full ">{props.tablenm}</div>
            <div className="absolute top-10 w-96 h-64 overflow-y-scroll" >

                <style>
                    {`
                    ::-webkit-scrollbar {
                        display:none;
                    }
                    ::-webkit-scrollbar-thumb {
                        display:none;
                    }
                `}
                </style>

                {[...Array(props.nq)].map((_, index) => (
                    <div key={index} className="headerr absolute" style={{ top: `${(index ) * 60}px`, position: 'absolute' }}>
                        <Practice_items qlink="https://leetcode.com/problems/set-matrix-zeroes/"
                            qname="Set Matrix Zeroes"
                            vlink="https://www.youtube.com/watch?v=N0MgLvceX7M&list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz&index=28"
                            dif = {Math.floor(Math.random() * 3) } />
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Practice_table;
