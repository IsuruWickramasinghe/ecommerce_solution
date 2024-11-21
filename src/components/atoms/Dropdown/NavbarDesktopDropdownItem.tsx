'use client';
import React, { useState } from 'react';

import Link from 'next/link';

import { INavbarDropdownItemProps } from '@/types/components/IAtoms';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


const NavbarDesktopDropdownItem = ({ label, url = '', className, children }: INavbarDropdownItemProps) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  return (
    <li
      className='relative h-full'
      onMouseEnter={() => setDropdownVisible(true)}
      onMouseLeave={() => setDropdownVisible(false)}
    >
      <Link href={url} className='navbar-item flex h-full items-center'>
        <div className={`flex items-center gap-1 text-[16px] font-semibold leading-[32px] ${className}`}>{label} <FontAwesomeIcon icon={faChevronDown} className='text-[14px]' /> </div>
      </Link>
      <div className={`dropdown-desktop-menu bg-accentDark relative ${isDropdownVisible ? 'visible' : 'overflow-hidden'}`}>
        <ul className='py-4'>
          {children}
        </ul>
      </div>
    </li>
  );
};

export default NavbarDesktopDropdownItem;