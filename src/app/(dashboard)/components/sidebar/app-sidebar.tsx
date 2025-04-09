"use client";

import * as React from "react";
import { AudioWaveform, Command, GalleryVerticalEnd, Frame, Map, PieChart } from "lucide-react";

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar";
import { sidebarItems, sidebarItemsLaunchPad, sidebarItemsRecruitingSpace, sidebarItemsContributorSpace, sidebarItemsAdminSpace } from "@/navigation/sidebar/sidebar-items";

import SidebarFooterMenu from "./sidebar-footer-menu";
import SidebarNavigation from "./sidebar-navigation";
import { TeamSwitcher } from "./team-switcher";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const teams = [
  {
    name: "Community",
    logo: Command,
    plan: "Free",
  },
  {
    name: "Recruitment",
    logo: AudioWaveform,
    plan: "OpenCV recruit",
  },
  {
    name: "Launch pad",
    logo: GalleryVerticalEnd,
    plan: "Community",
  },
  {
    name: "Contributor",
    logo: Map,
    plan: "Writer Hub",
  },
  {
    name: "Admin",
    logo: Frame,
    plan: "Admin Panel",
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [selectedTeam, setSelectedTeam] = React.useState(teams[0].name); // Default to first team
  const { data: session, status } = useSession();
  const router = useRouter();

  const user = {
    name: session?.user?.name || "",
    email: session?.user?.email || "",
    avatar: session?.user?.image || "",
  };  
  
  const getSidebarItems = () => {
    switch (selectedTeam) {
      case "Recruitment":
        return sidebarItemsRecruitingSpace;
      case "Launch pad":
        return sidebarItemsLaunchPad;
      case "Contributor":
        return sidebarItemsContributorSpace;
      case "Admin":
        return sidebarItemsAdminSpace;
      case "Community":
        return sidebarItems;
      default:  
        return sidebarItems;
    }
  };

  React.useEffect(() => {
    if (sidebarItems.length > 0 && sidebarItems[0].items.length > 0) {
      const firstRoute = sidebarItems[0].items[0].path;
      router.push(firstRoute);
    }
  }, [selectedTeam, router]);

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={teams} selectedTeam={selectedTeam} onTeamChange={setSelectedTeam} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarNavigation sidebarItems={getSidebarItems()} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarFooterMenu user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
