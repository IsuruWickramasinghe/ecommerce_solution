import React from 'react';

import Link from 'next/link';

import { IIconLabelProps } from '@/types/components/IMolecules';

const RoundedIconLabel = ({ Icon, label, url, className }: IIconLabelProps) => {
  return (
    <Link href={url} className={`group flex items-center gap-[10px] ${className}`}>
      <div className='bg-accentRed flex size-[36px] items-center justify-center rounded-full transition-all duration-300 group-hover:ms-[10px] group-hover:bg-black'>
        {Icon}
      </div>
      <span className="group-hover:text-accentRed block text-[16px] font-[400] leading-[32px] transition-all duration-300">
        {label}
      </span>
    </Link>
  );
};

export default RoundedIconLabel;