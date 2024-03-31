import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";

const BlueStrip = () => {
  return (
    <div className='w-full fixed top-0 bg-[#0288D1] text-white px-44 font-regular gap-1 flex justify-end items-end p-2.5'>
        from the American Academy of Orthopaedic Surgeons
        <div className='hover:scale-x-130  text-[#05a7ff] -my-0.5 hover:translate-x-1 hover:text-white transition duration-300 ease-in-out'>
            <MdKeyboardArrowRight size={27}  />
        </div> 
    </div>
  );
};

export default BlueStrip;
