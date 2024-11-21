import React from 'react';

import Text from '@/components/atoms/Text/Text';

import { FaCheck } from "react-icons/fa6";

import StyledButton1 from '../../molecules/Button/StyledButton1';

const PricingCard = ({price , color1 ,color2, color3,color4 ,color5}:{price:string , color1?:string , color2?:string, color3?:string, color4?:string, color5?:string}) => {
  return (
    <div>
         <div className=" item-body relative bg-[#121212]  before:absolute before:left-0 before:top-0 before:w-full before:origin-center before:scale-x-0 before:border-t-[3px] before:border-[#d16527] before:transition-transform before:duration-200 before:ease-in before:content-[''] hover:before:scale-x-100">
         <div className=" flex flex-col items-center justify-center px-8 py-10 ">
           <div className="flex flex-col items-center border-b-2 border-solid border-[#505050]">
             <Text className='md:[18px] text-[15px] font-[700] text-[#c2c2c2]'>PERSONAL</Text>
             <Text className='text-[28px] font-[700] md:text-[38px] lg:text-[42px]'>{price}</Text>
             <Text className='md:[18px] mb-[20px] text-[14px] font-[400]'>per mounth</Text>
           </div>
           <div className="mt-[35px] flex w-full flex-col gap-8">
             <div className={` flex items-center justify-between  ${color1}`}>
               <Text className='md:[18px] text-[14px] font-[400]'>Scheduled servicing</Text>
               <FaCheck />
             </div>
             {/* //text-[#707070] */}
             <div className={` flex items-center justify-between ${color2} `}>
               <Text className='md:[18px] text-[14px] font-[400]'>Scheduled servicing</Text>
               <FaCheck />
             </div>
             <div className={` flex items-center justify-between  ${color3}`}>
               <Text className='md:[18px] text-[14px] font-[400]'>Scheduled servicing</Text>
               <FaCheck />
             </div>
             <div className={` flex items-center justify-between  ${color4}`}>
               <Text className='md:[18px] text-[14px] font-[400]'>Scheduled servicing</Text>
               <FaCheck />
             </div>
             <div className={` flex items-center justify-between  ${color5} `}>
               <Text className='md:[18px] text-[14px] font-[400]'>Scheduled servicing</Text>
               <FaCheck />
             </div>
           </div>
            <StyledButton1 label='get started ' className='mt-[25px] w-full text-[18px] font-[700] uppercase'/>
           
         </div>
      </div>

    </div>
  );
};

export default PricingCard;