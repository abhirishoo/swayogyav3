import React, { useState, useEffect } from 'react';
import banner5 from '../../assets/banner5.jpg';
import { MdKeyboardArrowRight } from "react-icons/md";

const Background = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  useEffect(() => {
    setShouldAnimate(true); // Trigger animation on component mount
    const timeout = setTimeout(() => {
      setShouldAnimate(false); // Reset animation after a delay
    }, 500); // Adjust delay as needed
    return () => clearTimeout(timeout); // Clean up timeout
  }, []);

  return (
    <div className=''>
      {/* Background Image */}
      <div className='h-screen z-0 mt-[13.6%] bg-cover' style={{ backgroundImage: `url(${banner5})` }}>
      </div>
      {/* Circle */}
      <div 
        className={`absolute cursor-pointer transition left-[54%] top-[69%] duration-500 ease-in-out ${isHovered ? 'scale-150' : ''} ${shouldAnimate ? 'translate-[50%] scale-0' : 'left-[54%] top-[71%] scale-1'}`}
        style={{
     
          background: '#DE222D',
          opacity: '0.75',
          width: '6vw',
          height: '6vw',
          borderRadius: '50%',
        
        }}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      ></div>
      {/* Text */}
      <div className='absolute top-[36%] left-[24%] font-bold text-[#0288D1] text-[2.8vw] leading-none tracking-tighter'>Find information <br /> about knee  </div>
      {/* Information Box */}
      <div className='absolute rounded-sm shadow-md cursor-pointer bg-[#FFFFFF] h-[73vh] w-[21vw] text-center top-[52%] left-[24%]'>
        <div className='border-b shadow-sm p-[0.5vw]  font-bold text-[#00B0FF] text-[1.6vw] tracking-tighter'> About Your Knee </div>
        <div className='border-b shadow-sm ml-2 p-[1.4vw] text-start text-[1vw]'> <span className='text-[#c2185b] '> Diseases and CONDITIONS </span> <br /> <span className='font-bold text-[1vw] mt-[0.1vw]'>Rotator Cuff Tears</span> </div>
        <div className='border-b shadow-sm ml-2 p-[1.4vw] text-start text-[1vw]'> <span className='text-[#c2185b] '> Diseases and CONDITIONS </span> <br /> <span className='font-bold text-[1vw] mt-[0.1vw]'>Bicep Tendon tear at <br /> shoulder</span> </div>
        <div className='border-b shadow-sm  ml-2 p-[1.4vw] text-start text-[1vw]'> <span className='text-[#F57C00] '> TREATMENT </span> <br /> <span className='font-bold text-[1vw] mt-[0.1vw]'>Shoulder Arthroscopy</span> </div>
        <div className='border-b shadow-sm p-[1.4vw] text-start ml-2  text-[1vw]'> <span className='text-[#512DA8] '> RECOVERY </span> <br /> <span className='font-bold text-[1vw] mt-[0.1vw]'>Rotator Cuff Shoulder Repairing Program</span> </div>
        <div className='shadow-sm p-[1vw] flex gap-[0.2vw] justify-center items-center font-bold text-[#0288D1] text-[1.2vw]'> See more <span className='text-[#00B0FF]'> knee </span> topics   <span className='hover:scale-105  text-[#05a7ff] hover:translate-x-[0.3vw] -mx-1 transition duration-300 ease-in-out'>
            <MdKeyboardArrowRight size='1.5vw' />
        </span>  
      </div>
      </div>
    </div>
  );
};

export default Background;
