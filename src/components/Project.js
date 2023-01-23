import React from "react";
import { Footer } from "./Footer";
import { Headbar } from "./navbar";

export const Project = () => {
  return (
    <>
      <div className=" bg-gradient-to-r  from-[#bcc0c7] to-gray-800 min-h-screen backitem3">
        <Headbar />
        <div className=" flex-col w-full h-full ">
          <h1 className="text-[#4677c7] p-2 mx-auto underline font-bold text-5xl flip w-44 my-6 bg-gradient-to-r from-[#261f1f] to-transparent">
           Projects
          </h1>
          <div className="flex gap-20">
            <div className="w-1/2 flex items-center px-2 mx-4 justify-center">
              <a href="https://github.com/AlcatrazFP/Instaclone">
              <img
                className="border-solid border-8 border-[#322424d3] shadow-xl shadow-red-600"
                width="400"
                src="https://thumbs.dreamstime.com/b/ny-usa-december-homepage-instagram-website-display-pc-url-com-168034804.jpg"
                alt="instaclone"
              />
              </a>
            </div>
            <div className="  bg-gradient-to-r from-[#b2082b] to-transparent object-left text-justify justify-center items-center flex mx-4  font-bold font-serif text-amber-100 px-10 py-10 ">
              <p>
              <h2 className="text-2xl mb-2 underline text-black font-semibold">InstaClone</h2>
                About Instaclone which is built on MERN Stack where use can
                create its account upload his/her pic and can follow people or
                make people follow them. There are also many more functionality
                which are basically the copy of instagram
              </p>
            </div>
          </div>
          <div className="h-80 flex gap-20 object-right pb-10 mt-8 mb-8  font-bold font-serif text-amber-100 ">
            <div className=" w-1/2 px-10">
              <div className="bg-gradient-to-r mt-4 ml-8 from-[#b2082b] to-transparent p-20">
                <p>
                  <h2 className="text-2xl mb-2 underline text-black font-semibold">Weather-APP</h2>
                  This application gives us data about weather for different
                  region which runs with the help of weather api's. This project
                  is mainly based on Nodejs and Express.
                </p>
              </div>
            </div>
            <div className="w-1/2 flex items-center justify-center">
              <a href="https://github.com/AlcatrazFP/node3-weather">
              <img
                className="border-8 border-[#322424d3] shadow-xl shadow-red-600"
                width="400"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGyTKWrKdYBkDWLUc26dFtf96UounQmbi4rg&usqp=CAU"
                alt="computer"
              />
              </a>
            </div>
          </div>
        </div>
      <Footer />
      </div>
    </>
  );
};
