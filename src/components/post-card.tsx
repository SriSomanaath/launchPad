import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThumbsUp, MessageSquare, Trash2 } from "lucide-react";
import { TfiComments } from "react-icons/tfi";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";

interface Comment {
  id: number;
  user: string;
  userImage?: string;
  text: string;
  date?: string;
  isAdmin?: boolean;
  replies?: Comment[];
}

interface PostProps {
  id: number;
  author: string;
  authorTitle?: string;
  authorImage?: string;
  date: string;
  content: string;
  likes: number;
  likedUsers: { user: string; userImage?: string }[];
  comments: Comment[];
  onLike: (postId: number) => void;
  onComment: (postId: number, comment: string) => void;
  onDeleteComment: (postId: number, commentId: number) => void;
  onReply: any;
}

const PostCard: React.FC<PostProps> = ({
  id,
  author,
  authorTitle,
  authorImage = "",
  date,
  content,
  likes,
  likedUsers,
  comments,
  onLike,
  onComment,
  onDeleteComment,
  onReply
}) => {
  const { data: session } = useSession();
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");

  const sessionUserImage = session?.user?.image || "";
  const sessionUserName = session?.user?.name || "User";

  const isLiked = likedUsers.some((user) => user.user === sessionUserName);

  return (
    <Card key={id} className="mb-4 rounded-lg border border-gray-300 shadow-sm bg-white">
      {/* Header Section */}
      <CardHeader className="p-4">
        <div className="flex items-center gap-3">
          <Avatar className="rounded-md">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-lg">{author}</CardTitle>
            <span className="text-md text-gray-500">{date}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{authorTitle || author}</h3>
        <p className="text-md mb-4 text-gray-700">{content}</p>
        {likedUsers.length > 0 && (
          <div className="flex items-center mt-3 space-x-1">
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
            <span className="text-xs text-gray-500">Liked by Vikas Gupta 99 more</span>
          </div>
        )}
        <div className="flex items-center gap-4 mt-4 pt-2 border-t">
          <Button variant="ghost" size="icon" onClick={() => onLike(id)}>
            <ThumbsUp className={`!h-5 !w-5 ${isLiked ? "text-purple-800" : "text-gray-500"}`} />
            <span className="ml-1 text-sm">{likes}</span>
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setShowComments(!showComments)}>
            <MessageSquare className="!h-5 !w-5 text-gray-600" />
            <span className="ml-1 text-sm">{comments.length}</span>
          </Button>
        </div>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={showComments ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden"
        >
          <div className="mt-4 space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="flex flex-col bg-gray-50 p-3 rounded-md">
                {/* Parent Comment */}
                <div className="flex items-start gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={comment.userImage || ""} alt={comment.user} />
                    <AvatarFallback className="bg-gray-300">{comment.user.charAt(0)}</AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-sm">{comment.user}</p>
                      {comment.isAdmin && (
                        <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-md">ADMIN</span>
                      )}
                      <span className="text-gray-500 text-xs">{comment.date}</span>
                    </div>
                    <p className="text-sm text-gray-800">{comment.text}</p>

                    {/* Reply & Like */}
                    <div className="flex gap-4 mt-1 text-xs text-gray-600">
                      <button onClick={() => onReply(comment.id)} className="hover:underline">Reply</button>
                      <button onClick={() => onLike(comment.id)} className="hover:underline">Like</button>
                    </div>
                  </div>
                </div>

                {/* Replies */}
                {comment.replies && comment.replies.length > 0 && (
                  <div className="pl-10 mt-3 space-y-3">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="flex items-start gap-3">
                        <Avatar className="w-7 h-7">
                          <AvatarImage src={reply.userImage || ""} alt={reply.user} />
                          <AvatarFallback className="bg-gray-300">{reply.user.charAt(0)}</AvatarFallback>
                        </Avatar>

                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="font-semibold text-xs">{reply.user}</p>
                            {reply.isAdmin && (
                              <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-md">ADMIN</span>
                            )}
                            <span className="text-gray-500 text-xs">{reply.date}</span>
                          </div>
                          <p className="text-sm text-gray-800">{reply.text}</p>

                          {/* Reply & Like for Nested Comments */}
                          <div className="flex gap-4 mt-1 text-xs text-gray-600">
                            <button onClick={() => onReply(reply.id)} className="hover:underline">Reply</button>
                            <button onClick={() => onLike(reply.id)} className="hover:underline">Like</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Comment Input */}
            <div className="flex items-center gap-3 mt-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src={sessionUserImage} alt="User" />
                <AvatarFallback className="bg-gray-300">{sessionUserName.charAt(0)}</AvatarFallback>
              </Avatar>
              <Input
                placeholder="Write a comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && commentText.trim()) {
                    onComment(id, commentText.trim());
                    setCommentText("");
                  }
                }}
              />
            </div>
          </div>
        </motion.div>

      </CardContent>
    </Card>
  );
};

export default PostCard;
