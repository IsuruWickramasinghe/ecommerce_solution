import React from 'react';

import CustomImage from '@/components/atoms/Image/CustomImage';
import Text from '@/components/atoms/Text/Text';

import StyledButton1 from '../../molecules/Button/StyledButton1';

const GetServicesSection = () => {
  return (
    <section className='font-chakraPetch bg-[#161616] py-10 text-white'>
      <div className="flex flex-col lg:flex-row">
        <div className="relative  overflow-hidden lg:w-1/2 ">
          <CustomImage src='/images/home-bg/service-bg-01.jpg' alt='' width={1170} height={ 610} className=' bg-cover  bg-center opacity-80 transition-transform  duration-300 ease-in-out hover:scale-110 lg:h-[610px]'/>
        </div>
        <div className="flex flex-col items-center justify-center lg:w-1/2 lg:flex-row lg:pl-[80px]">

          <div className=" relative mt-[100px] p-4 lg:mt-0  lg:p-0">
            <Text className=' title-holder background-border-text-2 font-chakraPetch absolute top-[-7px] z-0 cursor-pointer   text-[24px] font-[700]  uppercase opacity-25 md:text-[40px] lg:top-[-20px] lg:text-[66px] '>services</Text>
          <Text className='z-10 text-[28px] font-[700] uppercase md:text-[38px] lg:text-[42px] '>CAR EXTERIOR CLEANING: BASIC DETAILING</Text>
          <ul className='custom-marker  items-left mt-[20px] flex list-disc flex-col space-y-2 pl-[25px] text-[16px] uppercase md:text-[18px] lg:flex-row lg:items-center lg:gap-24'>
            <div className=" lg:space-y-4">
              <li>SAME DAY SERVICE</li>
              <li>ONLINE APPOINTMENT</li>
            </div>
            <div className=" lg:space-y-4">
              <li>CONVENIENT LOCATION</li>
              <li>COMPLIMENTARY SHUTTLE</li>
            </div>
          </ul>
          <div className=" mt-[15px] pb-[20px] pl-[20px] lg:mt-[30px] lg:pb-0">
             <StyledButton1 label='get service' className='text-[18px] font-[700] uppercase'/>
          </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="flex items-center justify-center pl-[20px] pr-[80px] lg:w-1/2">
        <div className=" relative mt-[100px] lg:mt-0">
            <Text className='title-holder background-border-text-2  font-chakraPetch absolute top-[-10px] z-0   cursor-pointer text-[24px]  font-[700] uppercase opacity-25 md:text-[40px]  lg:top-[-20px] lg:text-[66px]'>services</Text>
          <Text className='z-10 text-[28px] font-[700] uppercase md:text-[38px] lg:text-[42px] '>RUBBING, WAXING, AND POLISHING</Text>
           <Text className='mt-[30px] text-[18px] font-[400]' >Our technicians have undergone the most extensive and stringent car detail training program. And the only car that matters is yours because we will detail it to your complete satisfaction.</Text>
          <div className=" mt-[30px] ">
             <StyledButton1 label='get service' className='text-[18px] font-[700] uppercase'/>
          </div>
          </div>
        
        </div>
        <div className="relative mt-[25px] overflow-hidden lg:mt-0 lg:w-1/2">
          <CustomImage src='/images/home-bg/service-bg-02.jpg' alt='' width={1170} height={ 610} className=' bg-cover bg-center opacity-50 transition-transform  duration-300 ease-in-out hover:scale-110 lg:h-[610px]'/>
        </div>
      </div>

    </section>
  );
};

export default GetServicesSection;