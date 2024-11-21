import React from "react";

import Text from "@/components/atoms/Text/Text";
import StyledButton1 from "@/components/molecules/Button/StyledButton1";
import CustomCard from "@/components/molecules/CustomCard/CustomCard";

const OurServicesSection = () => {
  return (
    <section className="font-chakraPetch bg-[#161616] py-10 text-white ">
      <div className="container lg:pt-[90px]">
        <div className="flex flex-col items-center justify-between lg:flex-row ">
          <div>
            <Text className="pb-[20px] text-[28px] font-[700] md:text-[38px] lg:pb-[35px] lg:text-[42px]">
              OUR SERVICES
            </Text>
          </div>
          <StyledButton1
            label="All Services"
            className=" w-full text-[18px] font-[700] uppercase lg:w-[250px] lg:px-[40px]  lg:py-[15px]  "
          />
        </div>
        <div className="relative   mt-[30px] grid grid-cols-1 gap-9  font-[700] sm:grid-cols-1 md:grid-cols-3">
         <CustomCard mainText="BRAKE REPAIR" subText="You get used to your brakes. Brake pads and rotors wear out from the immense friction and heat they encounter. Air gets into brake lines.…" width={80} hight={80} alt="icone" path="/images/services-img/Icon-2b.png"/>
         <CustomCard mainText="ENGINE REPAIR" subText="The check engine usually indicates a need to replace one or more parts of your engine or exhaust system: the oxygen sensor, catalytic converter, mass…" width={80} hight={80} alt="icone" path="/images/services-img/Icon-3b.png"/>
         <CustomCard mainText="TIRE REPAIR" subText="You need new tires, and you have questions. What type of tire do I really need? What do terms like “all-season” and “all-terrain” really mean?…" width={80} hight={80} alt="icone" path="/images/services-img/Icon-4b.png"/>
         <CustomCard mainText="COOLING SYSTEM" subText="An overheated engine that leaves you stranded on the side of the road is a hassle. But overheating is one of many signs of trouble…" width={80} hight={80} alt="icone" path="/images/services-img/Icon-5b.png"/>
         <CustomCard mainText="BATTERY REPAIR" subText="Your vehicle just won’t start. You turn on the ignition, and all you get is the telltale clicking noise. Possibly followed by competing pronouncements of…" width={80} hight={80} alt="icone" path="/images/services-img/Icon-6b.png"/>
         <CustomCard mainText="STEERING REPAIR" subText="Your steering and suspension systems work together to keep your tires on the pavement and your vehicle under control – until a power steering problem…" width={80} hight={80} alt="icone" path="/images/services-img/Icon-1b.png"/>

        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
