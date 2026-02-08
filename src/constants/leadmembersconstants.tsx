import { type JSX } from "react";
import {
  Users,
  Cloud,
  CloudCog,
  Database,
  Palette,
  CalendarDays,
  FileText,
  Share2,
  Code,
} from "lucide-react";

// --- Tab Color Type ---
export type TabColor =
  | "blue"
  | "yellow"
  | "cyan"
  | "green"
  | "purple"
  | "pink"
  | "orange"
  | "red";

// --- Tabs ---
export const tabs: {
  key: string;
  title: string;
  icon: JSX.Element;
  color: TabColor;
}[] = [
  { key: "Core", title: "Core", icon: <Users className="w-4 h-4" />, color: "blue" },
  { key: "AWS", title: "AWS", icon: <Cloud className="w-4 h-4" />, color: "yellow" },
  { key: "Azure", title: "Azure", icon: <CloudCog className="w-4 h-4" />, color: "cyan" },
  { key: "GCP", title: "GCP", icon: <Database className="w-4 h-4" />, color: "green" },
  { key: "Design", title: "Design", icon: <Palette className="w-4 h-4" />, color: "purple" },
  { key: "Events", title: "Events", icon: <CalendarDays className="w-4 h-4" />, color: "pink" },
  { key: "Content", title: "Content", icon: <FileText className="w-4 h-4" />, color: "orange" },
  { key: "Social Media", title: "Social Media", icon: <Share2 className="w-4 h-4" />, color: "orange" },
  { key: "Development", title: "Development", icon: <Code className="w-4 h-4" />, color: "red" },
];

// --- Color Map ---
export const colorMap: Record<
  TabColor,
  {
    background: string;
    text: string;
    icon: string;
    heading: string;
    backgroundDark: string;
    textDark: string;
    headingDark: string;
  }
> = {
  blue: {
    background: "bg-blue-600/50",
    text: "text-white",
    icon: "text-blue-300",
    heading: "text-blue-600",
    backgroundDark: "bg-blue-800/50",
    textDark: "text-gray-100",
    headingDark: "text-blue-400",
  },
  yellow: {
    background: "bg-green-600/50",
    text: "text-white",
    icon: "text-yellow-300",
    heading: "text-yellow-600",
    backgroundDark: "bg-yellow-700/50",
    textDark: "text-gray-100",
    headingDark: "text-yellow-400",
  },
  cyan: {
    background: "bg-cyan-600/50",
    text: "text-white",
    icon: "text-cyan-300",
    heading: "text-cyan-600",
    backgroundDark: "bg-cyan-800/50",
    textDark: "text-gray-100",
    headingDark: "text-cyan-400",
  },
  green: {
    background: "bg-green-600/50",
    text: "text-white",
    icon: "text-green-300",
    heading: "text-green-600",
    backgroundDark: "bg-green-800/50",
    textDark: "text-gray-100",
    headingDark: "text-green-400",
  },
  purple: {
    background: "bg-purple-600/50",
    text: "text-white",
    icon: "text-purple-300",
    heading: "text-purple-600",
    backgroundDark: "bg-purple-800/50",
    textDark: "text-gray-100",
    headingDark: "text-purple-400",
  },
  pink: {
    background: "bg-pink-600/50",
    text: "text-white",
    icon: "text-pink-300",
    heading: "text-pink-600",
    backgroundDark: "bg-pink-800/50",
    textDark: "text-gray-100",
    headingDark: "text-pink-400",
  },
  orange: {
    background: "bg-orange-600/50",
    text: "text-white",
    icon: "text-orange-300",
    heading: "text-orange-600",
    backgroundDark: "bg-orange-800/50",
    textDark: "text-gray-100",
    headingDark: "text-orange-400",
  },
  red: {
    background: "bg-red-600/50",
    text: "text-white",
    icon: "text-red-300",
    heading: "text-red-600",
    backgroundDark: "bg-red-800/50",
    textDark: "text-gray-100",
    headingDark: "text-red-400",
  },
};

