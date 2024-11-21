import React from 'react';

import Image from 'next/image';



import img from '../../../../public/images/background/about-1.jpg';

const AboutHero = () => {
  return (
   <div className="font-chakraPetch bg-[#161616] py-10 text-white">
     <div className="container flex flex-col py-5 lg:flex-row">
        <div className=" p-0 lg:mr-[50px] lg:mt-[40px] lg:w-1/2 lg:py-6">
           <div className="block">
           <h1 className='text-[28px] font-[700] md:text-[38px] lg:text-[42px]'>WE MAKE AUTO REPAIR MORE CONVENIENT</h1>
           <p className='mt-5  text-[18px]'>Promotors has over 1200 locations across the U.S. and Canada to provide car maintenance and car repair services wherever you are.</p>
           </div>
           <div className=" flex flex-col gap-[28px] py-4">
            <div  className='mt-[28px] w-[95%]'>
            <div className="flex justify-between">
                <h1>HIGHLY QUALIFIED EXPERTS</h1>
                <p>90%</p>
            </div>
            <div className=" h-4  bg-gray-200">
               <div className="h-4 bg-[#d16527] " style={{width: "90%"}}></div>
                </div>
            </div>
            <div className='w-[95%] pt-6' >
            <div className="flex justify-between">
                <h1>CLEAN, MODERN FACILITY</h1>
                <p>97%</p>
            </div>
            <div className=" h-4  bg-gray-200 ">
               <div className="h-4 bg-[#d16527]  " style={{width: "90%"}}></div>
                </div>
            </div>
           </div>
        </div>
        <div className="  overflow-hidden  ">
            <div className="relative mt-[40px] h-auto  w-full overflow-hidden bg-cover  bg-no-repeat"> 
                <Image 
                    src={img} 
                    alt="" 
                    width={700}
                    height={530}
                    objectFit="cover" // Ensure the image covers the entire area
                    className="opacity-70 transition duration-300 ease-in-out hover:scale-110" 
                />
            </div>
        </div>

    </div>
   </div>
  );
};

export default AboutHero;