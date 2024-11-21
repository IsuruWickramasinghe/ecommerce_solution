'use client';

import React, { useCallback, useState } from 'react';

import Link from 'next/link';

import { INavbarMobileDropdownItemProps } from '@/types/components/IAtoms';

import { ChevronDown, ChevronUp } from 'lucide-react';


export default function NavbarMobileDropdownItem({
  label,
  url = '',
  className = '',
  children,
  isOpen: controlledIsOpen,
  onToggle,
}: INavbarMobileDropdownItemProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);

  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const handleToggle = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const newIsOpen = !isOpen;
      if (isControlled) {
        onToggle?.(newIsOpen);
      } else {
        setInternalIsOpen(newIsOpen);
      }
    },
    [isControlled, isOpen, onToggle]
  );

  return (
    <div className="border-accentLightGray relative border-b">
      <button
        className={`flex w-full items-center justify-between px-5 py-3 text-start text-[14px] font-semibold leading-[21px] ${isOpen ? 'bg-accentDark text-accentRed' : 'text-whiteSmoke'} ${className}`}
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls={`dropdown-${label.replace(/\s+/g, '-').toLowerCase()}`}
      >
        {url ? (
          <Link href={url} className="grow" onClick={(e) => e.stopPropagation()}>
            {label}
          </Link>
        ) : (
          <span className="grow">{label}</span>
        )}
        {isOpen ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
      </button>
      {isOpen && (
        <div
          id={`dropdown-${label.replace(/\s+/g, '-').toLowerCase()}`}
          className="border-accentLightGray border-l-4"
        >
          {children}
        </div>
      )}
    </div>
  );
}