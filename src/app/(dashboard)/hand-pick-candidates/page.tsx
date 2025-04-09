import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const profiles = [
  {
    name: "Alex Smith",
    pronouns: "He/Him",
    image: "yourimageurl.com/alex.png",
    experience: "4 years of exp",
    location: "San Francisco, California",
    availability: "Open to remote",
    objective: "I enjoy challenging roles that allow me to grow my skills. I love exploring new ideas and group presentations. Passionate about user experience and interaction design.",
    experiences: [
      { role: "UI/UX Designer", company: "Asmobbin", duration: "Jan 2020 – Present • 4 years 8 months" },
      { role: "Freelance Designer", company: "Self Employed", duration: "Jan 2019 – Jan 2020 • 1 year 1 month" },
      { role: "Intern UI Designer", company: "Creative Labs", duration: "Jun 2018 – Dec 2018 • 6 months" }
    ],
    education: "BA, Design & Visual Communications",
    graduation_year: "2019 • University Of California, Berkeley",
    skills: ["UX Design", "Figma", "Mobile Application Design", "Wireframes and Prototyping", "InVision Prototyping", "Usability Testing", "A/B Testing"],
    ideal_role: "Product Designer",
    salary: "75,000",
    location_preference: "Onsite Or Remote • San Francisco",
    certifications: ["Google UX Design Certificate", "Certified Interaction Designer"],
    awards: ["Best UI Innovation Award 2022"],
    portfolio: "alexsmithdesign.com",
    linkedin: "linkedin.com/in/alexsmith",
    github: "github.com/alexsmithdesign",
    soft_skills: ["Collaboration", "Problem Solving", "Communication"]
  },
  {
    name: "Emma Johnson",
    pronouns: "She/Her",
    image: "yourimageurl.com/emma.png",
    experience: "6 years of exp",
    location: "New York, NY",
    availability: "Open to hybrid",
    objective: "Passionate about designing user-friendly digital experiences that make an impact. Skilled in research-driven design and usability testing.",
    experiences: [
      { role: "Senior UX Designer", company: "TechFlow", duration: "Feb 2019 – Present • 5 years 6 months" },
      { role: "Visual Designer", company: "PixelHub", duration: "Jan 2017 – Jan 2019 • 2 years" },
      { role: "Junior UI Designer", company: "Creative Sparks", duration: "Aug 2015 – Dec 2016 • 1 year 4 months" }
    ],
    education: "BFA, Graphic Design",
    graduation_year: "2017 • Parsons School of Design",
    skills: ["User Research", "Adobe XD", "UI Design", "Illustration", "Sketch", "Information Architecture", "Typography"],
    ideal_role: "Senior UX Designer",
    salary: "95,000",
    location_preference: "Hybrid • New York",
    certifications: ["Certified Usability Analyst", "Advanced UX Research"],
    awards: ["Top 50 Designers to Watch - 2023"],
    portfolio: "emmajohnsondesign.com",
    linkedin: "linkedin.com/in/emmajohnson",
    github: "github.com/emmajohnson",
    soft_skills: ["Creative Thinking", "Leadership", "Empathy"]
  },
  {
    name: "Daniel Carter",
    pronouns: "He/Him",
    image: "yourimageurl.com/daniel.png",
    experience: "4 years of exp",
    location: "Los Angeles, CA",
    availability: "Open to remote",
    objective: "A creative problem-solver passionate about creating engaging digital experiences.",
    experiences: [
      { role: "Frontend Developer", company: "BrightWeb", duration: "Mar 2020 – Present • 4 years 5 months" },
      { role: "Web Developer", company: "Freelance", duration: "Jan 2018 – Feb 2020 • 2 years 1 month" }
    ],
    education: "BS, Computer Science",
    graduation_year: "2018 • University of California, Los Angeles",
    skills: ["React.js", "JavaScript", "CSS Animations", "Performance Optimization", "Next.js"],
    ideal_role: "Senior Frontend Developer",
    salary: "85,000",
    location_preference: "Remote • Los Angeles"
  },
  {
    name: "Sophia Martinez",
    pronouns: "She/Her",
    image: "yourimageurl.com/sophia.png",
    experience: "6 years of exp",
    location: "Austin, TX",
    availability: "Actively looking",
    objective: "Dedicated to crafting seamless user experiences through thoughtful UI design and research.",
    experiences: [
      { role: "Lead Product Designer", company: "InnoSoft", duration: "Apr 2021 – Present • 3 years 4 months" },
      { role: "UX Researcher", company: "DesignWorks", duration: "Jun 2017 – Mar 2021 • 3 years 10 months" }
    ],
    education: "MS, Human-Computer Interaction",
    graduation_year: "2017 • Carnegie Mellon University",
    skills: ["Product Design", "UX Research", "Usability Testing", "Prototyping", "Data-Driven Design"],
    ideal_role: "Head of UX Design",
    salary: "110,000",
    location_preference: "Austin or Remote"
  },
  {
    name: "James Patel",
    pronouns: "He/Him",
    image: "yourimageurl.com/james.png",
    experience: "7 years of exp",
    location: "Seattle, WA",
    availability: "Open to new roles",
    objective: "I love working on cutting-edge projects that push the boundaries of design and technology.",
    experiences: [
      { role: "Principal UX Engineer", company: "InnovateTech", duration: "May 2018 – Present • 6 years 3 months" },
      { role: "Senior UI Designer", company: "NeoDesign", duration: "Jan 2016 – Apr 2018 • 2 years 4 months" }
    ],
    education: "BS, Software Engineering",
    graduation_year: "2015 • University of Washington",
    skills: ["Design Systems", "Figma", "User-Centered Design", "Motion Design", "Web Accessibility"],
    ideal_role: "Principal UX Engineer",
    salary: "120,000",
    location_preference: "Seattle or Remote"
  }
];

