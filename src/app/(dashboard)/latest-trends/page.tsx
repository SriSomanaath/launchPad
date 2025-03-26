"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const trends = [
  {
    title: "AI-powered Image Recognition",
    description:
      "Modern AI can classify objects in images with near-human accuracy.",
    author: "Alice Johnson",
    avatar: "https://github.com/shadcn.png",
  },
  {
    title: "Generative AI Models",
    description: "Text-to-image and text-to-video models are changing media creation.",
    author: "Bob Williams",
    avatar: "https://github.com/shadcn.png",
  },
  {
    title: "Self-Supervised Learning",
    description: "AI models can now learn from unlabelled data, improving efficiency.",
    author: "Charlie Brown",
    avatar: "https://github.com/shadcn.png",
  },
  {
    title: "AI in Healthcare",
    description: "AI-driven diagnostics are revolutionizing the medical industry.",
    author: "Dana Smith",
    avatar: "https://github.com/shadcn.png",
  },
];

export default function Page(): JSX.Element {
  return (
    <div className="w-full py-10">
      <div className="container mx-auto flex flex-col gap-16">
        <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
          Latest Trends in Computer Vision & AI
        </h2>

        {["Image Recognition", "Generative AI", "Self-Supervised Learning", "AI in Healthcare"].map(
          (trendTitle, index) => (
            <TrendCarousel key={index} title={trendTitle} data={trends} />
          )
        )}
      </div>
    </div>
  );
}

function TrendCarousel({
  title,
  data,
}: {
  title: string;
  data: { title: string; description: string; author: string; avatar: string }[];
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [api, current]);

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem className="lg:basis-1/2" key={index}>
              <div className="bg-muted rounded-md h-full p-6 flex justify-between flex-col">
                <User className="w-8 h-8 stroke-1" />
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <h3 className="text-xl tracking-tight">{item.title}</h3>
                    <p className="text-muted-foreground max-w-xs text-base">
                      {item.description}
                    </p>
                  </div>
                  <p className="flex flex-row gap-2 text-sm items-center">
                    <span className="text-muted-foreground">By</span>
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={item.avatar} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span>{item.author}</span>
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
