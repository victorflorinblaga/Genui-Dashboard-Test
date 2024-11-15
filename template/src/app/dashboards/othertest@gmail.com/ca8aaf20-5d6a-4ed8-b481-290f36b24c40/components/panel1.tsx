import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Panel1 = () => {
  return (
    <div className="relative bg-blue-900 text-white h-screen">
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-6xl font-bold">Dinosaurs</h1>
      </div>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <HoverCard>
              <HoverCardTrigger>
                <img src="https://example.com/t-rex.jpg" alt="T-Rex" className="w-full h-auto" />
              </HoverCardTrigger>
              <HoverCardContent>
                <h2 className="text-lg font-semibold">T-Rex</h2>
                <p>The king of the dinosaurs, known for its massive size and powerful jaws.</p>
              </HoverCardContent>
            </HoverCard>
          </CarouselItem>
          <CarouselItem>
            <HoverCard>
              <HoverCardTrigger>
                <img src="https://example.com/triceratops.jpg" alt="Triceratops" className="w-full h-auto" />
              </HoverCardTrigger>
              <HoverCardContent>
                <h2 className="text-lg font-semibold">Triceratops</h2>
                <p>Famous for its three horns, this herbivore was a formidable dinosaur.</p>
              </HoverCardContent>
            </HoverCard>
          </CarouselItem>
          <CarouselItem>
            <HoverCard>
              <HoverCardTrigger>
                <img src="https://example.com/velociraptor.jpg" alt="Velociraptor" className="w-full h-auto" />
              </HoverCardTrigger>
              <HoverCardContent>
                <h2 className="text-lg font-semibold">Velociraptor</h2>
                <p>A small but fast predator known for its intelligence and hunting prowess.</p>
              </HoverCardContent>
            </HoverCard>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Panel1;