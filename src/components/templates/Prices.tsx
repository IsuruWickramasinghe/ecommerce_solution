import React from 'react';
import ScrollToTop from '../molecules/ScrollToTop/ScrollToTop';
import CustomCursor from '../molecules/CustomCursor/CustomCursor';
import NavigationBar2 from '../organisms/NavigationBar2';
import AboutHeader from '../organisms/about_page/AboutHeader';
import FooterSection from '../organisms/FooterSection';
import PricingSection from '../organisms/home_page/PricingSection';

const Prices = () => {
  return (
    <div className='w-full'>
      <ScrollToTop/>
      <CustomCursor/>
      <NavigationBar2/>
      <AboutHeader/>
      <PricingSection/>
      <FooterSection/>
    </div>
  );
};

export default Prices;