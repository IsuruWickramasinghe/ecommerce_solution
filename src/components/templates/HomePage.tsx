import React from 'react';


import HomePageHeroCarousel from '../organisms/HomePageHeroCarousel';
import OurServicesSection from '../organisms/home_page/OurServicesSection';
import RepairSection from '../organisms/home_page/RepairSection';
import PricingSection from '../organisms/home_page/PricingSection';
import GetServicesSection from '../organisms/home_page/GetServicesSection';
import AboutIntroSection from '../organisms/about_page/AboutIntroSection';
import ArticleSection from '../organisms/home_page/ArticleSection';
import AppoinmentSection from '../organisms/home_page/AppoinmentSection';
import FooterSection from '../organisms/FooterSection';
import HeaderSectionHome from '../organisms/home_page/HeaderSectionHome';
import ScrollToTop from '../molecules/ScrollToTop/ScrollToTop';
import CustomCursor from '../molecules/CustomCursor/CustomCursor';
import NavigationBar2 from '../organisms/NavigationBar2';




const HomePage = () => {
  return (
    <div className='w-full '>
      <ScrollToTop/>
      <CustomCursor/>
      <NavigationBar2/>
      <HomePageHeroCarousel />
      <HeaderSectionHome />
      <OurServicesSection/>
      <RepairSection/>
      <PricingSection/>
      <GetServicesSection/>
      <AboutIntroSection/>
      <ArticleSection/>
      <AppoinmentSection/>
      <FooterSection/>
    </div>
  );
};

export default HomePage;