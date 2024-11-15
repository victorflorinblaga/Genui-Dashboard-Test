import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const DinosaurFacts = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dinosaur Facts</h1>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <h2 className="text-xl">Fact 1</h2>
            <p>Dinosaur fossils have been discovered on every continent.</p>
          </CarouselItem>
          <CarouselItem>
            <h2 className="text-xl">Fact 2</h2>
            <p>The largest dinosaurs, like Argentinosaurus, weighed up to 100 tons.</p>
          </CarouselItem>
          <CarouselItem>
            <h2 className="text-xl">Fact 3</h2>
            <p>Some dinosaurs were as small as a chicken, like the Microraptor.</p>
          </CarouselItem>
          <CarouselItem>
            <h2 className="text-xl">Fact 4</h2>
            <p>Dinosaurs lived for about 165 million years, from the late Triassic to the end of the Cretaceous period.</p>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default DinosaurFacts;