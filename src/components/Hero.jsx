import React from 'react'
import banner from '../assets/banner.png'
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";
const Hero = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center'>
      <p data-aos="flip-down" data-aos-easing="linear"
     data-aos-duration="1500">Hello I'm</p>
      <p data-aos="flip-up" data-aos-easing="linear"
     data-aos-duration="1500" className="text-2xl font-bold">Puspalal Chaudhary</p>
      <p data-aos="flip-right" data-aos-easing="linear"
     data-aos-duration="1500" className='text-gray-600'>Frontend Developer</p>
      <div className="buton flex gap-5 mt-10">
        <button data-aos="zoom-out-right" className=' bg-gray-700 px-4 py-2 text-blue-200 rounded hover:text-white hover:bg-blue-600'>Download CV</button>
        <button data-aos="zoom-out-left" className='px-4 py-2 text-white bg-blue-600 rounded hover:text-blue-200 hover:bg-gray-700'>Lets Talk</button>
      </div>
      <div className='flex justify-center items-center w-auto mx-auto gap-50 md:ml-12'>
        <div data-aos="zoom-out-right" className="icon hidden md:flex flex-col gap-2 justify-center items-center text-2xl">
              <a href="https://www.facebook.com/puspalal.chaudhary.167367" target='_blank'><FaFacebook className='hover:text-blue-700' /></a>
             <a href="https://github.com/puspalal12" target='_blank'><FaGithub className='hover:text-blue-700' /></a>
             <a href="https://www.linkedin.com/in/puspalal/" target='_blank'><FaLinkedin className='hover:text-blue-700'/></a>
             <a href="http://wa.me/+9779806432104" target="_blank" rel="noopener noreferrer"><FaWhatsapp className='hover:text-blue-700' /></a>
        </div>
        <img data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" src={banner} alt="banner" className='max-h-[50%] w-[50%] object-contain mt-10 rounded-t-[10%] md:w-[20%]'/>
        <div className='hidden md:flex justify-center items-center flex-col gap-8 text-xs'>
               
               <p data-aos="zoom-out-left" className='rotate-90'>Scrool Down </p>
               <FaArrowDownLong data-aos="fade-up" />

        </div>
        </div>
        
    </div>
  )
}

export default Hero