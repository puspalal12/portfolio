import React from 'react'
import { IoMdHome, IoMdContact } from "react-icons/io";
import { GoProjectRoadmap } from "react-icons/go";
import { SiHyperskill } from "react-icons/si";
import { MdCastForEducation } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => 
    isActive ? 'text-blue-500 transition-colors' : 'text-white hover:text-blue-300 transition-colors';

  return (
    <>
      <div className='fixed bottom-1 inset-x-0 flex justify-center z-50'>
        <div className='bg-gray-900 bg-opacity-15 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-8 border border-white/10 shadow-2xl'>
          
          <NavLink to="/" className={navLinkStyles}>
            <IoMdHome size={20} />
          </NavLink>

          <NavLink to="/projects" className={navLinkStyles}>
            <GoProjectRoadmap size={20} />
          </NavLink>

          <NavLink to="/skills" className={navLinkStyles}>
            <SiHyperskill size={20} />
          </NavLink>

          <NavLink to="/education" className={navLinkStyles}>
            <MdCastForEducation size={20} />
          </NavLink>

          <NavLink to="/contact" className={navLinkStyles}>
            <IoMdContact size={20} />
          </NavLink>
          
        </div>
      </div>
    </>
  )
}

export default Navbar