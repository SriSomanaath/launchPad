import { Tabs } from "@/components/ui/custom-tabs"
import JobSearchPage from "./PostJob";

const tabsData = [
    { id: "post_a_job", label: "Post a Job" },
    { id: "overview", label: "Overview" },
];

const tabContent = {
  overview: <>overview</>,
  post_a_job: <JobSearchPage />,
}

export default function ExamplePage() {
  return (
    <Tabs tabs={tabsData} tabContent={tabContent} />
  )
}
