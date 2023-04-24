import React from 'react'
// import {logo} from '../assets';
import {navLinks} from '../constants'
const Navbar = () => {
  return (
   <nav className="w-full flex py-6 justify-between items-center navbar over:bg-gray-100 dark:text-gray-400 dark:hover:bg-black dark:hover:text-white">
      
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px]
                        ${index === navLinks.length - 1 ? 'mr-5' : 'mr-10'} text-white`}
          >
            <a href={`#${nav.id}`}> 
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
   </nav>
  
  )
}

export default Navbar