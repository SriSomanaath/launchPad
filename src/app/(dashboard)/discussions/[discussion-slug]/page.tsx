"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface Comment {
  author: string;
  text: string;
}

interface Discussion {
  id: number;
  title: string;
  author: string;
  date: string;
  body: string;
  category: string;
  labels: string[];
  slug: string;
  comments?: Comment[];
}

const discussions: Discussion[] = [
  {
    id: 154978,
    title: "The problem related to Contribution Calendar",
    author: "up-to-sky",
    date: "6 minutes ago",
    body: "Hi GitHub Support, I mirrored a project from 2015 to my GitHub (created in 2016) by mistake...",
    category: "Discussions",
    labels: ["Discussions", "Question"],
    slug: "contribution-calendar-issue",
    comments: [],
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
    comments: [],
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
    comments: [],
  },
];

export default function DiscussionDetailPage() {
  const { "discussion-slug": slug } = useParams(); // Extract slug from URL
  const [discussion, setDiscussion] = useState<Discussion | null>(null);
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    if (slug) {
      const foundDiscussion = discussions.find((d) => d.slug === slug);
      if (foundDiscussion) {
        setDiscussion(foundDiscussion);
        setComments(foundDiscussion.comments || []);
      }
    }
  }, [slug]);

  const addComment = () => {
    if (comment.trim()) {
      setComments((prevComments) => [...prevComments, { author: "You", text: comment }]);
      setComment("");
    }
  };

  if (!discussion) {
    return (
      <div className="min-h-screen text-black p-6">
        <h1 className="text-2xl font-bold">Discussion Not Found</h1>
        <p className="text-gray-500">The discussion you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="text-black p-6">
      <h1 className="text-2xl font-bold">{discussion.title}</h1>
      <p className="text-sm text-gray-500">Posted by {discussion.author} • {discussion.date}</p>

      <Card className="mt-4">
        <CardContent className="p-4">
          <p className="text-sm text-gray-300">{discussion.body}</p>
        </CardContent>
      </Card>

      <h2 className="text-lg font-semibold mt-6">Comments</h2>
      <div className="mt-2">
        {comments.length > 0 ? (
          comments.map((c, index) => (
            <Card key={index} className="mt-2">
              <CardContent className="p-3">
                <p className="text-sm font-semibold">{c.author}</p>
                <p className="text-sm text-gray-300">{c.text}</p>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-gray-500">No comments yet.</p>
        )}
      </div>

      <div className="mt-4">
        <Textarea
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full text-black"
        />
        <Button onClick={addComment} className="mt-2 bg-blue-500 hover:bg-blue-600">
          Comment
        </Button>
      </div>
    </div>
  );
}
