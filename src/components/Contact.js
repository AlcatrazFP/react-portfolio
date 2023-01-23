import React from 'react'
import { Footer } from './Footer'
import { Headbar } from './navbar'

export const Contact = ()=> {
  return (
    <>
    <div className=' bg-gradient-to-r  from-[#bcc0c7] to-gray-800 min-h-screen backitem1'>
    <Headbar />
    <div className='h-screen main'>
      <div className="h-[80vh] my-[10vh] mx-[30vh] bg-gradient-to-b from-[#b1b4bc] to-transparent">
        <div className='text-8xl font-bold  text-[#f7ff06b9] flex justify-center items-center'>
          <h1 className='m-10'>Contact</h1>
        </div>
        <div className='second h-40 flex justify-center items-center text-3xl font-semibold font-serif'>
          <h3>Feel free to contact</h3>
        </div>
        <div className='iconbox flex items-center justify-center gap-10 my-10'>
          <div className='icon1 scale-70 hover:scale-90 border-4 border-amber-300 border-solid ease-in-out duration-300 p-4 rounded-full bg-amber-700 hover:bg-slate-500'> <img src="https://cdn.iconscout.com/icon/free/png-256/instagram-216-721958.png?w=128&f=avif" width="50" alt="instagram" /></div>
          <div className='icon2 scale-70 hover:scale-90 border-4 border-amber-300 border-solid ease-in-out duration-300 p-4 rounded-full bg-amber-700 hover:bg-slate-500'> <img src="https://cdn.iconscout.com/icon/free/png-256/logo-122-116261.png?w=128&f=avif" width="50" alt="gmail" /></div>
          <div className='icon3 scale-70 hover:scale-90 border-4 border-amber-300 border-solid ease-in-out duration-300 p-4 rounded-full bg-amber-700 hover:bg-slate-500'> <img src="https://cdn.iconscout.com/icon/free/png-256/twitter-241-721979.png?w=128&f=avif" width="50" alt="twitter" /></div>
        </div>
        </div>
    </div>
    <Footer />
    </div>
    </>
  )
}
