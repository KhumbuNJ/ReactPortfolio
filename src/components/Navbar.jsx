import React from 'react';
import { useState } from 'react';
import { close, menu } from '../assets';
import {navLinks} from '../constants';
const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
   <nav className="w-full flex py-6 justify-between items-center navbar over:bg-gray-100 dark:text-gray-400 dark:hover:bg-black dark:hover:text-white ">
      <h2 className={`text-green-700 text-[35px] `}>My Portfolio</h2>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[25px]
                        ${index === navLinks.length - 1 ? 'mr-5' : 'mr-10'} text-white`}
          >
            <a href={`#${nav.id}`}> 
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-start items-start flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={` text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-1"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

   </nav>
  
  )
}

export default Navbar