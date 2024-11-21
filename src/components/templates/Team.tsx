import React from 'react';

import ScrollToTop from '../molecules/ScrollToTop/ScrollToTop';
import CustomCursor from '../molecules/CustomCursor/CustomCursor';
import NavigationBar2 from '../organisms/NavigationBar2';
import AboutTeam from '../organisms/about_page/AboutTeam';
import FooterSection from '../organisms/FooterSection';
import AboutHeader from '../organisms/about_page/AboutHeader';


const Team = () => {
  return (
    <div className="w-full">
      <ScrollToTop/>
      <CustomCursor/>
      <NavigationBar2/>
      <AboutHeader/>
      <AboutTeam/>
      <FooterSection/>
    </div>
  );
};

export default Team;