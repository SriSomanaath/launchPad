"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Sidebar = ({ setSection }: { setSection: (section: string) => void }) => {
  return (
    <aside className="w-64 rounded-md">
      <nav className="space-y-4">
        <Button variant="ghost" className="items-start justify-start w-full" onClick={() => setSection("profile")}>
          Profile
        </Button>
        <Button variant="ghost" className="items-start justify-start w-full" onClick={() => setSection("language")}>
          Language
        </Button>
        <Button variant="ghost" className="items-start justify-start w-full" onClick={() => setSection("password")}>
          Change Password
        </Button>
      </nav>
    </aside>
  );
};

export default function ProfilePage() {
  const [section, setSection] = useState("profile");
  const [profileCompletion, setProfileCompletion] = useState(21);
  const { data: session, status } = useSession();
  console.log("DBG:session", session);
  console.log("DBG:status", status);

  return (
    <div className="flex space-x-6">
      <Sidebar setSection={setSection} />

      <div className="flex-1 space-y-6">
        {section === "profile" && (
            <div className="space-y-6">
      {/* Profile Completion Progress */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold">Profile Completion</h2>
        </CardHeader>
        <CardContent className="flex w-full items-center gap-6 space-y-4">
            <div>
                <Image
                src={session?.user?.image || ''}
                alt="Profile"
                height={64}
                width={64}
                className="w-16 h-16 rounded-full"
                />
            </div>
            <div>
                <Progress value={profileCompletion} className="h-3" />
                <p className="text-sm text-gray-500 mt-2">{profileCompletion}% complete</p>                
            </div>
        </CardContent>
      </Card>

      {/* Profile Details */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold">Profile Information</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" value={session?.user?.name || ''} placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" value={session?.user?.email || ''} placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" placeholder="Enter your phone number" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" placeholder="City, Country" />
          </div>
          <div className="space-y-2">
            <Label>Biography</Label>
            <Textarea id="bio" placeholder="Tell us about yourself" className="mt-1" />
          </div>
          <Button>Save</Button>
        </CardContent>
      </Card>

      {/* Software & Skills */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold">Technical Skills</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="skills">Skills</Label>
            <Input id="skills" placeholder="E.g., JavaScript, React, Node.js" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="experience">Experience (Years)</Label>
            <Input id="experience" type="number" placeholder="Enter experience in years" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="projects">Key Projects</Label>
            <Textarea id="projects" placeholder="Briefly describe your top projects" />
          </div>
          <Button>Save</Button>
        </CardContent>
      </Card>

      {/* Social & Links */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold">Social & Portfolio Links</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="github">GitHub</Label>
            <Input id="github" placeholder="GitHub Profile URL" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="linkedin">LinkedIn</Label>
            <Input id="linkedin" placeholder="LinkedIn Profile URL" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="portfolio">Portfolio</Label>
            <Input id="portfolio" placeholder="Portfolio Website URL" />
          </div>
          <Button>Save</Button>
        </CardContent>
      </Card>
    </div>
        )}

        {section === "language" && (
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Language</h2>
              <p className="text-sm text-gray-500">Choose your preferred language</p>
            </CardHeader>
            <CardContent>
              <Button className="mt-4">Save</Button>
            </CardContent>
          </Card>
        )}

        {section === "password" && (
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Change Password</h2>
              <p className="text-sm text-gray-500">For security, do not share your password.</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input type="password" id="current-password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input type="password" id="new-password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input type="password" id="confirm-password" />
              </div>
              <Button>Update Password</Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
