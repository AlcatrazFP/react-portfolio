import React from "react";
import { Footer } from "./Footer";
import { Headbar } from "./navbar";
import pic from "../im1.jpg";

export const About = () => {
  return (
    <>
    <div className="backitem2">
      <Headbar />
        <div className=" flex-col w-full h-full ">
            <h1 className="text-amber-100 mx-80 font-bold text-4xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 w-44 my-6">
              About Me
            </h1>
            <div className="flex gap-20">
              <div className="flex opacity-90 box-border min-h-96 ">
                <img
                  className="rounded-full mx-16 animate-[wiggle_1s_ease-in-out_infinite] border-spacing-6 border-emerald-600 border-4 border-solid shadow-xl shadow-lime-500"
                  src={pic}
                  width="400"
                  alt=""
                />
              </div>
              <div className=" rounded-br-[100px] rounded-tl-[100px] hover:motion-safe:animate-pulse bg-gradient-to-r from-[#b2082b] to-[#f9679873] object-left text-justify justify-center items-center flex mx-4  font-bold font-serif text-amber-100 px-10 py-10 ">
                <p>
                  I am Om Verma ,currently in 3rd yr of CSE at JIIT Noida.I am
                  an Active programmer who likes to develop new ideas, I also do
                  competitve programming. My handle are at the bottom of the
                  page. Apart from this I like watching Anime and Tv shows of
                  different countries
                </p>
              </div>
            </div>
            <div className="h-80 flex gap-20 object-right pb-10 mt-8 mb-8  font-bold font-serif text-amber-100 ">
              <div className=" w-1/2 px-10">
                <h3 className="text-amber-100 font-sans text-3xl font-bold transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 w-60 my-2">My experience</h3>
                <div className="rounded-br-[100px] rounded-tl-[100px] hover:motion-safe:animate-pulse bg-gradient-to-r from-[#b2082b] to-[#f9679873] p-20">
                <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis itaque expedita minima! Consequatur, eum. Fugit in quas sapiente? Reiciendis nihil earum voluptas, laboriosam dicta sunt alias eum expedita adipisci tenetur.
                </p>
                </div>
              </div>
              <div className="w-1/2 flex items-center justify-center">
                <img className="border-solid border-2 border-fuchsia-500 shadow-xl shadow-red-600" width="400" src="https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="computer" />
              </div>
            </div>
        </div>
      <Footer />
      </div>
    </>
  );
};
