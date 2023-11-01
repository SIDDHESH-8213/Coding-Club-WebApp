import { useState, useEffect } from "react";
import { motion } from "framer-motion";



const Animation = () => {

    const [isRunning, setIsRunning] = useState(false);

    const handleRunClick = () => {
        setIsRunning(true);
    };

    return (
        <div className="bg-[#02203c]  text-white text-sm absolute top-[50px] l-1070 h-246 w-264 border-2 border-[#15314b] ">
            <h1 className="text-base font-medium bg-[#15314b] px-2 border-[#15314b] border-2">Input</h1>

            <div className="flex">
                <motion.h1
                    className="animated-text text-pink-500 font-medium tracking-wider leading-4 font-mono mt-3 ml-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {"#include"}
                </motion.h1>

                <motion.h1
                    className="animated-text text-white font-medium tracking-wider leading-4 font-mono mt-3 ml-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {"<bits/stdc++.h>;"}
                </motion.h1>
            </div>


            <div className="flex">
                <motion.h1
                    className="animated-text text-cyan-500 font-medium tracking-wider leading-4 font-mono ml-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {"using"}
                </motion.h1>

                <motion.h1
                    className="animated-text text-green-500 font-medium tracking-wider leading-4 font-mono ml-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {"namespace"}
                </motion.h1>

                <motion.h1
                    className="animated-text text-white font-medium tracking-wider leading-4 font-mono ml-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {"std;"}
                </motion.h1>
            </div>
            <br/>
            <div className="flex">
                <motion.h1
                    className="animated-text text-blue-600 font-medium tracking-wider leading-4 font-mono ml-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {"int"}
                </motion.h1>

                <motion.h1
                    className="animated-text text-white font-medium tracking-wider leading-4 font-mono ml-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {"main() {"}
                </motion.h1>
            </div>


            <motion.h1
                className="animated-text text-white font-medium tracking-wider leading-4 font-mono ml-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {'cout<<"Hello World!";'}
            </motion.h1>

            <div className="flex">
                <motion.h1
                    className="animated-text text-pink-500 font-medium tracking-wider leading-4 font-mono ml-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {"return "}
                </motion.h1>

                <motion.h1
                    className="animated-text text-white font-medium tracking-wider leading-4 font-mono ml-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {"0;"}
                </motion.h1>
            </div>

            <motion.h1
                    className="animated-text text-white font-medium tracking-wider leading-4 font-mono ml-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {"}"}
            </motion.h1>
            <br/>
            <motion.h1
                    className="animated-text text-green-600 font-xl tracking-wider leading-4 font-mono ml-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {"//This program will print Hello World!"}
            </motion.h1>


            <button
                className="bg-blue-500   text-white absolute top-0 right-0 h-6 w-14"
                onClick={handleRunClick}
            >
                Run
            </button>
        </div>
    );
};

export default Animation