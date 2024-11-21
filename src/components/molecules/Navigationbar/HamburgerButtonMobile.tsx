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
import NavbarMobileItem from '@/components/atoms/Link/NavbarMobileItem';
import NavbarMobileDropdownItem from '@/components/atoms/Dropdown/NavbarMobileDropdownItem';
import ShapeBox from '@/components/atoms/Shape/ShapeBox';
import Text from '@/components/atoms/Text/Text';

import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Icon from '../../atoms/Icon/Icon';


const HamburgerButtonMobile = () => {
  return (
    <Drawer direction='right'>
      <DrawerTrigger>
        <Icon src='/icons/hamburger.svg' height={30} width={30} alt='hamburger' />
      </DrawerTrigger>
      <DrawerContent className='harmburger-mobile-background border-0'>
        <DrawerTitle></DrawerTitle>
        <DrawerDescription></DrawerDescription>
        <DrawerHeader className='scroll-container flex min-h-svh w-[320px] flex-col justify-between overflow-y-auto p-0'>
          <div className="flex flex-col gap-1.5">
            <NavbarMobileItem label="Home" url="/" state="item" />
            <NavbarMobileItem label="ABOUT" url="/" state="item" />
            <NavbarMobileItem label="SERVICES" url="/" state="item" />
            <NavbarMobileItem label="FAQ's" url="/" state="item" />
            <NavbarMobileItem label="BLOG" url="/" state="item" />
            <NavbarMobileDropdownItem label="PROJECTS">
              <NavbarMobileItem label="Projects" url="/" state="sub-item" />
              <NavbarMobileDropdownItem label="Single">
                <NavbarMobileItem label="Single Slider" url="/" state="sub-item" />
                <NavbarMobileItem label="Single Gallery Wide" url="/" state="sub-item" />
                <NavbarMobileItem label="Single Gallery Left Side" url="/" state="sub-item" />
                <NavbarMobileItem label="Single Sticky" url="/" state="sub-item" />
              </NavbarMobileDropdownItem>
            </NavbarMobileDropdownItem>
            <NavbarMobileDropdownItem label="SHOP">
              <NavbarMobileItem label="All Products" url="/" state="sub-item" />
              <NavbarMobileItem label="My account" url="/" state="sub-item" />
              <NavbarMobileItem label="Cart" url="/" state="sub-item" />
              <NavbarMobileItem label="Checkout" url="/" state="sub-item" />
            </NavbarMobileDropdownItem>
            <NavbarMobileItem label="CONTACT" url="/" state="item" />
            <NavbarMobileItem label="Buy XTRA Theme" url="/" state="item" />
          </div>

          <div className='mt-5 flex flex-col gap-1.5'>
            {/* Social Media Icons Start */}
            <div className="flex items-center justify-center gap-3 px-4">
              <ShapeBox width='42px' height='42px' className='bg-black text-white' url='/'>
                <FaFacebookF />
              </ShapeBox>
              <ShapeBox width='42px' height='42px' className='bg-black text-white' url='/'>
                <FaLinkedinIn />
              </ShapeBox>
              <ShapeBox width='42px' height='42px' className='bg-black text-white' url='/'>
                <FaInstagram />
              </ShapeBox>
              <ShapeBox width='42px' height='42px' className='bg-black text-white' url='/'>
                <FaXTwitter />
              </ShapeBox>
            </div>
            {/* Social Media Icons End */}

            <Text className='text-accentGray mb-5 mt-3 text-center text-[14px] leading-[21px]'>Copyright © 2024</Text>
          </div>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default HamburgerButtonMobile;