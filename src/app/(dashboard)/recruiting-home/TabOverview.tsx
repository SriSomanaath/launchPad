import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const assessments = [
  { type: "Coding Challenge", title: "Front-End Web Developer", description: "HTML, CSS, JavaScript, and some React", time: "3hr Time Limit" },
  { type: "Multiple Choice", title: "Android", description: "Focused on native android development and Java", time: "1hr Average" },
  { type: "Multiple Choice", title: "iOS", description: "Covering native iOS development and the Swift language", time: "1hr Average" },
  { type: "Multiple Choice", title: "Full Stack", description: "Based on both front end and back end web topics", time: "1hr Average" },
  { type: "Multiple Choice", title: "Back End", description: "Focused on topics around SQL, databases, architecture", time: "1hr Average" },
  { type: "Multiple Choice", title: "Front End", description: "Covering topics related to JavaScript, HTML, CSS development", time: "1hr Average" },
  { type: "Coding Challenge", title: "Back-End Web Developer", description: "Java, Ruby, Python", time: "3hr Time Limit" },
  { type: "Coding Challenge", title: "Senior Software Engineer", description: "Complex algorithmic programming", time: "3hr Time Limit" },
  { type: "Soft Skills", title: "Video Resume", description: "Get up close and personal with future potential employers.", time: "3min Average" },
];

export default function TabsOverview() {
  return (
    <div className="space-y-6">
      {/* Recommended Assessment */}
      <Card className="bg-blue-50 p-6">
        <CardHeader>
          <CardTitle>Recommended Assessment</CardTitle>
          <p className="text-sm text-muted-foreground">
            Get a badge that features you to recruiters. Reusable across job applications.
            <br />
            <span className="font-semibold">Benchmark your skills</span> against others in your field.
          </p>
        </CardHeader>
        <CardContent>
          <Button className="mt-4">Start Assessment</Button>
        </CardContent>
      </Card>
      
      {/* Assessments Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {assessments.map((assessment, index) => (
          <Card key={index} className="p-4">
            <CardHeader>
              <span className="text-xs text-blue-600 font-medium">{assessment.type}</span>
              <CardTitle className="text-lg">{assessment.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{assessment.description}</p>
              <p className="mt-2 text-sm font-semibold">{assessment.time}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
