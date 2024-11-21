'use client';
import React, { useState } from 'react';

import Link from 'next/link';

import { INavbarDropdownItemProps } from '@/types/components/IAtoms';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


const NavbarDesktopSubDropdownItem = ({ label, url = '', className, children }: INavbarDropdownItemProps) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  return (
    <li
      className='state-navbar-item relative h-full'
      onMouseEnter={() => setDropdownVisible(true)}
      onMouseLeave={() => setDropdownVisible(false)}
    >
      <Link href={url} className='navbar-item flex h-full items-center'>
        <div className={`flex w-full items-center justify-between pe-5 text-[16px] font-semibold leading-[32px] ${className}`}>
          {label} <FontAwesomeIcon icon={faChevronRight} className='text-[14px]' />
        </div>
      </Link>
      <div className={`dropdown-sub-menu bg-accentDark ${isDropdownVisible ? 'visible' : ''}`}>
        <ul className='py-4'>
          {children}
        </ul>
      </div>
    </li>
  );
};

export default NavbarDesktopSubDropdownItem;