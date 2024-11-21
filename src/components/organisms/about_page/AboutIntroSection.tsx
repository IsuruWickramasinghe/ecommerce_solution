'use client';

import React from 'react';
import { useEffect, useRef } from "react";

import { motion, useAnimation } from "framer-motion";


const AboutIntroSection = () => {

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
    <section className='font-chakraPetch bg-[#161616] py-10 text-white'>
        <div className="container flex flex-col py-[40px] lg:flex-row">
          <div className="mr-[25px] font-[700] lg:w-1/3">
            < motion.div 
           ref={ref}
           initial={{ opacity: 0, scale: 0.5 }}
           animate={controls}
           exit={{ opacity: 0, scale: 0.5 }}
           transition={{ duration: 0.5 }}><h1  className='text-[28px] md:text-[38px]  lg:text-[42px] '>HOW TO SERVICE YOUR CAR</h1></motion.div>
            <p className='mt-[20px] text-[18px] font-[400]'>Rather than letting your services go by, take these steps to keep your car in good shape until you can afford a full service.</p>
          </div>
          <div className="relative  mt-4 grid grid-cols-1 gap-9 font-[700]  sm:grid-cols-1 md:grid-cols-2 lg:mt-0 lg:w-2/3">
           <div className="item-body relative  border-t-2 border-[#242424] pt-[32px] before:absolute before:left-0 before:top-0 before:w-full before:origin-center before:scale-x-0 before:border-t-[3px] before:border-[#d16527] before:transition-transform before:duration-200 before:ease-in before:content-[''] hover:before:scale-x-100">
            <div className="flex items-center gap-5 text-[18px] md:text-[23px]">
                <p className='text-[#d16527]'>01</p>
                <h1>MAKE AN APPOINTMENT</h1>
            </div> 
            <p className='mt-[15px] text-[16px]  font-[400]'>Promotors has made it easy to schedule an appointment online at a location near you in a few simple steps, easy schedule for customers.</p>
           </div>
           <div className="item-body relative  border-t-2 border-[#242424] pt-[32px] before:absolute before:left-0 before:top-0 before:w-full before:origin-center before:scale-x-0 before:border-t-[3px] before:border-[#d16527] before:transition-transform before:duration-200 before:ease-in before:content-[''] hover:before:scale-x-100">
           <div className="flex items-center gap-5 text-[18px] md:text-[23px]">
                <p className='text-[#d16527]'>02</p>
                <h1>MAKE AN APPOINTMENT</h1>
            </div>
            <p className='mt-[15px] text-[16px]  font-[400]'>We specialize in car services and have more than 20 years of experience in cars. We are car guys from day one. We love and respect cars.</p>
           </div>
           <div className="item-body relative  border-t-2 border-[#242424] pt-[32px] before:absolute before:left-0 before:top-0 before:w-full before:origin-center before:scale-x-0 before:border-t-[3px] before:border-[#d16527] before:transition-transform before:duration-200 before:ease-in before:content-[''] hover:before:scale-x-100">
           <div className="flex items-center gap-5 text-[18px] md:text-[23px]">
                <p className='text-[#d16527]'>03</p>
                <h1>MAKE AN APPOINTMENT</h1>
            </div>
            <p className='mt-[15px] text-[16px]  font-[400]'>Has your request been confirmed?
            Reduce no-shows, save time, and focus on serving clients is our top criterion.</p>
           </div>
           <div className="item-body relative  border-t-2 border-[#242424] pt-[32px] before:absolute before:left-0 before:top-0 before:w-full before:origin-center before:scale-x-0 before:border-t-[3px] before:border-[#d16527] before:transition-transform before:duration-200 before:ease-in before:content-[''] hover:before:scale-x-100">
           <div className="flex items-center gap-5 text-[18px] md:text-[23px] ">
                <p className='text-[#d16527]'>04</p>
                <h1>MAKE AN APPOINTMENT</h1>
            </div>
            <p className='mt-[15px] text-[16px] font-[400]'>It is a vehicle inspection that keeps your car in a reliable, safe and fully-functioning condition based on guidelines set out by the vehicle.</p>
           </div>

          </div>
        </div>
       
    </section>
  );
};

export default AboutIntroSection;