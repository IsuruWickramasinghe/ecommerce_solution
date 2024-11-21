import React from 'react';

import Link from 'next/link';

import { IIconLabelProps } from '@/types/components/IMolecules';

const IconLabel = ({ Icon, label, url, className }: IIconLabelProps) => {
  return (
    <Link href={url} className={`group flex items-center gap-[10px] ${className}`}>
      {Icon}
      <span className="group-hover:text-accentRed block text-[16px] leading-[32px] transition-all ease-linear">{label}</span>
    </Link>
  );
};

export default IconLabel;