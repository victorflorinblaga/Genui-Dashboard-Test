import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const dishes = [
  {
    name: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    color: "bg-yellow-100",
    history: "Spaghetti Carbonara originated in the 1940s in Rome and has become a staple of Italian cuisine, often enjoyed in trattorias and homes alike. The simplicity of the dish, relying on quality ingredients, reflects the culinary tradition of the region.",
    recipe: "To prepare Spaghetti Carbonara, cook spaghetti until al dente. In a bowl, whisk together eggs and pecorino cheese. In a pan, cook pancetta until crispy. Combine the cooked spaghetti, pancetta, and egg mixture quickly, ensuring the eggs create a creamy sauce. Finish with black pepper and serve hot.",
  },
  {
    name: "Chicken Tikka Masala",
    description: "Tender pieces of chicken marinated in spices and yogurt, then cooked in a creamy tomato sauce.",
    color: "bg-red-100",
    history: "This dish was created by Indian restaurants in the UK and has become a popular curry dish, loved for its rich flavor and aromatic spices. The dish showcases the influence of Indian cuisine on British culture and is often served with rice or naan bread.",
    recipe: "To make Chicken Tikka Masala, marinate chicken pieces in yogurt and spices overnight. Grill or bake the chicken until cooked. Prepare the sauce by sautéing onions, garlic, and ginger; add tomatoes and cream, and simmer. Combine the chicken with the sauce and serve with rice or naan.",
  },
  {
    name: "Sushi",
    description: "Japanese dish consisting of vinegared rice accompanied by a variety of ingredients such as seafood, vegetables, and occasionally tropical fruits.",
    color: "bg-green-100",
    history: "Sushi has origins dating back to the 8th century, originally used as a preservation method for fish in fermented rice. Over the centuries, it evolved into the many forms we enjoy today, reflecting Japan's culinary artistry and dedication to fresh ingredients.",
    recipe: "To prepare sushi, start by making sushi rice seasoned with rice vinegar, sugar, and salt. Slice fresh fish and vegetables. Lay a sheet of nori on a bamboo mat, spread sushi rice over it, add fillings, and roll tightly. Slice and serve with soy sauce and wasabi.",
  },
  {
    name: "Tacos",
    description: "Mexican dish consisting of a folded or rolled tortilla filled with a variety of ingredients including meat, beans, and vegetables.",
    color: "bg-blue-100",
    history: "Tacos are believed to have originated in the Mexican silver mines in the 18th century, evolving into a widespread street food. Today, tacos are celebrated for their versatility and creativity, often reflecting local ingredients and culinary traditions.",
    recipe: "To make tacos, cook your chosen protein (beef, chicken, or beans) with spices. Warm corn or flour tortillas. Assemble tacos by placing the protein in the tortilla and topping with onions, cilantro, salsa, and avocado. Serve with lime wedges.",
  },
  {
    name: "Moussaka",
    description: "A traditional Greek dish made with layers of eggplant, ground meat, and béchamel sauce.",
    color: "bg-purple-100",
    history: "Moussaka has a rich history in the Balkans and the Middle East, with variations across regions. The Greek version is particularly beloved, featuring layers of roasted eggplant, spiced meat, and creamy béchamel, embodying the flavors of Mediterranean cuisine.",
    recipe: "To prepare moussaka, layer sliced and roasted eggplant with a filling of ground meat (lamb or beef) seasoned with onion and spices. Top with a homemade béchamel sauce, then bake until golden. Allow to cool, slice, and serve.",
  },
];

export default function DishCarousel() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <h1 className="text-3xl font-bold mb-4">Fascinating Global Dishes</h1>
      <Carousel className="w-[700px]" infinite>
        <CarouselContent className="gap-4 px-4">
          {dishes.concat(dishes).map((dish, index) => (
            <CarouselItem key={index} className={`flex flex-col items-center p-6 ${dish.color} border border-gray-300 rounded-lg shadow-md h-[500px]`}>
              <h2 className="text-xl font-bold">{dish.name}</h2>
              <p className="text-gray-700">{dish.description}</p>
              <Accordion type="single" collapsible className="w-[90%] mt-4">
                <AccordionItem value={`history-${index}`}>
                  <AccordionTrigger>Dish History</AccordionTrigger>
                  <AccordionContent>{dish.history}</AccordionContent>
                </AccordionItem>
                <AccordionItem value={`recipe-${index}`}>
                  <AccordionTrigger>Recipe</AccordionTrigger>
                  <AccordionContent>{dish.recipe}</AccordionContent>
                </AccordionItem>
              </Accordion>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-between w-full p-4">
          <CarouselPrevious className="bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded" />
          <CarouselNext className="bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded" />
        </div>
      </Carousel>
    </div>
  );
}