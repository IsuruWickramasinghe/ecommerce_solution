import React from 'react';

import Text from '@/components/atoms/Text/Text';
import InputSection from '@/components/molecules/CustomInputSection/InputSection';

import StyledButton1 from '../../molecules/Button/StyledButton1';

const AppoinmentSection = () => {
  return (
     <section className='font-chakraPetch bg-[#161616] py-10 text-white'>
        <div className="container space-y-[39px] lg:py-[80px]">
           <div className="relative">
              <Text className=' title-holder background-border-text-2 font-chakraPetch absolute top-[-10px] z-0 cursor-pointer   text-[18px] font-[700]  uppercase opacity-25 md:text-[40px] lg:top-[-20px] lg:text-[66px] '>CONTACT US</Text>
              <Text className='z-10 text-[28px] font-[700] uppercase md:text-[38px] lg:text-[42px]'>REQUEST AN APPOINTMENT ONLINE</Text>
              <Text className='text-[18px] font-[400] lg:w-1/2'>After you submit the form, a representative will call you back with the information you’ll need to make an appointment.</Text>
           </div>
           <div className=" grid gap-x-10 gap-y-6 md:grid-cols-2  lg:pt-10">
           <InputSection text='YOUR NAME' classname='' placeholder='Enter Your Name' type='text'/>
           <InputSection text='YOUR EMAIL' classname='' placeholder='Enter Your Email' type='email'/>
           <InputSection text='SELECT DATE' classname='' placeholder='Select Date' type='date'/>
           <InputSection text='SELECT TIME' classname='' placeholder='Select Time' type='time'/>
           </div>
          <div className="mt-[30px] ">
            <InputSection text='YOUR MESSAGE' classname='' placeholder='Describe Your Problem' type='text'/>
          </div>
          <div className="">
             <StyledButton1 label='send message'  className='uppercase'/>
          </div>
        </div>
     </section>
  );
};

export default AppoinmentSection;