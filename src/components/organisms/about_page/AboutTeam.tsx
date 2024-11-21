'use client';

import React from 'react';
import { useEffect, useRef } from "react";

import { motion, useAnimation } from "framer-motion";

import CustomImage from '@/components/atoms/Image/CustomImage';

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const items = [
    { id: 1,name: 'FERNANDO ALONSO',  imageUrl: '/images/team/team01-1.jpg',part:'Consulting Engineer' },
    { id: 2, name: 'BURTON LYONS', imageUrl: '/images/team/team02.jpg' ,part:'Design Engineer'},
    { id: 3,name: 'MARIO ANDRETTI',   imageUrl: '/images/team/team03.jpg',part:'Assembly Workers' },
    { id: 4, name: 'KATHERINE LEGGE', imageUrl: '/images/team/team04.jpg' ,part:'Operating Engineers'},
    { id: 5, name: 'JIM CLARK', imageUrl: '/images/team/team05.jpg',part:'Technical Staff' },
    { id: 6,name: 'LEWIS HAMILTON',  imageUrl: '/images/team/team06.jpg',part:'Service Advisor'},
    { id: 7, name: 'TOM KRISTENSEN',  imageUrl: '/images/team/team07.jpg',part:'Test Specialist' },
    { id: 8, name: 'NIKI LAUDA', imageUrl: '/images/team/team08.jpg',part:'Transport Management' },
  
    
  ];

const AboutTeam = () => {

  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        controls.start({ opacity: 1, scale: 1 });
      } else {
        controls.start({ opacity: 0, scale: 0.5 });
      }
    });

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [controls]);
  return (
    <section className='font-chakraPetch bg-[#161616] py-10 text-white lg:pb-[30px]'>
        <div className="container relative ">
          <motion.div 
           ref={ref}
           initial={{ opacity: 0, scale: 0.5 }}
           animate={controls}
           exit={{ opacity: 0, scale: 0.5 }}
           transition={{ duration: 0.5 }}
           className="mb-[20px]">
            <h1 className='text-[28px] font-[700]  md:text-[38px] lg:text-[42px]'>EXPERT TEAM MEMBERS</h1>
          </motion.div >
          <div className=" item-body relative grid  grid-cols-1 gap-9 border-t-2 border-[#242424] pt-[25px] before:absolute before:left-0 before:top-0 before:w-full before:origin-center before:scale-x-0 before:border-t-[3px] before:border-[#d16527] before:transition-transform before:duration-200 before:ease-in before:content-[''] hover:before:scale-x-100 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.id} className="  relative ">
              <div className="   group relative flex h-[320px] items-center gap-6 overflow-hidden bg-cover bg-no-repeat  ">
                <CustomImage
                  src={item.imageUrl}
                  alt="car-engine"
                  width={570}
                  height={380}
                  className="h-[320px] w-[570px] bg-cover  grayscale transition duration-300 ease-in-out hover:opacity-55  group-hover:scale-110"
                />
                  <div className=" absolute inset-0  z-10 scale-y-0  bg-black/70  opacity-0 transition-transform duration-200 ease-linear before:absolute before:left-0 before:top-0 before:w-full before:origin-top-left before:scale-x-0 before:border-t-[5px] before:border-[#d16527] before:transition-transform before:duration-200 before:ease-in before:content-[''] group-hover:scale-y-100  group-hover:opacity-100 group-hover:before:scale-x-100 ">
                 <div className=" flex  flex-col justify-between">
                    <div className="p-5 text-left text-[18px] font-[700] text-white">
                        <p className='text-[18px] font-[700] hover:text-[#d16527]'> {item.name}</p>
                        <p  className='text-[14px] font-[400]'>{item.part}</p>
                    </div>
                   <div className="ml-[25px] mt-[150px] flex items-center gap-3">
                     <div className="border border-[#d16527] bg-[#d16527] p-[8px] transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-transparent">
                       <FaFacebookF />
                     </div>
                     <div className="border border-[#d16527] bg-[#d16527] p-[8px] transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-transparent">
                       <FaInstagram  />
                     </div>
                     <div className="border border-[#d16527] bg-[#d16527] p-[8px] transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-transparent">
                       <FaTwitter />
                     </div>
                     <div className="border border-[#d16527] bg-[#d16527] p-[8px] transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-transparent">
                       <FaWhatsapp />
                     </div>
                  </div>
                 </div>
              </div>
              </div>
              
            </div>
           ))}
 
          </div>
        </div>
    </section>
  );
};

export default AboutTeam;