import React from 'react'
import dochand from '../../assets/dochand.jpg'
import { MdKeyboardArrowRight } from "react-icons/md";


const AboutUs = () => {
  return (
    <div className='h-screen'>
        <div className=' ml-44 mt-20 font-bold text-[#0288D1] text-[2.6vw] tracking-tight  '>
            About Us
        </div>
        <div className='grid grid-cols-2 w-[75%] ml-44 h-[53.2%] shadow-lg  '>
            <div className=''> <img src={dochand} alt="" /></div>
            <div className='flex flex-col'>
            <div className='py-7 px-5 font-bold text-3xl text-[#263238] tracking-tight'>About Swayogya</div>
            <div className='px-5'>
               At <i>Swayogya</i>, we pioneer PEMF therapy for knee osteoarthritis, blending innovation and compassion to transform healthcare. With a focus on R&D, we bridge science and societal well-being, offering hope and improved quality of life to those with chronic conditions. Join us as we redefine medical technology, making high-quality treatment accessible to all.</div>
            <div className=' flex px-5 ml-[78%] mt-[18%] font-bold text-[#0288D1] text-[1vw] 
            tracking-tight cursor-pointer hover:text-[#00b0ff] hover:translate-x-1 transition duration-300 ease-in-out  '>About Us 
            </div>
            <span className='ml-[93.5%] -mt-[4.1%] text-[#00b0ff] '> <MdKeyboardArrowRight size='1.4vw'  /></span>
            </div>
        </div>
    
   </div>   
  )
}

export default AboutUs