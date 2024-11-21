'use client';

import React from 'react';
import { useEffect, useRef } from "react";

import Image from 'next/image';

import { motion, useAnimation } from "framer-motion";

import img from '../../../../public/images/background/Service-Grid-9.png';


const items = [
    { id: 1, title: 'TIMING BELT', imageUrl: img },
    { id: 2, title: 'STEERING',  imageUrl: img },
    { id: 3, title: 'CAR DIAGNOSTICS',  imageUrl: img },
    { id: 4, title: 'TIMING BELT', imageUrl: img },
    { id: 5, title: 'STEERING',  imageUrl: img },
    { id: 6, title: 'CAR DIAGNOSTICS',  imageUrl: img },
    { id: 7, title: 'TIMING BELT', imageUrl: img },
    { id: 8, title: 'STEERING',  imageUrl: img },
    { id: 9, title: 'CAR DIAGNOSTICS',  imageUrl: img },
    
  ];

const AboutServicesCard = () => {

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
    <div className=' font-chakraPetch bg-[#161616] py-10 text-white'>
       <div className="container">
        <motion.div 
         ref={ref}
         initial={{ opacity: 0, scale: 0.5 }}
         animate={controls}
         exit={{ opacity: 0, scale: 0.5 }}
         transition={{ duration: 0.5 }}
        >
          <h1 className='text-[28px] font-[700]  md:text-[38px] lg:text-[42px]'>OUR SERVICES</h1>
        </motion.div>
        <div className="relative mt-[35px] grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
               <div key={item.id} className=" item-body relative bg-[#121212] pb-[30px] pl-[25px]  pr-[30px]  pt-[35px] transition-all delay-0 duration-200 ease-linear before:absolute before:left-0 before:top-0 before:w-full before:origin-center before:scale-x-0 before:border-t-[3px] before:border-[#d16527] before:transition-transform before:duration-200 before:ease-in before:content-[''] hover:before:scale-x-100">
                <div className=" flex items-center gap-4 "> 
                  <Image src={item.imageUrl} alt='' width={50} height={50}/>
                  <h2 className="text-[24px] font-[700] hover:text-[#d16527]">{item.title}</h2>
                </div>
             </div>
        ))}
      </div>
       </div>
    </div>
  );
};

export default AboutServicesCard;