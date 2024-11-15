import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HeroPage = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-cover bg-food-image">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>About</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Recipes</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Italian</NavigationMenuLink>
              <NavigationMenuLink>Mexican</NavigationMenuLink>
              <NavigationMenuLink>Desserts</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      <h1 className="text-4xl font-bold text-white">Delicious Food Awaiting You</h1>
      <p className="mt-4 text-lg text-white">Explore our collection of tasty recipes and culinary delights.</p>

      <Carousel className="mt-8">
        <CarouselContent>
          <CarouselItem>
            <img src="/images/dish1.jpg" alt="Dish 1" className="w-full rounded-lg" />
          </CarouselItem>
          <CarouselItem>
            <img src="/images/dish2.jpg" alt="Dish 2" className="w-full rounded-lg" />
          </CarouselItem>
          <CarouselItem>
            <img src="/images/dish3.jpg" alt="Dish 3" className="w-full rounded-lg" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      
      <HoverCard>
        <HoverCardTrigger className="mt-8 p-2 bg-green-500 rounded text-white">Discover More</HoverCardTrigger>
        <HoverCardContent>
          Find recipes, tips, and more to enhance your culinary journey.
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}

export default HeroPage;