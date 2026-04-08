"use client";

import { UserSearch, UserPlus, TrendingUp, Heart, BarChart, Bell } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Talent Discovery",
    date: "Stage 01",
    content: "Advanced AI-driven recruitment metrics to find the perfect cultural and skill set alignment.",
    category: "Recruitment",
    icon: UserSearch,
    relatedIds: [2],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 2,
    title: "Unified Onboarding",
    date: "Stage 02",
    content: "Seamless digital entrance into the company ecosystem with automated documentation and training paths.",
    category: "Operations",
    icon: UserPlus,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 88,
  },
  {
    id: 3,
    title: "Growth & Retention",
    date: "Stage 03",
    content: "Real-time performance feedback and career progression planning to maximize employee lifetime value.",
    category: "Performance",
    icon: TrendingUp,
    relatedIds: [2, 4, 6],
    status: "in-progress" as const,
    energy: 72,
  },
  {
    id: 4,
    title: "Workforce Culture",
    date: "Stage 04",
    content: "Fostering engagement through community hubs, mental health support, and shared values alignment.",
    category: "Culture",
    icon: Heart,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 65,
  },
  {
    id: 5,
    title: "Data Intelligence",
    date: "Stage 05",
    content: "Strategic workforce analytics providing direct insights into productivity, satisfaction, and turnover.",
    category: "Analytics",
    icon: BarChart,
    relatedIds: [4, 6],
    status: "pending" as const,
    energy: 90,
  },
  {
    id: 6,
    title: "System Alerts",
    date: "Critical",
    content: "Real-time monitoring of operational anomalies and compliance deviations across the entire organization.",
    category: "Security",
    icon: Bell,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 40,
  },
];

export function RadialOrbitalTimelineDemo() {
  return (
    <section className="w-full bg-[#FAFAFA] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#EF4444]">Workforce Ecosystem</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
            Visualize the Full <span className="text-[#EF4444]">Employee Lifecycle</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            From initial recruitment to advanced analytics, our orbital ecosystem maps every touchpoint of your human capital strategy.
          </p>
        </div>
        <div className="relative h-[700px] w-full overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white shadow-2xl shadow-gray-200/50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-white to-gray-50/50 opacity-40"></div>
          <RadialOrbitalTimeline timelineData={timelineData} />
          
          {/* Subtle overlay to soften the black background of the timeline component if it's too harsh */}
          <div className="pointer-events-none absolute inset-0 z-0 bg-black mix-blend-overlay opacity-5"></div>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-50 grayscale transition-all hover:grayscale-0">
          {/* Legend or status indicator placeholders if needed */}
          <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
            <div className="h-2 w-2 rounded-full bg-[#EF4444]"></div>
            Active Engagement
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
            <div className="h-2 w-2 rounded-full bg-gray-300"></div>
            Predictive Flow
          </div>
        </div>
      </div>
    </section>
  );
}

export default RadialOrbitalTimelineDemo;
