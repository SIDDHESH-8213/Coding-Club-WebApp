import { motion } from "framer-motion";
import checked from "../assets/checked.png";

const Tests = () => {
  return (
    <div className="bg-[#02203c]  text-white text-sm absolute top-[306px] l-796 h-246 w-264 border-2 border-[#15314b] ">
      <h1 className="text-base font-medium bg-[#15314b] px-2 border-[#15314b] border-2">Test</h1>

      <div className="flex mt-3 items-center ">
        <motion.img
          src={checked}
          alt="alt-text"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 10 }}
          transition={{ duration: 1 }}
        />


        <motion.h1
          className="animated-text text-green-500 font-medium tracking-wider leading-4 font-mono ml-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}

        >
          {"Test 1 Passed!!!"}
        </motion.h1>
      </div>



      <div className="flex mt-2 items-center ">
        <motion.img
          src={checked}
          alt="alt-text"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 10 }}
          transition={{ duration: 1 }}
        />


        <motion.h1
          className="animated-text text-green-500 font-medium tracking-wider leading-4 font-mono ml-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}

        >
          {"Test 2 Passed!!!"}
        </motion.h1>
      </div>

      <motion.h1
        className="animated-text text-white font-base text-xl tracking-wider leading-4 font-mono ml-4 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {"Accuracy"}
      </motion.h1>

      <motion.h1
        className="animated-text text-green-500 font-medium text-xl tracking-wider leading-4 font-mono ml-4 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {"100%"}
      </motion.h1>

    </div>
  )
}

export default Tests