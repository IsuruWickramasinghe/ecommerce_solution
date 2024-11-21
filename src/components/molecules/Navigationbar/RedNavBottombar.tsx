import React from 'react';

import { NavbarData, NavBarItem } from '@/types/services/IFetchData';

import NavbarItem from '@/components/atoms/Button/NavbarItem';
import NavbarDesktopDropdownItem from '@/components/atoms/Dropdown/NavbarDesktopDropdownItem';
import NavbarDesktopSubDropdownItem from '@/components/atoms/Dropdown/NavbarDesktopSubDropdownItem';
import HamburgerButtonDesktop from '@/components/molecules/NavigationBar/HamburgerButtonDesktop';

interface RedNavBottomBarProps {
  navBarData: NavbarData;
}
const RedNavBottomBar: React.FC<RedNavBottomBarProps> = async ({ navBarData }) => {

  const renderSubItems = (subItems: NavBarItem[], state: 'item' | 'sub-item') => {
    return subItems.map((subItem, subIndex) => (
      subItem.items ? (
        <NavbarDesktopSubDropdownItem label={subItem.name} url={subItem.path} key={subIndex}>
          {renderSubItems(subItem.items, 'sub-item')}
        </NavbarDesktopSubDropdownItem>
      ) : (
        <NavbarItem label={subItem.name} url={subItem.path} state={state} key={subIndex} />
      )
    ));
  };

  const renderNavItems = (navItems: NavBarItem[]) => {
    return navItems.map((item, index) => (
      item.items ? (
        <NavbarDesktopDropdownItem label={item.name} url={item.path} key={index}>
          {renderSubItems(item.items, 'item')}
        </NavbarDesktopDropdownItem>
      ) : (
        <NavbarItem label={item.name} url={item.path} key={index} />
      )
    ));
  };

  return (
    <div className='bg-accentRed red-navbar-bottom-bar absolute bottom-0 right-0 hidden h-[72px] w-3/5 translate-y-[36px] ps-[100px] lg:block'>
      <ul className="flex h-full items-center gap-[30px]">
        {renderNavItems(navBarData!.navigation)}
        <HamburgerButtonDesktop />
      </ul>
    </div>
  );
};

export default RedNavBottomBar;