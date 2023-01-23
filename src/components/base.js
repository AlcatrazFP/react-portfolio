import React from 'react'

export const Base=()=>{
  return (
    <>
    <main className="flex  bg-inherit py-40 pl-9 justify-around">
        <div className="main w-2/3 px-10 border-2 border-red rounded-xl bg-slate-600">
            <div className="text-6xl font-serif ">
                The main
            </div>
            <p className="py-3 w-1/2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis eos similique incidunt. Eligendi odio reprehenderit aliquam. Quos dicta reiciendis nesciunt eius modi repudiandae.
            </p>
            <div className="buttons my-4 space-x-5">
                <button className="cursor-pointer hover:text-slate-900 hover:bg-slate-800 rounded-full px-2 border-2 border-gray-500 bg-slate-400">Buy Now</button>
                <button className="cursor-pointer hover:text-slate-900 hover:bg-slate-700 rounded-full px-2 border-2 border-gray-500 bg-slate-400">Contact Us</button>
            </div>
        </div>
        <div className="w-1/2 bg-opacity-75 md:bg-opacity-50">
            <img src="2.png" alt="" />
        </div>
    </main>
    </>
  )
}
