'use client';

import React, { useState, useEffect } from 'react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Function to calculate scroll percentage
  const calculateScrollPercent = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollPercent(scrollPercent);

    setIsVisible(scrollTop > 100); // Show button after 100px scroll
  };

  useEffect(() => {
    window.addEventListener('scroll', calculateScrollPercent);
    return () => window.removeEventListener('scroll', calculateScrollPercent);
  }, []);

  return (
    <div>
      {isVisible && (
       <div
       className="fixed bottom-5 right-5 z-[1001] flex size-14 items-center justify-center rounded-full"
       style={{
         background: `conic-gradient(#ffffff ${scrollPercent}%,  #242424 ${scrollPercent}% 100%)`,
         padding: '5px', 
       }}
     >
       <button
         onClick={scrollToTop}
         className="z-[1001] flex size-full items-center justify-center rounded-full bg-[#121212] font-bold text-white shadow-lg transition-all duration-200 ease-in-out" 
       >
         <span className="text-center text-[22px] text-[#d16527] ">▲</span>
       </button>
     </div>
     
      )}
    </div>
  );
};

export default ScrollToTop;
