import { motion } from "framer-motion-3d"
import check2 from "../assets/check2.png";
import Red_cross from "../assets/Red_cross.png";

const Output = () => {
  return (
    <div className="bg-[#02203c]  text-white text-sm absolute top-[306px] l-1070 h-246 w-264 border-2 border-[#15314b]
    transform rotate-y-45 ">
      <h1 className="text-base font-medium bg-[#15314b] px-2 border-[#15314b] border-2">Output</h1>

      <button className="bg-green-700 absolute top-0 right-0 h-6 px-2">Submit</button>

      <div className="flex items-center mt-3 ml-3">
        <motion.img
          src={check2}
          alt="alt-text"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 10 }}
          transition={{ duration: 1 }}
        />

        <motion.h1
          className="animated-text text-gray-700 text-base bg-green-500 font-medium tracking-wider leading-4 font-mono ml-4 px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}

        >
          {"Hello Maverick"}
        </motion.h1>

      </div>

      <div className="flex items-center mt-3 ml-3">
        <motion.img
          src={Red_cross}
          alt="alt-text"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 10 }}
          transition={{ duration: 1 }}
        />

        <motion.h1
          className="animated-text text-gray-700 text-base bg-red-500 font-medium tracking-wider leading-4 font-mono ml-4 px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}

        >
          {"Hello Goose"}
        </motion.h1>

      </div>

      <div className="flex items-center mt-3 ml-3">
        <motion.img
          src={check2}
          alt="alt-text"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 10 }}
          transition={{ duration: 1 }}
        />

        <motion.h1
          className="animated-text text-gray-700 text-base bg-green-500 font-medium tracking-wider leading-4 font-mono ml-4 px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}

        >
          {"Hello Iceman"}
        </motion.h1>

      </div>


    </div>
  )
}

export default Output