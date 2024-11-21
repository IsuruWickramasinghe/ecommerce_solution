import React from 'react';

const AboutHeader = () => {
  return (
    <section className='font-chakraPetch bg-[#161616] pb-0 text-white md:pb-10'>
       <div className="h-[250px] bg-[url('/images/background/page-title-bg.jpg')] bg-cover bg-center opacity-40 ">

              <div className="">
                   <ul className="font-chakraPetch ml-[20px] flex items-center gap-4 pt-[60px] text-left text-[15px] font-[600] uppercase leading-[24.99px] md:ml-[80px]">
                     <li className="">
                       <a href="">home</a>
                     </li>
                     <li className="text-[#d16527] before:content-['▪']"><span className='ml-3'>about</span></li>
                   </ul>
              </div>
                 <div className="  font-chakraPetch ml-[20px]   mt-[15px] text-left  uppercase text-white opacity-50 md:ml-[90px]">
                   <h1 className="text-left text-[34px] font-[700]  md:text-[47px] lg:text-[66px] ">about</h1>
                 </div>
          </div>
    </section>

  );
};

export default AboutHeader;