import { File, House, School, AppWindow, FileBadge2, LucideIcon, PanelsTopLeft, Dot } from "lucide-react";
import { FaCircle } from "react-icons/fa";
import { SiOpencv } from "react-icons/si";

export interface NavSubItem {
  title: string;
  path: string;
}

export interface NavMainItem {
  title: string;
  path: string;
  icon?: LucideIcon | any;
  isActive?: boolean;
  subItems?: NavSubItem[];
}

export interface NavGroup {
  id: number;
  label: string;
  items: NavMainItem[];
}

const basePath = "/";

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "",
    items: [
      {
        title: "Home",
        path: `${basePath}home`,
        icon: House,
      },
      {
        title: "Events",
        path: `${basePath}events`,
        icon: AppWindow,
      },
      {
        title: "Courses",
        path: `${basePath}courses`,
        icon: File,
      },
      {
        title: "Certifications",
        path: `${basePath}certifications`,
        icon: FileBadge2,
      },
      {
        title: "Hackathons & Competitions",
        path: `${basePath}hackathons`,
        icon: School,
      },
      {
        title: "Job Portal",
        path: `${basePath}job-portal`,
        icon: <SiOpencv />,
      },
    ],
  },
  {
    id: 2,
    label: "Get Started",
    items: [
      {
        title: "Start here",
        path: `${basePath}start-here`,
        icon: <FaCircle className="text-[#7ac9fd] !w-4 !h-4 rounded-full inline-block" />,
      },
      {
        title: "Introductions",
        path: `${basePath}introductions`,
        icon: <FaCircle className="text-[#7ac9fd] !w-4 !h-4 rounded-full inline-block" />,
      },
    ],
  },
  {
    id: 3,
    label: "Community Hub",
    items: [
      {
        title: "Free courses",
        path: `${basePath}free-courses`,
        icon: <FaCircle className="text-[#a4fd7a] !w-4 !h-4 rounded-full inline-block" />,
      },
      {
        title: "Discussions",
        path: "",
        icon: <FaCircle className="text-[#a4fd7a] !w-4 !h-4 rounded-full inline-block" />,
        subItems: [
          { title: "#3D Vision AI", path: `${basePath}discussions/3d-vision-ai` },
          { title: "#Python", path: `${basePath}discussions/python` },
          { title: "#Machine Learning", path: `${basePath}discussions/machine-learning` },
          { title: "#Deep Learning", path: `${basePath}discussions/deep-learning` },
          { title: "#Computer Vision", path: `${basePath}discussions/computer-vision` },
          { title: "#Data Science", path: `${basePath}discussions/data-science` },
          { title: "#Artificial Intelligence", path: `${basePath}discussions/artificial-intelligence` },
          { title: "#MLOps", path: `${basePath}discussions/mlops` },
        ],        
      },
      {
        title: "Contributions",
        path: `${basePath}contributions`,
        icon: <FaCircle className="text-[#a4fd7a] !w-4 !h-4 rounded-full inline-block" />,
      },
      {
        title: "Latest Trends",
        path: `${basePath}latest-trends`,
        icon: <FaCircle className="text-[#a4fd7a] !w-4 !h-4 rounded-full inline-block" />,
      },
    ],
  },
];

export const sidebarItemsLaunchPad: NavGroup[] = [
  {
    id: 1,
    label: "",
    items: [
      {
        title: "Home",
        path: `${basePath}home`,
        icon: House,
      },
      {
        title: "My Courses",
        path: `${basePath}my-courses`,
        icon: File,
      },
      {
        title: "Certifications",
        path: `${basePath}my-certifications`,
        icon: FileBadge2,
      },
    ],
  },
  {
    id: 2,
    label: "Get Started",
    items: [
      {
        title: "Start here",
        path: `${basePath}start-here`,
        icon: <FaCircle className="text-[#7ac9fd] !w-4 !h-4 rounded-full inline-block" />,
      },
      {
        title: "Introductions",
        path: `${basePath}introductions`,
        icon: <FaCircle className="text-[#7ac9fd] !w-4 !h-4 rounded-full inline-block" />,
      },
    ],
  },
];

export const sidebarItemsRecruitingSpace: NavGroup[] = [
  {
    id: 1,
    label: "",
    items: [
      {
        title: "Home",
        path: `${basePath}recruiting-home`,
        icon: House,
      },
      {
        title: "Job Listings",
        path: `${basePath}job-listings`,
        icon: File,
      },
      {
        title: "Candidates",
        path: `${basePath}candidates`,
        icon: FileBadge2,
      },
    ],
  },
  {
    id: 2,
    label: "Manage Hiring",
    items: [
      {
        title: "Job Posting",
        path: `${basePath}post-job`,
        icon: <FaCircle className="text-[#ffab00] !w-4 !h-4 rounded-full inline-block" />,
      },
      {
        title: "Applications",
        path: `${basePath}applications-status`,
        icon: <FaCircle className="text-[#ffab00] !w-4 !h-4 rounded-full inline-block" />,
      },
    ],
  }
];

export const sidebarItemsAdminSpace: NavGroup[] = [
  {
    id: 1,
    label: "Admin Panel",
    items: [
      {
        title: "Home",
        path: `${basePath}analytics`,
        icon: House,
      },
      {
        title: "Monetization discussion spaces",
        path: `${basePath}monetization-discussion-spaces`,
        icon: File,
      },
      {
        title: "Assign Control",
        path: `${basePath}assign-control`,
        icon: FileBadge2,
      },
    ],
  }
];
