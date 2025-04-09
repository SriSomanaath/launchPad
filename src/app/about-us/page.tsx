import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar/navbar";
import VideoPlayer from "@/components/ui/video-player";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const teamMembers = [
    { name: "Person One", title: "Role One", linkedin: "#" },
    { name: "Person Two", title: "Role Two", linkedin: "#" },
    { name: "Person Three", title: "Role Three", linkedin: "#" },
    { name: "Person Four", title: "Role Four", linkedin: "#" },
    { name: "Person Five", title: "Role Five", linkedin: "#" },
    { name: "Person Six", title: "Role Six", linkedin: "#" },
    { name: "Person Seven", title: "Role Seven", linkedin: "#" },
    { name: "Person Eight", title: "Role Eight", linkedin: "#" },
];

export default function Page() {
    return (
        <main className="bg-white text-black">
            <Navbar />
            <section className="bg-gray-50 text-black px-6 py-16 md:py-24">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        Here for your contact center.<br />
                        <span className="text-black">And your success.</span>
                    </h1>
                    <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
                        What's really happening in your business? The answer to that question lies in the millions
                        of interactions between your customers and your brand. If you could listen in on every one
                        of them, you'd know exactly what was up--and down. But most companies have visibility to only
                        2% of their customer interactions.
                    </p>
                    <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
                        We're here to change that. To help you get a complete picture of every customer conversation.
                        We work side-by-side with your team to ensure you're seen, heard, and supported as you transition
                        into a data-driven operation.
                    </p>
                    <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
                        We're the people who love to see other people succeed. And we'd like to do that for you.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 sm:grid-cols-3 max-w-5xl mx-auto text-center">
                    <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase">Investment</h3>
                        <p className="text-2xl font-bold">$213 Million</p>
                        <p className="mt-2 text-sm text-gray-600">
                            We've raised $213 million to date, with our latest round of Series C funding in 2022.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase">Our Team</h3>
                        <p className="text-2xl font-bold">315 People</p>
                        <p className="mt-2 text-sm text-gray-600">
                            We're from all over the world with diverse experience in contact center ops, CX, data science, and more.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase">Our Impact</h3>
                        <p className="text-2xl font-bold">350+ Enterprises</p>
                        <p className="mt-2 text-sm text-gray-600">
                            We're serving companies in FinServ, healthcare, retail, insurance, and education.
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <VideoPlayer src="https://opencv.org/university/wp-content/uploads/sites/4/2025/01/OpenCV-University.mp4" />
            </section>
            <section className="bg-white px-6 py-16">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-12">Our Team</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                        {teamMembers.map((member, idx) => (
                            <div key={idx} className="text-center">
                                <img
                                    src="/welcome-card.png"
                                    alt={member.name}
                                    className="w-32 h-32 md:w-36 md:h-36 mx-auto object-cover rounded-lg border border-gray-300"
                                />
                                <h3 className="mt-4 font-semibold">{member.name}</h3>
                                <p className="text-sm text-gray-500">{member.title}</p>
                                {member.linkedin && (
                                    <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                        <LinkedInLogoIcon
                                            className="inline-block w-4 h-4 mt-1"
                                        />
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
