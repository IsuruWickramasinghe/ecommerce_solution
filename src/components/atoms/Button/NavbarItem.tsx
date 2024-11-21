import React from 'react';

import Link from 'next/link';

import { INavbarItemProps } from '@/types/components/IAtoms';


const NavbarItem = ({ label, url = '', className = '', state = 'item' }: INavbarItemProps) => {
  return (
    <li className={`state-navbar-${state} relative h-full`}>
      <Link href={url} className='navbar-item flex h-full items-center'>
        <span className={`text-[16px] font-semibold leading-[32px] ${className}`}>{label}</span>
      </Link>
    </li>
  );
};

export default NavbarItem;