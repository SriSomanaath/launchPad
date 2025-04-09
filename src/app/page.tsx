"use client";

import { ArrowUpRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spot-light";
import { Card, CardContent } from "@/components/ui/card";
import { SplineScene } from "@/components/ui/splite";
import Link from "next/link";
import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const industries = [
  {
    title: "Launch Pad",
    points: [
      "View annotated datasets",
      "Start new vision project",
      "Upload image/video data",
      "Train/test ML models",
      "Monitor GPU usage",
      "Access project templates",
    ],
    description:
      "The Launch Pad serves as the starting point for Computer Vision Engineers. It includes project setup tools, dataset managers, and quick access to training pipelines.",
    uiNotes:
      "Use a dashboard with quick-start cards, upload drag-and-drop zones, model progress bars, and dataset snapshot previews."
  },
  {
    title: "Community",
    points: [
      "Ask questions or discuss CV papers",
      "Join project collaborations",
      "Share code snippets",
      "Get feedback on model performance",
      "Attend CV meetups/webinars",
      "Earn community badges",
    ],
    description:
      "The Community hub connects engineers with peers to exchange knowledge, collaborate on open-source CV projects, and grow together.",
    uiNotes:
      "Integrate a forum-style interface with markdown support, reaction emojis, tag filters, and a leaderboard-style badge system."
  },
  {
    title: "Recruitment",
    points: [
      "View open CV engineer jobs",
      "Apply directly with GitHub/portfolio",
      "Track application status",
      "Connect with hiring managers",
      "Prepare with mock interviews",
      "Showcase published projects",
    ],
    description:
      "The Recruitment section helps engineers find job opportunities, showcase their skills, and connect with hiring managers actively seeking CV talent.",
    uiNotes:
      "Use card layouts for job postings, resume uploaders, status trackers, and an embedded video interview or calendar integration module."
  },
];

const Page = () => {
  const heading = "Computer Vision Community";
  const description =
    "Join a thriving community of computer vision enthusiasts, researchers, and professionals. Stay updated with the latest AI & CV trends, explore deep learning innovations.";
  const button = {
    text: "Get Started",
    url: "https://opencv.org",
  };

  return (
    <main>
      <Navbar />
      <section className="py-28 relative overflow-hidden">
        <div className="container relative text-center z-10">
          <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
            <h1 className="text-6xl leading-none font-extrabold">{heading}</h1>
            <p className="text-balance text-muted-foreground lg:text-lg">{description}</p>
          </div>
          <Image
            height={100}
            width={100} alt="Avatar"
            src="/dp3.jpeg"
            className="floating-avatar absolute top-[20%] left-[5%] w-18 h-18 rounded-full border-2 border-white shadow-md animate-float-slow"
          />
          <Image
            height={100}
            width={100}
            alt="Avatar"
            src="/dp4.jpeg"
            className="floating-avatar absolute top-[50%] right-[10%] w-18 h-18 rounded-full border-2 border-white shadow-md animate-float"
          />
          <Image
            height={100}
            width={100} alt="Avatar"
            src="/dp11.jpg"
            className="floating-avatar absolute bottom-[5%] left-[20%] w-18 h-18 rounded-full border-2 border-white shadow-md animate-float-reverse"
          />
          <Button
            asChild
            size="lg"
            className="bg-black text-white border rounded-full mt-10 hover:text-black hover:border-black hover:bg-white"
          >
            <a href={button.url}>{button.text}</a>
          </Button>
        </div>
      </section>
      <section>
        <div className="w-full">
          <div className="container mx-auto">
            <div className="flex flex-col gap-10">
              <div className="flex gap-4 flex-col items-start">
                <div>
                  <Badge>Platform</Badge>
                </div>
                <div className="flex gap-2 flex-col">
                  <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                  Launch your Computer Vision journey.
                  </h2>
                  <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                  A platform connecting AI enthusiasts, hiring managers, and projects — all in one place.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white border rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
                  <User className="w-8 h-8 stroke-1" />
                  <div className="flex flex-col">
                    <h3 className="text-xl tracking-tight">Post AI Jobs</h3>
                    <p className="text-muted-foreground max-w-xs text-base">
                    Connect with top CV talent looking for impactful roles in AI-driven startups.
                    </p>
                  </div>
                </div>
                <div className="bg-white border aspect-square">
                <div className="w-full h-[500px] rounded-none relative flex">
                    <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />

                    <div className="hidden lg:block flex-1 relative z-0">
                      <div className="absolute inset-0 mx-auto h-full overflow-hidden">
                        <SplineScene
                          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                          className="w-full h-full bg-gradient-to-b from-white to-blue-100"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border aspect-square p-6 flex justify-between flex-col">
                  <User className="w-8 h-8 stroke-1" />
                  <div className="flex flex-col">
                    <h3 className="text-xl tracking-tight">Find Talent</h3>
                    <p className="text-muted-foreground max-w-xs text-base">
                    Explore a curated pool of skilled engineers specializing in computer vision and ML.
                    </p>
                  </div>
                </div>
                <div className="bg-white border h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
                  <User className="w-8 h-8 stroke-1" />
                  <div className="flex flex-col">
                    <h3 className="text-xl tracking-tight">Build & Grow</h3>
                    <p className="text-muted-foreground max-w-xs text-base">
                    Collaborate with peers, get mentored, showcase projects — and grow your CV/AI career from zero to 100.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20 px-4">
        <div className="container mx-auto text-center">
          <p className="uppercase text-sm tracking-widest text-muted-foreground mb-2">
            Trusted Across 350+ Enterprises
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold">
            Empowering your journey with AI & Computer Vision
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="text-left bg-muted/50 rounded-2xl shadow-md h-full w-full max-w-sm mx-auto"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 border-b pb-1">{industry.title}</h3>
                  <ul className="text-md text-muted-foreground list-disc list-inside space-y-1 mb-4">
                    {industry.points.map((point, i) => (
                      <li key={i} className="pb-4">{point}</li>
                    ))}
                  </ul>
                  <Link
                    href="#"
                    className="text-sm text-[#1e1e1e] font-medium inline-flex items-center gap-1 hover:underline"
                  >
                    Learn More <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center justify-center text-center bg-gradient-to-b from-white to-blue-200 py-20 px-4">
          <h2 className="text-2xl lg:text-5xl font-bold">
            It's time to upgrade <br />
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-cover bg-center rounded-full" style={{ backgroundImage: "url('/welcome-card.png')" }}></span>
              <span className="relative text-transparent bg-clip-text">your</span>
            </span>{' '}
            recruiting process
            <span className="inline-block ml-2 w-10 h-10 rounded-full overflow-hidden align-middle">
              <img src="/welcome-card.png" alt="Avatar" className="w-full h-full object-cover" />
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-lg text-gray-800">
            Ready to take your department from a cost center to a strategic revenue division? We’re here to help.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800">
              Schedule a demo
            </button>
            <button className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800">
              Watch a product tour video
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Page;
