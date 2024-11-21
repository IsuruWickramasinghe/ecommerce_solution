import React from 'react';

import Text from '@/components/atoms/Text/Text';
import PricingCard from '@/components/molecules/priceing_cards/PricingCard';


const PricingSection = () => {
  return (
   <section className='font-chakraPetch bg-[#161616] py-10 text-white'>
    <div className="container lg:py-[90px]">
      <div className="flex  flex-col justify-between lg:flex-row">
      <div className="mb-[35px] space-y-6 pr-[8px] lg:mb-0 lg:w-1/3">
        <Text className='text-[28px] font-[700] uppercase md:text-[38px] lg:text-[42px]'>AFFORDABLE PRICING PLANS</Text>
        <Text className='text-[18px] font-[400]'>We provide the best car service, recommend the best products through an independent review process.</Text>
        <ul className='custom-marker list-disc space-y-3 pl-[10px] text-[16px] font-[600] md:text-[18px]'>
          <li>SAME DAY SERVICE</li>
          <li>CONVENIENT LOCATION</li>
          <li>ONLINE APPOINTMENT</li>
          
        </ul>
      </div>
      <div className="flex flex-col gap-[60px] lg:w-2/3 lg:flex-row">
          <div className="lg:w-1/2">
            <PricingCard price='$ 49.99' color5='text-[#707070]' color4='text-[#707070]' color3='text-[#707070]'/>
          </div>
          <div className="lg:w-1/2">
            <PricingCard price='$ 99.99' />
          </div>
      </div>
     
      </div>
    </div>
   </section>
  );
};

export default PricingSection;