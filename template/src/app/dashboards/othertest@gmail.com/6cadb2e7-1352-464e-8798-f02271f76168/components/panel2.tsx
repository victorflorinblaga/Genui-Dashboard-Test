import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Panel2 = () => {
  return (
    <div className="bg-green-100 min-h-screen flex flex-col">
      <header className="bg-green-800 text-white p-5">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Home</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>About Us</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Recipes</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Sweet Treats</NavigationMenuLink>
                <NavigationMenuLink>Healthy Meals</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Support</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>

      <main className="flex-grow p-10">
        <h1 className="text-4xl font-bold mb-5 text-center">Delicious Food Awaits!</h1>
        <p className="text-center text-lg mb-10">Explore our collection of amazing recipes to treat your taste buds.</p>

        <Carousel>
          <CarouselContent>
            <CarouselItem className="flex justify-center items-center">
              <img src="/images/food1.jpg" alt="Delicious Dish 1" className="rounded-lg shadow-lg w-1/2" />
            </CarouselItem>
            <CarouselItem className="flex justify-center items-center">
              <img src="/images/food2.jpg" alt="Delicious Dish 2" className="rounded-lg shadow-lg w-1/2" />
            </CarouselItem>
            <CarouselItem className="flex justify-center items-center">
              <img src="/images/food3.jpg" alt="Delicious Dish 3" className="rounded-lg shadow-lg w-1/2" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </main>

      <footer className="bg-green-800 text-white p-5 text-center">
        <p>&copy; 2023 Food Lovers. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Panel2;