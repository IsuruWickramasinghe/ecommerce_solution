import React from 'react';

import CustomImage from '@/components/atoms/Image/CustomImage';
import Text from '@/components/atoms/Text/Text';

import { MdOutlineNavigateNext } from 'react-icons/md';

const CustomCard = ({mainText ,subText ,path , alt , width , hight ,}:{mainText:string,subText:string ,path:string ,alt:string ,width:number,hight:number}) => {
  return (
    <div>
         <div className="item-body relative  border-t-2 border-[#242424] pt-[32px] before:absolute before:left-0 before:top-0 before:w-full before:origin-center before:scale-x-0 before:border-t-[3px] before:border-[#d16527] before:transition-transform before:duration-200 before:ease-in before:content-[''] hover:before:scale-x-100">
            <div className="flex flex-col  gap-5 text-[18px] md:text-[23px]">
              <CustomImage src={`${path}`} alt={alt} width={width} height={hight}/>
              <Text className='hover:text-[#d16527]'>{mainText}</Text>
            </div>
            <Text className="mt-[15px] text-[16px]  font-[400]">
           {subText}
            </Text>
            <div className="mt-[25px] flex items-center gap-4">
              <div className="custom-clip flex size-[20px] items-center">
                <MdOutlineNavigateNext />
             </div>
              <Text className="text-[18px]">DETAILS SERVICE</Text>
            </div>
          </div>
    </div>
  );
};

export default CustomCard;