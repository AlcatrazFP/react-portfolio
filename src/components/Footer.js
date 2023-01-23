import React from 'react'

export const Footer=()=> {
  return (
    <>
    
<footer className="p-4 bg-gradient-to-r  from-[#8d8f94] to-gray-800 font-bold font-xl shadow-xl shadow-slate-600 md:flex md:items-center md:justify-between blur-backdrop-filter ">
    <span className="text-sm text-white sm:text-center ">© 2023. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-white sm:mt-0 gap-5 mx-10">
        <li>
        <a href="www.google.com"><img width="30" src="https://img.icons8.com/ios-filled/512/github.png" alt="github" /></a>
        </li>
        <li>
        <a href='https://leetcode.com/AlcatrazFP/'><img width="30" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/512/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo.png" alt="github" /></a>
        </li>
        <li>
        <a href='https://codeforces.com/profile/ALCATRAZ_FP'><img width="30" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/512/external-codeforces-programming-competitions-and-contests-programming-community-logo-shadow-tal-revivo.png" alt="github" /></a>
        </li>
    </ul>
</footer>

    </>
  )
}