export default function Page() {
  return (
    <div className="flex h-screen">
      <aside className="fixed w-64 mt-[4rem] border-r p-4 top-0 bottom-0 bg-white shadow-md">
        <ul className="mt-4 space-y-2">
          <li className="text-sm">Skill: AI, Computer Vision</li>
          <li className="text-sm">Location: Remote, Onsite</li>
        </ul>
      </aside>

      <div className="flex-1 ml-64">
        <div className="w-full overflow-y-auto rounded-md pl-4">
          <div className="space-y-4">
            {profiles.map((profile, index) => (
              <Card key={index} className="shadow-md w-full p-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={`https://${profile.image}`}
                    alt={profile.name}
                    className="w-14 h-14 rounded-full"
                  />
                  <div>
                    <h2 className="text-xl font-semibold">{profile.name} <span className="text-gray-500">({profile.pronouns})</span></h2>
                    <p className="text-sm text-gray-500">{profile.experience} • {profile.location} • {profile.availability}</p>
                  </div>
                </div>

                {/* Looking For Section */}
                <div className="mt-4">
                  <p className="text-gray-600 text-sm">{profile.objective}</p>
                </div>

                {/* Experience Section */}
                <div className="mt-6">
                  <h3 className="text-md font-semibold">Experience</h3>
                  {profile.experiences.map((exp, index) => (
                    <div key={index} className="mt-2 text-sm">
                      <p className="font-semibold">{exp.role}</p>
                      <p className="text-gray-500">{exp.company} • {exp.duration}</p>
                    </div>
                  ))}
                </div>

                {/* Education Section */}
                <div className="mt-6">
                  <h3 className="text-md font-semibold">Education</h3>
                  <p className="text-sm">{profile.education} • <span className="text-gray-500">{profile.graduation_year}</span></p>
                </div>

                {/* Skills Section */}
                <div className="mt-6">
                  <h3 className="text-md font-semibold">Skills</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {profile.skills.map((skill, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Ideal Next Opportunity */}
                <div className="mt-6">
                  <h3 className="text-md font-semibold">Ideal Next Opportunity</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">{profile.ideal_role}</span>
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">${profile.salary}</span>
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">{profile.location_preference}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex justify-between">
                  <Button variant="outline" className="text-red-500 border-red-500">Not Interested</Button>
                  <Button className="bg-black text-white">Request to Chat</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
