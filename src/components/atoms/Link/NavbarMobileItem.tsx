import React from 'react';

import Link from 'next/link';

import { INavbarItemProps } from '@/types/components/IAtoms';


const NavbarMobileItem = ({ label, url = '', className = '', state = 'item' }: INavbarItemProps) => {
  return (
    <div className={`state-navbar-${state} border-b-accentLightGray relative h-full border-b-[0.6px] px-5 ${state === 'item' ? 'text-whiteSmoke py-3' : 'py-2 text-green-500'}`}>
      <Link href={url} className='navbar-item flex h-full items-center'>
        <span className={`text-[14px] font-semibold leading-[21px] ${className}`}>{label}</span>
      </Link>
    </div>
  );
};

export default NavbarMobileItem;