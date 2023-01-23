import React from 'react'

export const Rough =()=>{
  return (
    <>
<body className="h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500">
    <nav className="px-4 py-4 bg-purple-900 text-white">
        <ul className="flex">
            <li className="mx-2 cursor-pointer">Home</li>
            <li className="mx-2 cursor-pointer">About</li>
            <li className="mx-2 cursor-pointer">Contact</li>
        </ul>
    </nav>
    <div className='relative flex justify-center min-h-screen items-center'>
      <div aria-hidden="true" className='absolute inset-y-16 inset-x-0 w-16 rounded-full rotate-45 bg-gradient-to-b from-pink-500 to-purple-600 blur-3xl mx-auto scale-y-150 opacity-75'>
        <h1 className='relative text-4xl font-bold text-white'>
            home
        </h1>
      </div>
    </div>
    <sds>
    <div className="border-b border-gray-300 sticky top-0 opacity-30">
     <nav className="text-white flex justify-between antialiased bg-gradient-to-r from-cyan-400 to-blue-600">
        <span className="text-xl font-bold flex items-center mx-3 ">logo</span>
        <ul className="px-20 py-4 flex space-x-7 justify-end">
            <li className="cursor-pointer hover:text-slate-900 hover:bg-slate-400 px-2 rounded-full">Home</li>
            <li className="cursor-pointer hover:text-slate-900 hover:bg-slate-400 rounded-full px-2">About</li>
            <li className="cursor-pointer hover:text-slate-900 hover:bg-slate-400 rounded-full px-2">Contact</li>
        </ul>
    </nav>
     </div>
    </sds>
    <sds2>
    <div className='mx-3'>
    <svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
  </div> 
  <div className='m-auto'>
    <span className="footer-title">Other Handles</span> 
    <div className="grid grid-flow-col gap-4">
        <a href="www.google.com"><img width="30" src="https://img.icons8.com/ios-filled/512/github.png" alt="github" /></a>
      <a href='https://leetcode.com/AlcatrazFP/'><img width="30" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/512/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo.png" alt="github" /></a> 
      <a href='https://codeforces.com/profile/ALCATRAZ_FP'><img width="30" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/512/external-codeforces-programming-competitions-and-contests-programming-community-logo-shadow-tal-revivo.png" alt="github" /></a>
    </div>
  </div>
    </sds2>
</body>
    </>
  )
}
