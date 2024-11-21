import React from 'react';

// import AboutHeader from '../organisms/AboutHeader';
import AboutHero from '../organisms/about_page/AboutHero';
import AboutServicesCard from '../organisms/about_page/AboutServicesCard';
import AboutWorkSection from '../organisms/about_page/AboutWorkSection';
import AboutIntroSection from '../organisms/about_page/AboutIntroSection';
import AboutTeam from '../organisms/about_page/AboutTeam';
import AboutBook from '../organisms/about_page/AboutBook';
import FooterSection from '../organisms/FooterSection';
import AboutHeader from '../organisms/about_page/AboutHeader';
import CustomCursor from '../molecules/CustomCursor/CustomCursor';
import ScrollToTop from '../molecules/ScrollToTop/ScrollToTop';

const AboutPage = () => {
  return (
    <div className=" w-full ">
      <ScrollToTop/>
        <CustomCursor/>
        <AboutHeader/>
        <AboutHero/>
        <AboutServicesCard/>
        <AboutWorkSection/>
        <AboutIntroSection/>
        <AboutTeam/>
        <AboutBook/>
        <FooterSection/>
    </div>
  );
};

export default AboutPage;