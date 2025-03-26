"use client";

import { useState } from "react";
import { aiEvents } from "../../../../dummay_data/post";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Sparkles, Users } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import WelcomeCard from "@/components/welcom";
import Image from "next/image";

interface Event {
  id: string;
  name: string;
  location: string;
  venue: string;
  date: string;
  duration: string;
  description: string;
  whenToAttend: string;
  pastEvents: { year: number; date: string; location: string; attendees: number }[];
  upcomingEvents: { year: number; date: string; location: string }[];
  attendeesCount: number;
  maxCapacity: number;
  eventType: string;
  registrationFees?: { students?: string; professionals?: string; VIP?: string };
  prizes: string;
  sponsors: string[];
  judgingCriteria: string[];
  speakers: { name: string; title: string }[];
  website: string;
  image: string;
  contact: { email: string; phone: string };
}

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <Button variant="link" className="text-blue-600 font-semibold" onClick={() => setSelectedEvent(null)}>
        ← Back to All Events
      </Button>
      {selectedEvent ? (
        <div className="flex flex-col md:flex-row gap-2">
          <div className="w-full md:w-2/3 flex flex-col gap-4 border rounded-lg shadow-md bg-white p-4">
            <WelcomeCard
              title={<>Your journey <br /> begins today</>}
              imageSrc="/welcome-card.png"
            />
            <h1 className="text-2xl font-bold">{selectedEvent.name}</h1>
            <p className="text-gray-600 mt-2">{selectedEvent.description}</p>
            <Badge variant="outline">{selectedEvent.eventType}</Badge>

            <div className="mt-4">
              <p className="text-gray-700">
                <strong>📍 Location:</strong> {selectedEvent.venue}, {selectedEvent.location}
              </p>
              <p className="text-gray-700">
                <strong>📅 Date:</strong> {selectedEvent.date} ({selectedEvent.duration})
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold">🎟 Registration Fees</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>👨‍🎓 Students: {selectedEvent.registrationFees?.students}</li>
                <li>💼 Professionals: {selectedEvent.registrationFees?.professionals}</li>
                <li>⭐ VIP: {selectedEvent.registrationFees?.VIP}</li>
              </ul>
            </div>

            <a
              href={selectedEvent.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-blue-600 hover:underline"
            >
              🌐 Visit Event Website
            </a>
          </div>

          <div className="w-full md:w-1/3 p-4 h-fit flex flex-col gap-4 border rounded-lg shadow-md bg-white">
            <p className="text-lg font-semibold">{selectedEvent.date}</p>
            <p className="text-gray-500">{selectedEvent.location} - {selectedEvent.venue}</p>

            <div className="mt-4 flex flex-col gap-2">
              <Button variant="default" onClick={() => setShowPopup(true)}>RSVP</Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Calendar size={16} /> Add to Calendar
              </Button>
            </div>

            <div className="flex mt-4">
              <div className="flex -space-x-2">
                <Image
                  className="rounded-full ring-2 ring-background"
                  src="https://originui.com/avatar-80-03.jpg"
                  width={25}
                  height={25}
                  alt="Avatar 01"
                />
                <Image
                  className="rounded-full ring-2 ring-background"
                  src="https://originui.com/avatar-80-04.jpg"
                  width={25}
                  height={25}
                  alt="Avatar 02"
                />
                <Image
                  className="rounded-full ring-2 ring-background"
                  src="https://originui.com/avatar-80-05.jpg"
                  width={25}
                  height={25}
                  alt="Avatar 03"
                />
                <Image
                  className="rounded-full ring-2 ring-background"
                  src="https://originui.com/avatar-80-06.jpg"
                  width={25}
                  height={25}
                  alt="Avatar 04"
                />
              </div>
              <p className="text-gray-500 ml-1">Attended by   {selectedEvent.attendeesCount}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-6 max-w-3xl mx-auto">
          {aiEvents.map((event: Event) => (
            <Card key={event.id} className="cursor-pointer !p-0" onClick={() => setSelectedEvent(event)}>
              <CardHeader className="!p-3">
                <Image src={event.image} height={200} width={200} alt={event.name} className="rounded-lg w-full h-full object-cover" />
              </CardHeader>
              <CardContent className="!p-3">
                <CardTitle>{event.name}</CardTitle>
                <p className="text-sm text-gray-500">{event.date} • {event.location}</p>
                <p className="text-sm text-gray-500">
                  {event.description.length > 150
                    ? `${event.description.slice(0, 150)}...`
                    : event.description}
                </p>
                <Badge variant="outline">{event.eventType}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Dialog open={showPopup} onOpenChange={setShowPopup}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>🎉 Thank you for registering!</DialogTitle>
          </DialogHeader>
          <p>We'll send you a reminder before the event.</p>
          <div className="flex flex-col gap-2 mt-4">
            <Button variant="outline" className="flex items-center gap-2">
              <Calendar size={16} /> 2nd Feb, 8 AM - 9 AM EST
            </Button>
            <Button variant="default">Add to calendar</Button>
          </div>
          <Button variant="default" className="mt-4 w-full" onClick={() => setShowPopup(false)}>Done</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
