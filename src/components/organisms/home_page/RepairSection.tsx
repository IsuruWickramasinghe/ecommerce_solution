'use client';
import React, { useState } from 'react';

import Text from '@/components/atoms/Text/Text';
import VideoModal from '@/components/molecules/VideoModal/VideoModal';

import StyledButton1 from '../../molecules/Button/StyledButton1';


const RepairSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  
  return (
    <section className="font-chakraPetch bg-[#161616] py-10 text-white">
      <div className="container lg:pt-[90px]">
        <div>
          <Text className="text-[28px] font-[700] uppercase md:text-[38px] lg:pb-[35px] lg:text-[42px]">
            MAINTENANCE & REPAIRS
          </Text>
        </div>
        <div className="item-body relative border-t-2 border-[#242424] pt-[35px] before:absolute before:left-0 before:top-0 before:w-full before:origin-center before:scale-x-0 before:border-t-[3px] before:border-[#d16527] before:transition-transform before:duration-200 before:ease-in before:content-[''] hover:before:scale-x-100">
          <div className="bg-image-wrapper relative h-[200px] w-full overflow-hidden lg:h-[600px] ">
            <div className="absolute inset-0  size-full bg-[url('/images/background/video-bg2.jpg')] bg-cover bg-center opacity-40 transition-transform duration-300 ease-in-out hover:scale-110"></div>
              <div className="flex h-full items-center justify-center">
                <StyledButton1
                  label="▶"
                  className="px-[20px] py-[15px] text-[15px] text-white hover:text-[#D16527] lg:px-[30px] lg:py-[35px] lg:text-[40px]"
                  onClick={handleOpenModal}
                />
              </div>
           
          </div>
        </div>
      </div>
        {/* Video Modal */}
        <VideoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        videoUrl=""
      />
    </section>
  );
};

export default RepairSection;
