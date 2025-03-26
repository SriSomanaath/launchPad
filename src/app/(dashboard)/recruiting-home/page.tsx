import { Tabs } from "@/components/ui/custom-tabs"
import TabsOverview from "./TabOverview";
import RecentSearches from "./RecentSearches";
import { ConversionRate } from "./ConversionRate";
import { ChartWithTooltip, ChartWithLegend } from "./SourceAnalytics";

const tabsData = [
    { id: "overview", label: "Overview" },
    { id: "candidate_insights", label: "Candidate Insights" },
    { id: "job_performance", label: "Job Performance" },
    { id: "source_analysis", label: "Source Analysis" },
    { id: "conversion_rates", label: "Conversion Rates" },
];

const tabContent = {
  overview: <TabsOverview />,
  candidate_insights: <RecentSearches />,
  job_performance: <ConversionRate />,
  source_analysis: <><ChartWithLegend /><ChartWithTooltip /></>,
  conversion_rates: <ConversionRate />,
}

export default function ExamplePage() {
  return (
    <Tabs tabs={tabsData} tabContent={tabContent} />
  )
}
