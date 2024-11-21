'use client';
import React from 'react';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";

import CustomImage from '../atoms/Image/CustomImage';
import StyledButton1 from '../molecules/Button/StyledButton1';


const HomePageHeroCarousel = () => {
  const { scrollY } = useScroll();
  const x = useSpring(useTransform(scrollY, [0, 2000], [0, -300]), { stiffness: 200, damping: 20 });


  return (
    <Carousel className='bg-[#161616] text-white '>
      <CarouselContent className=''>
        <CarouselItem>
          <div className="container">
            <div className="relative flex min-h-svh select-none flex-col-reverse items-center lg:flex-row">

              <motion.span
                className='background-border-text font-chakraPetch promotors-animation absolute bottom-[240px] left-0 hidden text-[100px] md:block lg:bottom-auto lg:left-auto lg:right-0 lg:top-10 lg:text-[170px]'
                style={{ x }}
              >
                PROMOTORS
              </motion.span>

              <div className="z-[1] w-full lg:w-[570px]">
                <h1 className='font-chakraPetch mb-5 text-[35px] font-bold leading-[43px] md:text-[50px] md:leading-[61px] lg:text-[66px] lg:leading-[73px]'>MAINTENANCE & REPAIR SERVICE</h1>
                <p className='mb-5 text-[16px] font-[400] leading-[23px] md:text-[18px] md:leading-[26px]'>Promotors is one of the leading units specializing in providing car care equipment and tools worldwide. Need to buy car care tools, accessories, this will be a useful choice.</p>
                <StyledButton1 label='GET OFFERS' />
              </div>
              <div className="lg:min-h-auto min-h-[470px] flex-1 translate-y-[300px] md:min-h-[610px]">
                <div className="flex w-full items-center justify-center">
                  <div className="slide-in-bottom-animation group relative">
                    <CustomImage src='/images/car parts/car-engine.png' alt='car-engine' width={693.86} height={441.29} className='rotate-animation absolute left-0 top-14 h-auto w-full md:h-[320.99px] md:w-[504.7px] lg:h-[441.29px] lg:w-[693.86px]' />
                    <CustomImage src='/images/car parts/car-left-light.png' alt='left-light' width={693.86} height={441.29} className='absolute left-[-80px] top-0 h-auto w-full opacity-0 duration-500 ease-in-out group-hover:opacity-100 md:h-[320.99px] md:w-[504.7px] lg:h-[441.29px] lg:w-[693.86px]' />
                    <CustomImage src='/images/car parts/car-right-light.png' alt='right-light' width={693.86} height={441.29} className='absolute right-[-80px] top-0 h-auto w-full opacity-0 duration-500 ease-in-out group-hover:opacity-100 md:h-[320.99px] md:w-[504.7px] lg:h-[441.29px] lg:w-[693.86px]' />
                    <CustomImage src='/images/car parts/car-body.png' alt='car-image' width={693.86} height={441.29} className='h-auto w-full md:h-[320.99px] md:w-[504.7px] lg:h-[441.29px] lg:w-[693.86px] ' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="container">
            <div className="relative flex min-h-svh select-none flex-col-reverse items-center lg:flex-row">

              <motion.span
                className='background-border-text font-chakraPetch promotors-animation absolute bottom-[240px] left-0 hidden text-[100px] md:block lg:bottom-auto lg:left-auto lg:right-0 lg:top-10 lg:text-[170px]'
                style={{ x }}
              >
                PROMOTORS
              </motion.span>

              <div className="z-[1] w-full lg:w-[570px]">
                <h1 className='font-chakraPetch mb-5 text-[35px] font-bold leading-[43px] md:text-[50px] md:leading-[61px] lg:text-[66px] lg:leading-[73px]'>MAINTENANCE & REPAIR SERVICE</h1>
                <p className='mb-5 text-[16px] font-[400] leading-[23px] md:text-[18px] md:leading-[26px]'>Promotors is one of the leading units specializing in providing car care equipment and tools worldwide. Need to buy car care tools, accessories, this will be a useful choice.</p>
                <StyledButton1 label='GET OFFERS' />
              </div>
              <div className="lg:min-h-auto z-[1001] min-h-[470px] flex-1 translate-y-[300px] md:min-h-[610px]">
                <div className="flex w-full items-center justify-center">
                  <div className="slide-in-bottom-animation group relative">
                    <CustomImage src='/images/car parts/car-engine.png' alt='car-engine' width={693.86} height={441.29} className='rotate-animation absolute left-0 top-14 h-auto w-full md:h-[320.99px] md:w-[504.7px] lg:h-[441.29px] lg:w-[693.86px]' />
                    <CustomImage src='/images/car parts/car-left-light.png' alt='left-light' width={693.86} height={441.29} className='absolute left-[-80px] top-0 h-auto w-full opacity-0 duration-500 ease-in-out group-hover:opacity-100 md:h-[320.99px] md:w-[504.7px] lg:h-[441.29px] lg:w-[693.86px]' />
                    <CustomImage src='/images/car parts/car-right-light.png' alt='right-light' width={693.86} height={441.29} className='absolute right-[-80px] top-0 h-auto w-full opacity-0 duration-500 ease-in-out group-hover:opacity-100 md:h-[320.99px] md:w-[504.7px] lg:h-[441.29px] lg:w-[693.86px]' />
                    <CustomImage src='/images/car parts/car-body.png' alt='car-image' width={693.86} height={441.29} className='h-auto w-full md:h-[320.99px] md:w-[504.7px] lg:h-[441.29px] lg:w-[693.86px] ' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default HomePageHeroCarousel;