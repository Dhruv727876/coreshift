"use client";
import React, { useState, useEffect } from "react";

const ICONS = [
  // Orbit 1: Communication & General (6)
  { url: "https://img.icons8.com/?id=19978&format=png&size=96", name: "Slack" },
  { url: "https://img.icons8.com/?id=17949&format=png&size=96", name: "Google" },
  { url: "https://img.icons8.com/?id=7csVZvHoQrLW&format=png&size=96", name: "Zoom" },
  { url: "https://img.icons8.com/?id=F6H2fsqXKBwH&format=png&size=96", name: "Notion" },
  { url: "https://img.icons8.com/?id=oROcPah5ues6&format=png&size=96", name: "Jira" },
  { url: "https://img.icons8.com/?id=38804&format=png&size=96", name: "Salesforce" },
  
  // Orbit 2: Productivity & Office (8)
  { url: "https://img.icons8.com/?id=68803&format=png&size=96", name: "MS Teams" },
  { url: "https://img.icons8.com/?id=13657&format=png&size=96", name: "Dropbox" },
  { url: "https://img.icons8.com/?id=13640&format=png&size=96", name: "Outlook" },
  { url: "https://img.icons8.com/?id=13930&format=png&size=96", name: "LinkedIn" },
  { url: "https://img.icons8.com/?id=21049&format=png&size=96", name: "Trello" },
  { url: "https://img.icons8.com/?id=by7K6EO4PeHT&format=png&size=96", name: "Zapier" },
  { url: "https://img.icons8.com/?id=zfHRZ6i1Wg0U&format=png&size=96", name: "Figma" },
  { url: "https://img.icons8.com/?id=akG4VRhAoSii&format=png&size=96", name: "GitHub" },

  // Orbit 3: Specialized & Finance (10)
  { url: "https://img.icons8.com/?id=18980&format=png&size=96", name: "Stripe" },
  { url: "https://img.icons8.com/?id=IClnOc44L639&format=png&size=96", name: "Mailchimp" },
  { url: "https://img.icons8.com/?id=63788&format=png&size=96", name: "App Store" },
  { url: "https://img.icons8.com/?id=fBdn9xqpTJqJ&format=png&size=96", name: "Zendesk" },
  { url: "https://img.icons8.com/?id=NGmdejM73K82&format=png&size=96", name: "Intercom" },
  { url: "https://img.icons8.com/?id=13654&format=png&size=96", name: "MS Excel" },
  { url: "https://img.icons8.com/?id=P7UIlhbpWzZm&format=png&size=96", name: "Gmail" },
  { url: "https://img.icons8.com/?id=63204&format=png&size=96", name: "Skype" },
  { url: "https://img.icons8.com/?id=meFi4bu3VWU5&format=png&size=96", name: "Acrobat" },
  { url: "https://img.icons8.com/?id=13674&format=png&size=96", name: "MS Word" },
];

function SemiCircleOrbit({ radius, centerX, centerY, icons, iconSize }: any) {
  return (
    <>
      {/* Semi-circle glow background */}
      <div className="absolute inset-0 flex justify-center">
        <div
          className="
            w-[1000px] h-[1000px] rounded-full 
            bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05),transparent_70%)]
            dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]
            blur-3xl 
            -mt-40 
            pointer-events-none
          "
          style={{ zIndex: 0 }}
        />
      </div>

      {/* Orbit icons */}
      {icons.map((item: any, index: number) => {
        const count = icons.length;
        const angle = (index / (count - 1)) * 180;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);

        // Tooltip positioning — above or below based on angle
        const tooltipAbove = angle > 90;

        return (
          <div
            key={index}
            className="absolute flex flex-col items-center group"
            style={{
              left: `${(centerX + x - iconSize / 2).toFixed(2)}px`,
              top: `${(centerY - y - iconSize / 2).toFixed(2)}px`,
              zIndex: 5,
            }}
          >
            <img
              src={item.url}
              alt={item.name}
              width={iconSize}
              height={iconSize}
              className="object-contain cursor-pointer transition-transform hover:scale-110"
              style={{ minWidth: iconSize, minHeight: iconSize }} // fix accidental shrink
            />

            {/* Tooltip */}
            <div
              className={`absolute ${
                tooltipAbove ? "bottom-[calc(100%+8px)]" : "top-[calc(100%+8px)]"
              } hidden group-hover:block px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-sm text-[10px] font-medium text-white shadow-xl text-center whitespace-nowrap border border-white/10`}
            >
              {item.name}
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rotate-45 bg-black/80 ${
                  tooltipAbove ? "top-full -mt-[3px]" : "bottom-full -mb-[3px]"
                }`}
              ></div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default function MultiOrbitSemiCircle() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateSize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  if (!mounted) {
      return (
        <section className="py-24 relative min-h-[600px] w-full overflow-hidden flex flex-col items-center">
            <h2 className="my-6 text-4xl font-bold lg:text-7xl lg:leading-[1.1]">Integrations</h2>
            <p className="mb-12 max-w-2xl text-gray-600 dark:text-gray-400 lg:text-xl px-6">
              Connect your favourite apps to your workflow.
            </p>
        </section>
      );
  }

  const baseWidth = Math.min(size.width * 0.9, 1000); // Slightly larger
  const centerX = baseWidth / 2;
  const centerY = baseWidth * 0.45;

  const iconSize =
    size.width < 480
      ? Math.max(28, baseWidth * 0.05)
      : size.width < 768
      ? Math.max(32, baseWidth * 0.06)
      : Math.max(40, baseWidth * 0.045);

  return (
    <section className="py-24 relative min-h-[700px] w-full overflow-hidden bg-neutral-50/50 dark:bg-neutral-900/50" id="pricing">
      <div className="relative flex flex-col items-center text-center z-10">
        <div className="mb-4 inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-950 transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50">
          Integrations
        </div>
        <h2 className="mb-6 text-4xl font-bold tracking-tight lg:text-7xl lg:leading-[1.1]">
          Seamless Ecosystem
        </h2>
        <p className="mb-20 max-w-2xl text-gray-600 dark:text-gray-400 lg:text-xl px-6 text-balance">
          Connect CoreShift with over 50+ industry-leading tools. Automate workflows across your entire tech stack.
        </p>

        <div
          className="relative mt-12"
          style={{ width: baseWidth, height: baseWidth * 0.5 }}
        >
          <SemiCircleOrbit radius={baseWidth * 0.2} centerX={centerX} centerY={centerY} icons={ICONS.slice(0, 6)} iconSize={iconSize} />
          <SemiCircleOrbit radius={baseWidth * 0.35} centerX={centerX} centerY={centerY} icons={ICONS.slice(6, 14)} iconSize={iconSize * 0.9} />
          <SemiCircleOrbit radius={baseWidth * 0.5} centerX={centerX} centerY={centerY} icons={ICONS.slice(14, 24)} iconSize={iconSize * 0.8} />
        </div>
      </div>
    </section>
  );
}
