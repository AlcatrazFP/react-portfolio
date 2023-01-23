import React from 'react'
import { Headbar } from './navbar'
import { motion } from "framer-motion";
import { Footer } from './Footer';



export const Home= ()=> {
  return (
    <>
    <div className='backitem' >
    <Headbar />
    <div className='h-auto'>
    <motion.div
      className="py-16 space-y-10 px-8 md:px-24 flex flex-col items-center"
      layout
    >
      <motion.div
        className="rounded-full overflow-hidden border-2 border-indigo-500 drop-shadow-lg brightness-110 aspect-square"
        animate={{y:10, transition:{duration: 2, ease: "easeInOut", repeat:Infinity, repeatType: "reverse"}}}
        initial={{y: -10}}
        >
        <img src="https://i.pinimg.com/564x/f9/ba/2b/f9ba2b5ac4cf290ea76bbdd7ae6aedd1.jpg" alt="" />
      </motion.div>
      <motion.h1
        className="font-openSans text-center text-3xl md:text-6xl border hithere font-bold mt-6 leading-tight tracking-tighter p-3 rounded-tl-2xl rounded-br-2xl  bg-gradient-to-r from-[#0000008b] to-[#4c4c9a] text-[#f8d200de]"
        animate={{ opacity: 1, transition: { duration: 1 } }}
        initial={{ opacity: 0 }}
      >
        Hello, I&apos;m Om Verma. 
      </motion.h1>
      <motion.p
        className="md:w-1/2 mx-auto text-center mt-6 p-3 rounded-tl-2xl rounded-br-2xl  bg-gradient-to-r from-[#0000008b] to-[#4c4c9a] text-[#f8d200de] font-medium text-xl cursor-default hithere"
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5}
        }}
        initial={{ opacity: 0, y: -30 }}
      >
        Welcome to my portfolio.
      </motion.p>
    </motion.div>
    </div>
    <Footer />
    </div>
    </>
  )
}
