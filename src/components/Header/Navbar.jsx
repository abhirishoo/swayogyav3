import { useState } from 'react';
import CompanyLogo from "../../assets/CompanyLogo.png";

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = (item) => {
    clearTimeout(timeoutId); // Clear any existing timeout
    const id = setTimeout(() => {
      setHoveredItem(item);
    }, 100); // Delay the hover effect by 100 milliseconds
    setTimeoutId(id); // Store the timeout ID
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId); // Clear any existing timeout
    // Set a timeout to reset hoveredItem to null after 300 milliseconds
    const id = setTimeout(() => {
      setHoveredItem(null);
    }, 300);
    setTimeoutId(id); // Store the timeout ID
  };

  return (
    <div className='overflow-hidden fixed top-11 left-0 w-full py-8 font-bold text-[#0288D1] justify-between px-40 flex text-md gap-20 bg-white'>
      <div className='w-10 -mt-5 flex-row gap-4'>
        <img src={CompanyLogo} alt="CompanyLogo" />
      </div>
      <div
          className={`cursor-pointer relative ${hoveredItem === 'home' ? 'text-[#F57C00]' : 'text-[#0288D1]'}`}
          onMouseEnter={() => handleMouseEnter('home')}
          onMouseLeave={handleMouseLeave}
 
        >
          Home
          {hoveredItem === 'home' && (
            <div>
              <div className='bg-[#F57C00] relative rounded-md w-full h-1'></div>
              <div className='fixed mt-3 left-0 w-full bg-[#F57C00] h-60 text-white'></div>
            </div>
          )}
        </div>
      <div
        className={`hover:text-[#C2185B] cursor-pointer relative ${hoveredItem === 'about' ? 'text-[#C2185B]' : 'text-[#0288D1]'}`}
        onMouseEnter={() => handleMouseEnter('about')}
        onMouseLeave={handleMouseLeave}
      >
        About
        {hoveredItem === 'about' && (
          <div>
            <div className='bg-[#C2185B] relative rounded-md w-full h-1'></div>
            <div className='fixed mt-3 left-0 w-full bg-[#C2185B] h-60 text-white'></div>
          </div>
        )}
      </div>
      <div
        className={`hover:text-[#F57C00] cursor-pointer relative ${hoveredItem === 'services' ? 'text-[#F57C00]' : 'text-[#0288D1]'}`}
        onMouseEnter={() => handleMouseEnter('services')}
        onMouseLeave={handleMouseLeave}
      >
        Services
        {hoveredItem === 'services' && (
          <div>
            <div className='bg-[#F57C00] relative rounded-md w-full h-1'></div>
            <div className='fixed mt-3 left-0 w-full bg-[#F57C00] h-60 text-white'></div>
          </div>
        )}
      </div>
      <div
        className={`hover:text-[#512DA8] cursor-pointer relative ${hoveredItem === 'research' ? 'text-[#512DA8]' : 'text-[#0288D1]'}`}
        onMouseEnter={() => handleMouseEnter('research')}
        onMouseLeave={handleMouseLeave}
      >
        Research
        {hoveredItem === 'research' && (
          <div>
            <div className='bg-[#512DA8] relative rounded-md w-full h-1'></div>
            <div className='fixed mt-3 left-0 w-full bg-[#512DA8] h-60 text-white'></div>
          </div>
        )}
      </div>
      <div
        className={`hover:text-[#00897b] cursor-pointer relative ${hoveredItem === 'career' ? 'text-[#00897b]' : 'text-[#0288D1]'}`}
        onMouseEnter={() => handleMouseEnter('career')}
        onMouseLeave={handleMouseLeave}
      >
        Career
        {hoveredItem === 'career' && (
          <div>
            <div className='bg-[#00897b] relative rounded-md w-full h-1'></div>
            <div className='fixed mt-3 left-0 w-full bg-[#00897b] h-60 text-white'></div>
          </div>
        )}
      </div>
      <div className='cursor-pointer'>Contact Us</div>
    </div>
  );
};

export default Navbar;
