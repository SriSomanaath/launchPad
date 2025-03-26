"use client";

import * as React from "react";
import { AudioWaveform, Command, GalleryVerticalEnd, Frame, Map, PieChart } from "lucide-react";

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar";
import { sidebarItems, sidebarItemsLaunchPad, sidebarItemsRecruitingSpace, sidebarItemsAdminSpace } from "@/navigation/sidebar/sidebar-items";

import SidebarFooterMenu from "./sidebar-footer-menu";
import SidebarNavigation from "./sidebar-navigation";
import { TeamSwitcher } from "./team-switcher";
import { useSession } from "next-auth/react";

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
    name: "Admin",
    logo: Frame,
    plan: "Admin Panel",
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [selectedTeam, setSelectedTeam] = React.useState(teams[0].name); // Default to first team
  const { data: session, status } = useSession();

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
      case "Admin":
        return sidebarItemsAdminSpace;
      case "Community":
        return sidebarItems;
      default:  
        return sidebarItems;
    }
  };

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
