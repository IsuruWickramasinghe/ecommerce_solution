import React from 'react';

import {
  Drawer,
  // DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import RoundedIconLabel from '@/components/molecules/Icon/RoundedIconLabel';


import { MdOutlinePhoneInTalk } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { BsNewspaper, BsFlower1 } from "react-icons/bs";
import { IoEarthOutline } from "react-icons/io5";

import Icon from '../../atoms/Icon/Icon';
import ImageLink from '../../atoms/Link/ImageLink';


const HamburgerButtonDesktop = () => {
  return (
    <Drawer direction='right'>
      <DrawerTrigger>
        <Icon src='/icons/hamburger.svg' height={30} width={30} alt='hamburger' />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerTitle></DrawerTitle>
        <DrawerDescription></DrawerDescription>
        <DrawerHeader className='scroll-container overflow-y-auto'>
          <div className='w-[400px] px-[14px] py-[24px]'>
            <div className='bg-accentRed mb-5 px-6 py-4 text-[16px] font-[600] text-white'>QUICK LINKS</div>
            <div className="px-5 pb-8">
              <RoundedIconLabel
                Icon={<MdOutlinePhoneInTalk className='text-[18px] text-white' />}
                label={'Contact Us'}
                url={'/contact'}
                className='my-[10px] h-fit'
              />
              <RoundedIconLabel
                Icon={<BiSupport className='text-[18px] text-white' />}
                label={'Support'}
                url={'/support'}
                className='my-[10px] h-fit'
              />
              <RoundedIconLabel
                Icon={<BsNewspaper className='text-[18px] text-white' />}
                label={'Online Documentation'}
                url={'/online-documentation'}
                className='my-[10px] h-fit'
              />
              <RoundedIconLabel
                Icon={<BsFlower1 className='text-[18px] text-white' />}
                label={'Industrial Services'}
                url={'/industrial-services'}
                className='my-[10px] h-fit'
              />
              <RoundedIconLabel
                Icon={<IoEarthOutline className='text-[18px] text-white' />}
                label={'About Our Factory'}
                url={'/about-our-factory'}
                className='my-[10px] h-fit'
              />
            </div>
            <div className='bg-accentRed mb-5 px-6 py-4 text-[16px] font-[600] text-white'>PROJECTS</div>
            <div className="grid grid-cols-3 gap-3">
              <ImageLink imageSrc='/images/temp/f1-150x150.jpg' redirectLink='/image-link' height={106} width={106} />
              <ImageLink imageSrc='/images/temp/f1-150x150.jpg' redirectLink='/image-link' height={106} width={106} />
              <ImageLink imageSrc='/images/temp/f1-150x150.jpg' redirectLink='/image-link' height={106} width={106} />
              <ImageLink imageSrc='/images/temp/f1-150x150.jpg' redirectLink='/image-link' height={106} width={106} />
              <ImageLink imageSrc='/images/temp/f1-150x150.jpg' redirectLink='/image-link' height={106} width={106} />
              <ImageLink imageSrc='/images/temp/f1-150x150.jpg' redirectLink='/image-link' height={106} width={106} />
              <ImageLink imageSrc='/images/temp/f1-150x150.jpg' redirectLink='/image-link' height={106} width={106} />
              <ImageLink imageSrc='/images/temp/f1-150x150.jpg' redirectLink='/image-link' height={106} width={106} />
            </div>
          </div>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default HamburgerButtonDesktop;