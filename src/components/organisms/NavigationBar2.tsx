'use client';

import { useState, useEffect } from 'react';

import CustomImage from '../atoms/Image/CustomImage';
import Text from '../atoms/Text/Text';

import { FaPlus } from "react-icons/fa";
import NavPages from '../molecules/NavMiddleItems/NavPages';




const NavigationBar2 = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const menuItems = [
        { label: 'Home', dropdown: [] },
        { label: 'Pages', dropdown: ['About', 'Team', 'Prices', 'Offers', 'Our Works'] },
        { label: 'Services', dropdown: ['Service 1', 'Service 2', 'Service 3'] },
        { label: 'Shop', dropdown: ['Product 1', 'Product 2', 'Product 3'] },
        { label: 'Blogs', dropdown: ['Blog 1', 'Blog 2', 'Blog 3'] },
    ];
   
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true); // Navbar will show once scrolled past 50px
            } else {
                setIsScrolled(false); // Navbar hides when scroll is at the top
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


  return (
    <nav 
    className={`fixed top-0 left-0 w-full z-50 font-chakraPetch transition-all duration-500 ease-in-out transform text-white ${isScrolled ? 'bg-[#1d1d1d] py-4 shadow-lg translate-y-0 ' : 'bg-[#161616] py-7 translate-y-[-10px]'}`}
    style={{ transitionProperty: 'background-color, padding, box-shadow, transform' }}
    >
      <div className="flex items-center justify-between container">
        <div>
            <CustomImage
                src='/images/background/logo (2).png'
                alt="logo-image"
                width={185.688}
                height={108}
                className=""
            />
        </div>
    <div className="uppercase flex items-center gap-10 text-[15px] font-[700]">
           <NavPages/>
        </div>

        <div className="btn btn-style1 border w-[220px] flex items-center justify-center flex-col h-[45px] btn-form">
            <Text className='text-white font-[700]'>087 7766 6677</Text>
        </div>
   
      </div>
    </nav>
  );
};

export default NavigationBar2;
