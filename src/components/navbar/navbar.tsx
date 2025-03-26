"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { Button } from "../ui/button";

const NAV_ITEMS = [
  {
    title: "Image Classification",
    href: "/docs/computer-vision/image-classification",
    description:
      "Learn how AI models classify images into different categories with deep learning techniques.",
  },
  {
    title: "Object Detection",
    href: "/docs/computer-vision/object-detection",
    description:
      "Detect and locate objects in images or videos using advanced AI models like YOLO and Faster R-CNN.",
  },
  {
    title: "Pose Estimation",
    href: "/docs/computer-vision/pose-estimation",
    description:
      "Track human body movements and key points using AI-powered pose estimation models.",
  },
  {
    title: "Semantic Segmentation",
    href: "/docs/computer-vision/semantic-segmentation",
    description:
      "Segment images into meaningful regions to identify objects and their boundaries with pixel-level precision.",
  },
  {
    title: "Face Recognition",
    href: "/docs/computer-vision/face-recognition",
    description:
      "Explore AI techniques for detecting and recognizing faces in images and videos with deep learning.",
  },
  {
    title: "Generative AI",
    href: "/docs/computer-vision/generative-ai",
    description:
      "Discover how AI can generate realistic images, videos, and art using models like GANs and Stable Diffusion.",
  },
];

const Navbar = () => {
  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-xl font-bold">
            <Image src="/Logo_2.png" alt="launch pad" height={160} width={160} />
          </Link>

          <NavigationMenu>
            <NavigationMenuList className="flex space-x-6">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Launch Pad</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">AI & Computer Vision Hub</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Explore the latest in AI-powered vision technology, from object detection to generative AI.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs/computer-vision/introduction" title="Introduction">
                      Learn the fundamentals of Computer Vision and how AI powers image analysis.
                    </ListItem>
                    <ListItem href="/docs/computer-vision/image-classification" title="Image Classification">
                      Understand how AI models classify images into different categories.
                    </ListItem>
                    <ListItem href="/docs/computer-vision/object-detection" title="Object Detection">
                      Detect and locate objects in images or videos with AI models like YOLO and Faster R-CNN.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Community</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {NAV_ITEMS.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/home" passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Hire talent
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div>
          <Button>
            <Link href="/auth/login" passHref>Sign In</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
