"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { posts } from "../../../../dummay_data/post";
import WelcomeCard from "@/components/welcom";
import { TweetGrid } from "@/components/tweet-grid";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import PostCard from "@/components/post-card";

const events = [
  { date: "7", month: "MAR", title: "Weekly Q&A: Building healthy habits" },
  { date: "9", month: "MAR", title: "Mindfulness w/ surprise special guest" },
  { date: "14", month: "MAR", title: "Weekly Coaching Session Live call" },
  { date: "21", month: "MAR", title: "Foundations of healthy sustainable relationships" },
];

const exampleTweets = [
  "1742983975340327184",
  // "1743049700583116812",
  // "1754067409366073443",
]

export default function Page() {
  const [postData, setPostData] = useState(posts);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const onLike = (postId: string | number) => {
    // Ensure postId is treated correctly
    const id = Number(postId); // Convert string to number if necessary
    console.log(`Liked post with ID: ${id}`);
  };

  const onComment = (postId: string | number, comment: string) => {
    const id = Number(postId);
    console.log(`Comment added to post ${id}: ${comment}`);
  };

  const onDeleteComment = (postId: string | number, commentId: string | number) => {
    const postID = Number(postId);
    const commentID = Number(commentId);
    console.log(`Deleted comment ${commentID} from post ${postID}`);
  };

  const handleReply = (commentId: number) => {
    console.log(`Replying to comment ID: ${commentId}`);
  };

  // Auto-close sidebar on small screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full max-w-screen-xl mx-auto">
      <div className="flex-1 space-y-4">
        <WelcomeCard title={<>Your journey <br /> begins today</>} imageSrc="/welcome-card.png" />
        {postData.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            author={post.author}
            authorTitle={post.title}
            authorImage={post.authorImage}
            date={post.date}
            content={post.content}
            likes={post.likes}
            likedUsers={post.likedUsers}
            onReply={handleReply} 
            comments={post.comments}
            onLike={onLike}
            onComment={onComment}
            onDeleteComment={onDeleteComment}
          />
        ))}
      </div>

      <div
        className={cn(
          "lg:w-1/4 w-full lg:relative fixed top-0 right-0 h-screen bg-white transform transition-transform duration-300",
          isSidebarOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        )}
      >
        <div className="fixed top-4 right-4 z-50">
          <Button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-black bg-white shadow-md rounded-md px-3 py-2"
          >
            {isSidebarOpen ? <PanelLeftClose /> : <PanelLeftOpen />}
          </Button>
        </div>

        <Card className="w-full lg:w-auto">
          <CardHeader className="!p-3 !pb-0">
            <CardTitle className="text-lg font-semibold">Upcoming events</CardTitle>
          </CardHeader>
          <CardContent className="!p-3">
            <div className="space-y-4">
              {events.map((event, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex flex-col items-center justify-center w-12 h-14 bg-gray-200 rounded-lg">
                    <span className="text-xl font-bold">{event.date}</span>
                    <span className="text-sm text-gray-600">{event.month}</span>
                  </div>
                  <p className="text-sm text-gray-800">{event.title}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

    </div>

  );
}
