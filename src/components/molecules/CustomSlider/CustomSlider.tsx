import React from "react";

import Image from "next/image";

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../../ui/carousel";


function MyCarouselExample() {
  return (
    <Carousel
      orientation="horizontal"
      opts={{ loop: true }}
      className="carousel-container relative"
    >
      <CarouselPrevious />
      
      <CarouselContent>
        <CarouselItem className="item-style w-full sm:w-1/2 lg:w-1/3"> {/* Show 3 items on lg, 2 on sm */}
          <Image src="/images/home-bg/service-bg-01.jpg" alt="Slide 1" className="h-auto w-full object-cover" />

        </CarouselItem>
        <CarouselItem className="item-style w-full sm:w-1/2 lg:w-1/3"> {/* Show 3 items on lg, 2 on sm */}
          <Image src="/images/home-bg/service-bg-01.jpg" alt="Slide 1" className="h-auto w-full object-cover" />

        </CarouselItem>
        <CarouselItem className="item-style w-full sm:w-1/2 lg:w-1/3"> {/* Show 3 items on lg, 2 on sm */}
          <Image src="/images/home-bg/service-bg-01.jpg" alt="Slide 1" className="h-auto w-full object-cover" />

        </CarouselItem>
      
       
        {/* Add more items as needed */}
      </CarouselContent>
      
      <CarouselNext />
    </Carousel>
  );
}

export default MyCarouselExample;
