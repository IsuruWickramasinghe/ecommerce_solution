'use client';

import React from 'react';
import { useEffect, useRef } from "react";

import Slider from 'react-slick';
import { motion, useAnimation } from "framer-motion";

import CustomImage from '../../atoms/Image/CustomImage';


const items = [
  { id: 1,title: '$50 OFF PREMIUM BRAKE SERVICE',  imageUrl: '/images/background/portfolio-11-270x445.jpg' },
  { id: 2, title: 'FREE CHECK ENGINE DIAGNOSTIC SCAN CAR', imageUrl: '/images/background/portfolio-10-270x445.jpg' },
  { id: 3,title: 'INTERNAL TRANSMISSION REPAIR: $100 OFF',   imageUrl: '/images/background/portfolio-9.jpg' },
  { id: 4, title: 'ANNUAL TECHNICAL INSPECTION OF CARS', imageUrl: '/images/background/portfolio-8.jpg' },
  { id: 5, title: '$50 OFF PREMIUM BRAKE SERVICE', imageUrl: '/images/background/portfolio-11-270x445.jpg' },
  { id: 6,title: 'Project Title 1',  imageUrl: '/images/background/portfolio-11-270x445.jpg' },
  { id: 7, title: 'Project Title 1',  imageUrl: '/images/background/portfolio-11-270x445.jpg' },
  { id: 8, title: 'Project Title 1', imageUrl: '/images/background/portfolio-11-270x445.jpg' },

  
];

const AboutWorkSection = () => {

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

  const settings = {
    infinite: true,
    speed: 3000,          // Adjust speed for continuous effect
    slidesToShow: 4,      // Default number of slides
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 0,     // No delay between scrolls
    cssEase: 'linear',    // Linear easing for race effect
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // For screens <= 1024px
        settings: {
          slidesToShow: 3,  // Show 3 slides at this width
        }
      },
      {
        breakpoint: 768, // For screens <= 768px
        settings: {
          slidesToShow: 2,  // Show 2 slides at this width
        }
      },
      {
        breakpoint: 480, // For screens <= 480px
        settings: {
          slidesToShow: 1,  // Show 1 slide at this width
        }
      }
    ]
  };
  return (
   <section className='font-chakraPetch bg-[#161616] py-10 text-white'>
    <div className="container relative">
       < motion.div 
           ref={ref}
           initial={{ opacity: 0, scale: 0.5 }}
           animate={controls}
           exit={{ opacity: 0, scale: 0.5 }}
           transition={{ duration: 0.5 }}>
          <h1 className='text-[28px] font-[700]  md:text-[38px] lg:text-[42px]'>OUR RECENT WORKS</h1>
        </motion.div >
        <Slider {...settings} className="item-body relative mt-[35px] overflow-hidden  border-t-2 border-[#242424] bg-cover bg-no-repeat  pt-[25px] before:absolute before:left-0 before:top-0 before:w-full before:origin-center before:scale-x-0 before:border-t-[3px] before:border-[#d16527] before:transition-transform before:duration-200 before:ease-in before:content-[''] hover:before:scale-x-100 ">
          {items.map((item) => (
            <div key={item.id} className=" px-4">
              <div className="group relative flex items-center gap-6 overflow-hidden bg-cover bg-no-repeat ">
                <CustomImage
                  src={item.imageUrl}
                  alt="car-engine"
                  width={693.86}
                  height={441.29}
                  className="transition duration-300 ease-in-out hover:opacity-55 group-hover:scale-110 "
                />
                  <div className="absolute inset-0 flex   bg-black/50  opacity-0 transition-opacity duration-300 before:absolute before:left-0 before:top-0 before:w-full before:origin-top-left before:scale-x-0 before:border-t-[5px] before:border-[#d16527] before:transition-transform before:duration-200 before:ease-in before:content-[''] group-hover:opacity-100 group-hover:before:scale-x-100 ">
                <span className="p-5 text-center text-[18px] font-[700] text-white hover:text-[#d16527]">{item.title}</span>
              </div>
              </div>
              
            </div>
          ))}
        </Slider>
    </div>
   </section>
  );
};

export default AboutWorkSection;