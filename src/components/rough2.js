import React from "react";
import { Headbar } from "./navbar";
import { motion } from "framer-motion";
import { Footer } from "./Footer";

export const Rough2 = () => {
  return (
    <>
      <div className="backitem">
        <Headbar />
        <div className="   h-auto">
          <motion.div
            className="py-16 space-y-10 px-8 md:px-24 flex flex-col items-center"
            layout
          >
            <motion.div
              className="rounded-full overflow-hidden border-2 border-indigo-500 drop-shadow-lg brightness-110 aspect-square"
              animate={{
                y: 10,
                transition: {
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              initial={{ y: -10 }}
            >
              <img
                src="https://i.pinimg.com/564x/f9/ba/2b/f9ba2b5ac4cf290ea76bbdd7ae6aedd1.jpg"
                alt=""
              />
            </motion.div>
            <motion.h1
              className="font-openSans text-center text-3xl md:text-6xl font-bold mt-6 leading-tight tracking-tighter text-green-500"
              animate={{ opacity: 1, transition: { duration: 0.7 } }}
              initial={{ opacity: 0 }}
            >
              Hello, I&apos;m Om Verma.
            </motion.h1>
            {/* <div className="flex items-center justify-center"> */}
              <svg viewBox="0 0 1320 300">
                <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                  webstoryboy
                </text>
              </svg>
            {/* </div> */}
          </motion.div>
        </div>
        <Footer />
      </div>
    </>
  );
};
