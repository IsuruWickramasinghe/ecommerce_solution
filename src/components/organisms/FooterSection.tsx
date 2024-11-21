import React from 'react';

import CustomImage from '@/components/atoms/Image/CustomImage';

import StyledButton1 from '../molecules/Button/StyledButton1';

const FooterSection = () => {
  return (
    <section className='font-chakraPetch bg-[#161616] text-white  '>
      <div className="container flex flex-col lg:flex-row lg:items-center lg:justify-between lg:pb-[80px] lg:pt-[100px]  ">
         <div className="lg:w-1/4">
            <div className="mb-[25px]">
               <CustomImage
                  src='/images/background/logo (2).png'
                  alt="logo-image"
                  width={185.688}
                  height={108}
                  className=" "
                />
            </div>
            <p className="mb-[25px] text-[16px] font-[400]">Every service is rigorously screened and constantly rated to ensure you get the best service.</p>
            <div className="">
                <p className='text-[14px] md:text-[18px]'>Support center 24/7</p>
                <p className='text-[18px] font-[700] hover:text-[#d16527] md:text-[23px]'>+ 1 123 456-7890</p>
            </div>
         </div>
         <div className="ml-0 mt-[40px] flex  flex-col items-start md:ml-[30px] md:flex-row md:items-center md:justify-around md:space-x-4 lg:mt-0 lg:w-2/4">
             <div className="flex flex-col text-[18px] font-[600]  ">
                <h1 className='mb-[30px]'>ABOUT US</h1>
                  <ul className="custom-marker  ml-[20px] list-disc space-y-4 text-[15px]  font-[600] ">
                        {['ABOUT US', 'OUR TEAM', 'OUR WORKS', 'FAQ'].map((item, index) => (
                      <li key={index} className="group relative mb-[15px]">
                        <span>{item}</span>
                        <span className="absolute bottom-0 left-0 w-0 border-b-2 border-dashed border-[#d16527] transition-all duration-200 ease-linear group-hover:w-full"></span>
                      </li>
                        ))}
                  </ul>
               </div>
               <div className="mt-[40px] text-[18px] font-[600] md:mt-0">
                <h1 className='mb-[30px]'>POPULAR SERVICES</h1>
                  <ul className="custom-marker  ml-[20px] list-disc space-y-4 text-[15px] font-[600]">
                        {['TIRE REPAIR', 'BRAKE REPAIR', 'ENGINE REPAIR', 'STEERING REPAIR'].map((item, index) => (
                      <li key={index} className="group relative ">
                        <span >{item}</span>
                        <span className="absolute bottom-0 left-0 w-0 border-b-2 border-dashed border-[#d16527] transition-all duration-200 ease-linear group-hover:w-full"></span>
                      </li>
                        ))}
                  </ul>
               </div>
               <div>
                  <ul className="custom-marker  ml-[20px] mt-[60px] list-disc space-y-4 text-[15px] font-[600]">
                        {['COOLING SYSTEM', 'WHEEL ALIGNMENT', 'BATTERY STARTING', 'SUPSPENSION REPAIR'].map((item, index) => (
                      <li key={index} className="group relative mb-[15px]">
                        <span>{item}</span>
                        <span className="absolute bottom-0 left-0 w-0 border-b-2 border-dashed border-[#d16527] transition-all duration-200 ease-linear group-hover:w-full"></span>
                      </li>
                        ))}
                  </ul>
               </div>
         </div>
         <div className="mt-[40px] flex w-full flex-col  lg:ml-10 lg:mt-0 lg:w-1/4 lg:items-start">
                 <h1 className="mb-4 text-left text-[18px] font-[600] lg:mb-6">SUBSCRIBE</h1>
             <div className="relative mb-4 w-full">
                <p className="text-[14px] font-[700]">YOUR EMAIL</p>
               <input
                 type="email"
                 placeholder="Enter Your Email Address"
                 className="w-full border-b bg-transparent p-0 text-[14px] font-semibold text-[#ededed] transition-colors duration-200 ease-in-out focus:border-[#d16527] focus:outline-none"
                />
           </div>
             <StyledButton1 label="SUBSCRIBE" className="mt-4 w-full py-[15px] lg:w-auto  lg:px-[80px] " />
    </div>
    
      </div>
      <div className=" mt-[30px] border-t border-[#242424] bg-[#121212] py-[50px]">
         <div className="flex justify-center">
          <p className='text-center text-[16px] font-[400]'> <span className='font-[700] text-[#D16527] hover:text-[#ededed]'>BravisThemes </span>© Promotors Theme All rights reserved Copyrights 2024</p>
         </div>
      </div>
    </section>
  );
};

export default FooterSection;