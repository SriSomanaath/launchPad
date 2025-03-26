"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { categories, opencvCourses } from "../../../../dummay_data/post";
import Image from "next/image";

const CoursePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  const filteredCourses = selectedCategory === "All Courses" ? opencvCourses : opencvCourses.filter(course => course.tags.includes(selectedCategory));

  return (
    <div className="items-center mx-auto">
      <Tabs defaultValue="All Courses" onValueChange={setSelectedCategory}>
        <TabsList className="flex space-x-4 mb-6 w-fit">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} className="">{category}</TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <Card key={course.id}  className="!rounded-xl">
                  <CardHeader className="!p-3">
                    <Image src={course.thumbnail} height={200} width={200} alt={course.title} className="w-full rounded-xl mb-4" />
                    <CardTitle>{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="!p-3">
                    <p>{course.description}</p>
                    <p><strong>Duration:</strong> {course.duration}</p>
                    <p><strong>Level:</strong> {course.level}</p>
                    <p><strong>Instructor:</strong> {course.instructor}</p>
                    <p><strong>Enrolled:</strong> {course.studentsEnrolled} students</p>
                    <Button className="mt-4 w-full" onClick={() => window.location.href = `/course/${course.id}`}>
                      View Course
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default CoursePage;