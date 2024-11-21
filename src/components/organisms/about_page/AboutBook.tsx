import React from 'react';

import StyledButton1 from '../../molecules/Button/StyledButton1';

const AboutBook = () => {
  return (
    <section className='font-chakraPetch bg-[#161616] py-10 text-white'>
            <div className="h-[580px] bg-[url('/images/background/about-bg-01.jpg')] bg-cover bg-center opacity-60 grayscale-0">
                <div className=" flex flex-col  items-center justify-center gap-7 pt-[200px] text-center">
                    <h1 className='text-[28px] font-[700]  md:text-[38px] lg:text-[42px]'>BOOK YOUR SERVICE TODAY</h1>
                    <p className='text-[18px] font-[400]'>With quality parts to meet every budget, friendly staff trained <br /> to make your visit informative and hassle free.</p>
                    <div >
                      <StyledButton1  label='BOOK SERVICE NOW' />
                    </div>
                </div>
            </div>
    </section>
  );
};

export default AboutBook;