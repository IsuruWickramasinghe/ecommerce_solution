'use client';

import * as React from "react";



import {
  Carousel,
  CarouselContent,
  CarouselItem,
 
} from "@/components/ui/carousel";
import CustomImage from '@/components/atoms/Image/CustomImage';

import Text from "../atoms/Text/Text";

import { MdOutlineNavigateNext } from "react-icons/md";

type Item = {
  id: number;
  name: string;
  imageUrl: string;
};



export function CarouselSpacing({items,width, hight ,classNameOne ,classNameTwo}:{items:Item[], width:string , hight:string ,classNameOne?:string,classNameTwo:string}) {
  return (
<Carousel className="flex w-full max-w-[1500px] items-center justify-center">
  <CarouselContent className="lg:-ml-1 ">
    {items.map((item, index) => (
      <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/3 ">
     <div className=" bg-image-wrapper item-body relative   flex items-center overflow-hidden border-t-2 border-[#242424] bg-cover bg-no-repeat pt-[40px]   before:absolute before:left-0 before:top-0 before:w-full before:origin-center before:scale-x-0 before:border-t-[3px] before:border-[#d16527] before:transition-transform before:duration-200 before:ease-in before:content-[''] hover:before:scale-x-100">
     <div className={`   ${width}  ${hight}  relative  inset-0 transition-transform duration-300 ease-in-out hover:scale-110 lg:ml-3`}>
        <CustomImage 
                src={item.imageUrl} 
                alt={item.name} 
                width={600} 
                height={200} 
                className="size-full bg-cover bg-center object-cover  " 
              />  
             <div className={`${classNameOne}  `}>
               <hr  className='mb-2 w-[55px] border border-[#fd7e14]'/>
               <Text className={`${classNameTwo}  `} > Repair</Text>
             </div>
        </div>
    
     </div>
       <div className="ml-4 space-y-4">
         <Text className="mt-4 text-[18px] font-[700] uppercase hover:text-[#fd7e14] md:text-[20px] lg:text-[23px]">WHEEL ALIGNMENT VS. FRONT END ALIGNMENT</Text>
         <Text className="text-[14px] font-[400]">jan ,09 2023 <span className="list-disc"> no comments</span></Text>
       <div className="flex items-center gap-4 text-[16px] font-[700] hover:text-[#fd7e14] md:text-[18px]">
        <div className="custom-clip flex size-[20px] items-center">
          <MdOutlineNavigateNext />
        </div>
          Read More
       </div>
       </div>
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>
  );
}
