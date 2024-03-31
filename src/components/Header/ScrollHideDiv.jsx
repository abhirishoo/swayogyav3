import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const ScrollHideDiv = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(null); // Initialize as null
  const [isVisible, setIsVisible] = useState(true);

  const springProps = useSpring({
    height: isVisible ? '75px' : '5px',
    config: { tension: 300, friction: 30 }
  });

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos !== null) { 
      const shouldHide = currentScrollPos > prevScrollPos;
      setIsVisible(!shouldHide);
    }
    setPrevScrollPos(currentScrollPos);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <animated.div
      className="fixed top-[130px] left-0 bg-white w-full px-56 overflow-hidden"
      style={{
        height: springProps.height,
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.7)' // Added box-shadow CSS property
      }}
    >
      <div className="font-bold text-[#01579B] text-[41px] tracking-tighter">
        Our knowledge of orthopaedics. Your best health.
      </div>
    </animated.div>
  );
};

export default ScrollHideDiv;
