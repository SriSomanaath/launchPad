"use client";

import { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2 } from "lucide-react";

interface Message {
    id: number;
    content: string;
    sender: "user" | "ai";
}

export default function JobPage() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSendMessage = async (e: FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        setMessages((prev) => [...prev, { id: prev.length + 1, content: input, sender: "user" }]);
        setInput("");
        setIsLoading(true);

        try {
            const res = await fetch("/api/gemini", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: input }),
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            setMessages((prev) => [...prev, { id: prev.length + 1, content: data.reply, sender: "ai" }]);
        } catch (error) {
            console.error("❌ API Error:", error);
            setMessages((prev) => [...prev, { id: prev.length + 1, content: "Error fetching job data.", sender: "ai" }]);
        }
        setIsLoading(false);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-screen p-6">
                        <div className="flex flex-col">
                <h1 className="text-2xl font-bold mb-4">Post a Job</h1>

                <Card className="w-full p-4">
                    <form className="space-y-4">
                        <Input placeholder="Job Title" required />

                        <Textarea placeholder="Job Description" rows={4} required />

                        <div className="grid grid-cols-2 gap-4">
                            <Input placeholder="Company Name" required />
                            <Input placeholder="Location (Remote/In-office)" required />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <Input placeholder="Salary Range (e.g., 10-15 LPA)" />
                            <Input placeholder="Experience Required (e.g., 3+ years)" required />
                        </div>

                        <Select required>
                            <SelectTrigger>
                                <SelectValue placeholder="Job Type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="full-time">Full-Time</SelectItem>
                                <SelectItem value="part-time">Part-Time</SelectItem>
                                <SelectItem value="contract">Contract</SelectItem>
                            </SelectContent>
                        </Select>
                        <Input placeholder="Industry (e.g., IT, Healthcare, Finance)" required />
                        <Input placeholder="Skills Required (e.g., React, Java, SQL)" required />
                        <Input placeholder="Education Requirement (e.g., B.Tech, MBA)" />
                        <Input placeholder="Company Website URL" type="url" />
                        <Input placeholder="Job Posting Deadline (YYYY-MM-DD)" type="date" />
                        <Input placeholder="Number of Openings (e.g., 5)" type="number" />
                        <Input placeholder="Work Mode (Hybrid, Remote, Onsite)" required />
                        <Input placeholder="Hiring Manager Name" required />
                        <Input placeholder="Hiring Manager Email" type="email" required />
                        <Input placeholder="Company Contact Number" type="tel" />

                        <Button type="submit" className="w-full">
                            Post Job
                        </Button>
                    </form>
                </Card>

            </div>
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold mb-4">AI Job Posting Helper</h1>

                <Card className="w-full p-4">
                    <ScrollArea className="h-80 border rounded-lg p-4 overflow-y-auto">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`p-2 my-2 rounded-lg w-fit max-w-[80%] ${msg.sender === "user" ? "bg-blue-500 text-white ml-auto" : "bg-gray-200 text-black"
                                    }`}
                            >
                                {msg.content}
                            </div>
                        ))}
                    </ScrollArea>

                    <form onSubmit={handleSendMessage} className="flex gap-2 mt-4">
                        <Input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Enter job role & requirements..."
                            className="flex-1"
                        />
                        <Button type="submit" disabled={isLoading}>
                            {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : "Send"}
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    );
}
