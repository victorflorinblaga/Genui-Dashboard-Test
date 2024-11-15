import React from 'react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HeroPage = () => {
  return (
    <div className="hero bg-cover bg-center h-screen" style={{backgroundImage: 'url("/path-to-your-food-image.jpg")'}}>
      <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Home</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="/">Home</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Recipes</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="/recipes">Recipes</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <h1 className="text-white text-5xl font-bold mt-10">Discover Delicious Recipes</h1>
        <p className="text-white text-lg mt-4">Savor the flavor with every bite!</p>

        <Carousel className="mt-10">
          <CarouselContent>
            <CarouselItem>
              <img src="/path-to-food-image1.jpg" alt="Dish 1" className="rounded-lg" />
              <h2 className="text-white">Dish 1</h2>
            </CarouselItem>
            <CarouselItem>
              <img src="/path-to-food-image2.jpg" alt="Dish 2" className="rounded-lg" />
              <h2 className="text-white">Dish 2</h2>
            </CarouselItem>
            <CarouselItem>
              <img src="/path-to-food-image3.jpg" alt="Dish 3" className="rounded-lg" />
              <h2 className="text-white">Dish 3</h2>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default HeroPage;