'use client';

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Marquee } from "@/components/ui/marquee";
import { Zap, TrendingUp, Search, Users } from "lucide-react";

const marqueeData = [
  "How do I automate payroll for a global team?",
  "What's the best way to track employee performance?",
  "How can I reduce time-to-hire by 50%?",
  "Is my HR data compliant with GDPR?",
  "How do I manage benefits across different countries?",
  "What should be in our new remote work policy?",
  "How do I maintain company culture during rapid scaling?",
  "Which recruitment metrics actually matter?",
  "How do I simplify the onboarding process?",
  "What's the best tool for employee engagement?",
  "How do I handle sensitive employee disputes?",
  "How do I transition to an all-in-one HR stack?",
];

const features = [
  {
    description:
      "No jargon, no overcomplication — just clear steps you can follow to manage your workforce confidently.",
    icon: Zap,
    title: "We make HR simple",
    color: "#EF4444", // Red
  },
  {
    description:
      "Every tool we build is designed to help you hire faster, retain talent, and increase efficiency.",
    icon: TrendingUp,
    title: "Focus on real results",
    color: "#38BDF8", // Blue
  },
  {
    description:
      "With years of HR expertise, we bring proven frameworks and automated solutions to the table.",
    icon: Search,
    title: "We know scaling",
    color: "#8B5CF6", // Purple
  },
  {
    description:
      "From your first hire to global expansion, we provide the infrastructure for every stage of growth.",
    icon: Users,
    title: "With you all the way",
    color: "#FBBF24", // Yellow
  },
];

export default function BuiltForEveryone() {
  const m1 = marqueeData.slice(0, marqueeData.length / 3);
  const m2 = marqueeData.slice(
    marqueeData.length / 3,
    (marqueeData.length / 3) * 2,
  );
  const m3 = marqueeData.slice((marqueeData.length / 3) * 2);

  return (
    <section id="features" className="relative bg-zinc-50 pt-20 sm:pt-40 dark:bg-black dark:text-white">
      <div className="mx-auto max-w-full">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center space-y-4 px-5 text-center md:px-10">
          <h2 className="max-w-3xl font-bold text-4xl sm:text-5xl lg:text-6xl text-black dark:text-white tracking-tight">
            Removing the roadblocks to your scaling HR
          </h2>
          <p className="max-w-xl text-base md:text-lg text-[#6B7280]">
            It's easy to get lost in complex compliance, manual payroll, and
            scattered employee data. We filter out the noise and give you 
            the clarity to let your team focus on people.
          </p>
          <div className="relative mx-auto max-w-3xl overflow-hidden mt-8">
            {/* Gradients to fade edges */}
            <div className="absolute left-0 z-10 h-full w-20 bg-gradient-to-r from-zinc-50 to-transparent dark:from-black" />
            <div className="absolute right-0 z-10 h-full w-20 bg-gradient-to-l from-zinc-50 to-transparent dark:from-black" />

            <div className="-mx-6 flex w-screen flex-col md:-mx-10 lg:-mx-16">
              <Marquee className="[--duration:45s] [--gap:1rem]" repeat={4}>
                {m1.map((q) => (
                  <Badge
                    className="rounded-full border-zinc-200 bg-white px-4 py-2 text-zinc-600 shadow-sm whitespace-nowrap dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400"
                    key={q}
                    variant="outline"
                  >
                    {q}
                  </Badge>
                ))}
              </Marquee>

              <Marquee
                className="[--duration:50s] [--gap:1rem]"
                repeat={4}
                reverse
              >
                {m2.map((q) => (
                  <Badge
                    className="rounded-full border-zinc-200 bg-white px-4 py-2 text-zinc-600 shadow-sm whitespace-nowrap dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400"
                    key={q}
                    variant="outline"
                  >
                    {q}
                  </Badge>
                ))}
              </Marquee>

              <Marquee className="[--duration:42s] [--gap:1rem]" repeat={4}>
                {m3.map((q) => (
                  <Badge
                    className="rounded-full border-zinc-200 bg-white px-4 py-2 text-zinc-600 shadow-sm whitespace-nowrap dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400"
                    key={q}
                    variant="outline"
                  >
                    {q}
                  </Badge>
                ))}
              </Marquee>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 divide-dashed divide-zinc-200 border-zinc-200 border-t border-dashed sm:grid-cols-2 sm:divide-x lg:grid-cols-4 dark:border-zinc-800 dark:divide-zinc-800">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                className="flex flex-col gap-5 px-6 py-12 lg:px-8 lg:py-16 hover:bg-white dark:hover:bg-zinc-900/50 transition-colors group cursor-default"
                key={feature.title}
              >
                <div 
                  className="size-14 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3"
                  style={{ backgroundColor: feature.color }}
                >
                  <Icon className="size-7" />
                </div>

                <div className="flex flex-col gap-3 pt-6 lg:pt-12">
                  <h3 className="font-bold text-2xl tracking-tight sm:text-3xl text-black dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-[#6B7280]">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
