import React from 'react';

import Text from '@/components/atoms/Text/Text';
import { Separator } from '@/components/ui/separator';


const HeaderSectionHome = () => {
  return (
    <section >
          <div className="h-auto bg-[#121212] text-white  lg:py-[90px]">
        <div className="container grid grid-cols-1   lg:grid-cols-4">
         <div className="mb-[25px] mt-[30px] lg:my-0 ">
            <Text className='font-chakraPetch text-[66px] font-bold leading-[102px] '>12+</Text>
            <Separator className='bg-accentLightGray  ' />
            <div className=" item-body relative border-transparent   pt-[32px] before:absolute before:left-0 before:top-0 before:w-full before:origin-center before:scale-x-0 before:border-t before:border-[#d16527] before:transition-transform before:duration-200 before:ease-in before:content-[''] hover:before:scale-x-100">
              <Text className='w-[90%] pt-[10px] text-left'>More than 12 years of operation in the  field of Car Services</Text>
            </div>
            
         </div>
         <div className="mb-[25px] mt-[30px] lg:my-0">
         <Text className='font-chakraPetch text-[66px] font-bold leading-[102px]'>22k+</Text>
            <Separator className='bg-accentLightGray  ' />
            <div className=" item-body relative border-transparent   pt-[32px] before:absolute before:left-0 before:top-0 before:w-full before:origin-center before:scale-x-0 before:border-t before:border-[#d16527] before:transition-transform before:duration-200 before:ease-in before:content-[''] hover:before:scale-x-100">
              <Text className='w-[90%] pt-[10px] text-left'>International standard process and large factory system</Text>
            </div>
         </div>
         <div className="mb-[25px] mt-[30px] lg:my-0">
         <Text className='font-chakraPetch text-[66px] font-bold leading-[102px]'>500K+</Text>
            <Separator className='bg-accentLightGray  ' />
            <div className=" item-body relative border-transparent   pt-[32px] before:absolute before:left-0 before:top-0 before:w-full before:origin-center before:scale-x-0 before:border-t before:border-[#d16527] before:transition-transform before:duration-200 before:ease-in before:content-[''] hover:before:scale-x-100">
              <Text className='w-[90%] pt-[10px] text-left'>Employees in the whole system include  many leading engineers</Text>
            </div>
         </div>
         <div className="mb-[25px] mt-[30px] lg:my-0">
         <Text className='font-chakraPetch text-[66px] font-bold leading-[102px]'>99%</Text>
            <Separator className='bg-accentLightGray ' />
            <div className=" item-body relative border-transparent   pt-[32px] before:absolute before:left-0 before:top-0 before:w-full before:origin-center before:scale-x-0 before:border-t before:border-[#d16527] before:transition-transform before:duration-200 before:ease-in before:content-[''] hover:before:scale-x-100">
              <Text className='w-[90%] pt-[10px] text-left'>Service technology to satisfy  customers needs and interests</Text>
            </div>
         </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSectionHome;