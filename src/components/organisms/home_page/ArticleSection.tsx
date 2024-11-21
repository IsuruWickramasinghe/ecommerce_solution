import React from 'react';

import Text from '@/components/atoms/Text/Text';

import { CarouselSpacing } from "../../ui/Carousel2";

const items = [
  { id: 1,name: 'FERNANDO ALONSO',  imageUrl: '/images/home-bg/single-post-06-370x253.jpg',part:'Consulting Engineer' },
  { id: 2, name: 'BURTON LYONS', imageUrl: '/images/home-bg/single-post-06-370x253.jpg' ,part:'Design Engineer'},
  { id: 3,name: 'MARIO ANDRETTI',   imageUrl: '/images/home-bg/single-post-06-370x253.jpg',part:'Assembly Workers' },
  { id: 4, name: 'KATHERINE LEGGE', imageUrl: '/images/home-bg/single-post-06-370x253.jpg' ,part:'Operating Engineers'},
  { id: 5, name: 'JIM CLARK', imageUrl: '/images/home-bg/single-post-06-370x253.jpg',part:'Technical Staff' },
  { id: 6,name: 'LEWIS HAMILTON',  imageUrl: '/images/home-bg/single-post-06-370x253.jpg',part:'Service Advisor'},
  { id: 7, name: 'TOM KRISTENSEN',  imageUrl: '/images/home-bg/single-post-06-370x253.jpg',part:'Test Specialist' },
  { id: 8, name: 'NIKI LAUDA', imageUrl: '/images/home-bg/single-post-06-370x253.jpg',part:'Transport Management' },

  
];


const ArticleSection = () => {
  return (
   <section className='font-chakraPetch bg-[#161616] py-10 text-white'>
     <div className="container">
        <div className="">
          <Text className='text-[28px] font-[700] uppercase md:text-[38px] lg:text-[42px]'>POPULAR ARTICLES</Text>
        </div>
        <div className="item-body relative border-t-2 border-[#242424] pt-[35px] before:absolute before:left-0 before:top-0 before:w-full before:origin-center before:scale-x-0 before:border-t-[3px] before:border-[#d16527] before:transition-transform before:duration-200 before:ease-in before:content-[''] hover:before:scale-x-100">
         <div className=" bg-image-wrapper relative h-[400px] overflow-hidden">
           <div className="absolute inset-0  bg-[url('/images/home-bg/post-bg-01-1.jpg')] bg-cover bg-center opacity-40 transition-transform duration-300 ease-in-out hover:scale-110 "></div>
            <div className=' relative mt-[280px] flex   flex-col pl-[40px] '>
              <hr  className='mb-2 w-[55px] border border-[#fd7e14]'/>
               <Text className='text-[15px] font-[600] hover:text-[#fd7e14]   md:text-[18px]' > Repair</Text>
               <Text className='text-[18px] font-[700] hover:text-[#fd7e14] md:text-[20px] lg:text-[23px]'>SIGNS YOUR CAR BATTERY HAS <br /> TO BE REPLACED</Text>
             </div>
         </div>
        </div>
        <div className="mt-[30px] flex items-center gap-4">
          <CarouselSpacing items={items} width='w-[400px]' hight='h-[280px]' classNameOne='absolute p-5 pt-[230px]  inset-0 flex flex-col  ' classNameTwo='text-[15px] md:text-[18px] font-[600]   hover:text-[#fd7e14]'/>   
        </div>
     </div>
   </section>
  );
};

export default ArticleSection;