import React from 'react';

import { NavbarData } from '@/types/services/IFetchData';

import { FetchNavbarData } from '@/lib/services/FetchingData';

import CustomImage from '../atoms/Image/CustomImage';
import RedNavBottomBar from '../molecules/NavigationBar/RedNavBottomBar';
import IconLabel from '../molecules/Icon/IconLabel';
import HamburgerButtonMobile from '../molecules/NavigationBar/HamburgerButtonMobile';

import { MdOutlinePhoneInTalk } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";


const NavigationBar = async () => {
  const navBarData: NavbarData = await FetchNavbarData();

  if (!navBarData) return null;

  return (
    <nav className='relative z-[1]'>
      <div className="mx-auto flex h-[100px] items-center justify-between px-5 md:max-w-7xl lg:items-start">
        <CustomImage src={navBarData.logo} alt='logo' width={180} height={66.9} priority={true} className='my-auto' />
        <div className='hidden gap-[30px] lg:flex'>
          <IconLabel
            Icon={<MdOutlinePhoneInTalk className='text-accentRed group-hover:text-accentDark text-[22px] transition-all ease-linear' />}
            label={navBarData.contacts.phone1 || ''}
            url={'tel:' + navBarData.contacts.phone1}
            className='my-[15px] h-fit'
          />
          <IconLabel
            Icon={<AiOutlineMail className='text-accentRed group-hover:text-accentDark text-[22px] transition-all ease-linear' />}
            label={navBarData.contacts.email || ''}
            url={'mailto:' + navBarData.contacts.email}
            className='my-[15px] h-fit'
          />
        </div>
        <div className="bg-accentRed h-fit p-2 pb-1 lg:hidden">
          <HamburgerButtonMobile />
        </div>
      </div>
      <RedNavBottomBar navBarData={navBarData} />
    </nav>
  );
};

export default NavigationBar;