"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const discussions = [
  {
    id: 154978,
    title: "The problem related to Contribution Calendar",
    author: "up-to-sky",
    date: "6 minutes ago",
    body: "Hi GitHub Support, I mirrored a project from 2015 to my GitHub (created in 2016) by mistake...",
    category: "Discussions",
    labels: ["Discussions", "Question"],
    slug: "contribution-calendar-issue",
  },
  {
    id: 154979,
    title: "How to fix a merge conflict?",
    author: "codeMaster",
    date: "2 hours ago",
    body: "I'm facing a merge conflict while working on a feature branch...",
    category: "Git",
    labels: ["Help Wanted", "Git"],
    slug: "fix-merge-conflict",
  },
  {
    id: 154980,
    title: "Best practices for React state management?",
    author: "reactGuru",
    date: "1 day ago",
    body: "What are the best ways to manage state in a large React app?",
    category: "React",
    labels: ["React", "State Management"],
    slug: "react-state-management",
  },
];

export default function DiscussionsPage() {
  return (
    <div className="min-h-screen text-black p-6">
      <h1 className="text-2xl font-bold mb-4">Discussions</h1>
      {discussions.map((discussion) => (
        <Link key={discussion.id} href={`/discussions/${discussion.slug}`} passHref>
          <Card className="mb-4 cursor-pointer">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold">{discussion.title}</h2>
              <p className="text-sm text-gray-400">By {discussion.author} • {discussion.date}</p>
              <p className="text-sm text-gray-300 mt-2">{discussion.body.substring(0, 100)}...</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
