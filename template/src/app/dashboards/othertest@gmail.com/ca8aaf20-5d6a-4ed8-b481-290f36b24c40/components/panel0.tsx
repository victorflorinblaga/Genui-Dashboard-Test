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
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HeroPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      <h1 className="text-5xl font-bold text-center mb-4">Delicious Food Awaits</h1>
      <p className="text-lg text-center mb-8">Explore a world of flavors with our wonderful recipes.</p>
      
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-4 mb-8">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Appetizers</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Bruschetta</NavigationMenuLink>
              <NavigationMenuLink>Stuffed Mushrooms</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Main Course</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Pasta Primavera</NavigationMenuLink>
              <NavigationMenuLink>Grilled Salmon</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Desserts</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Chocolate Mousse</NavigationMenuLink>
              <NavigationMenuLink>Tiramisu</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <img src="/images/dish1.jpg" alt="Delicious Dish 1" className="w-full rounded-lg" />
          </CarouselItem>
          <CarouselItem>
            <img src="/images/dish2.jpg" alt="Delicious Dish 2" className="w-full rounded-lg" />
          </CarouselItem>
          <CarouselItem>
            <img src="/images/dish3.jpg" alt="Delicious Dish 3" className="w-full rounded-lg" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}