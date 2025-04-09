"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import WelcomeCard from "@/components/welcom";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
}

const certificates: Certificate[] = [
  { title: "OpenCV Certification", issuer: "OpenCV University", date: "March 2024" },
  { title: "AI Fundamentals", issuer: "Deep Learning Institute", date: "April 2024" },
  { title: "Generative AI Specialization", issuer: "AI Academy", date: "May 2024" },
];

export default function CertificatesPage() {
  return (
    <div className="space-y-4">
    <WelcomeCard title={<>Your journey <br /> begins today</>} imageSrc="/welcome-card.png" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificates.map((cert, index) => (
          <Card key={index} className="shadow-md">
            <CardHeader>
              <CardTitle>{cert.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Issued by: {cert.issuer}</p>
              <Badge className="mt-2">{cert.date}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
