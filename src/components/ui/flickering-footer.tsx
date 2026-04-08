"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { motion, useInView } from "motion/react";
import Color from "color-bits";
import { twMerge } from "tailwind-merge";

import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface FlickeringFooterProps {
  companyName?: string;
  className?: string;
}

const FlickeringFooter: React.FC<FlickeringFooterProps> = ({
  companyName = "CoreShift",
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [gridData, setGridData] = useState<{
    rows: number;
    cols: number;
    total: number;
  }>({
    rows: 0,
    cols: 0,
    total: 0,
  });

  const updateGrid = useCallback(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      const cols = Math.ceil(width / 40);
      const rows = Math.ceil(height / 40);
      setGridData({ rows, cols, total: rows * cols });
    }
  }, []);

  useEffect(() => {
    updateGrid();
    window.addEventListener("resize", updateGrid);
    return () => window.removeEventListener("resize", updateGrid);
  }, [updateGrid]);

  return (
    <footer
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden bg-zinc-950 text-white py-24",
        className
      )}
    >
      {/* Background Flickering Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div
          className="grid h-full w-full"
          style={{
            gridTemplateColumns: `repeat(${gridData.cols}, 1fr)`,
            gridTemplateRows: `repeat(${gridData.rows}, 1fr)`,
          }}
        >
          {Array.from({ length: gridData.total }).map((_, i) => (
            <FlickeringSquare key={i} isInView={isInView} />
          ))}
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EF4444] transition-transform group-hover:rotate-12">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold tracking-tighter">
                {companyName}
              </h2>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              The modern, all-in-one HR platform designed for scaling teams. 
              Manage your workforce with intelligence and speed.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<GitHubLogoIcon />} href="#" />
              <SocialIcon icon={<TwitterLogoIcon />} href="#" />
              <SocialIcon icon={<DiscordLogoIcon />} href="#" />
              <SocialIcon icon={<LinkedInLogoIcon />} href="#" />
            </div>
          </div>

          {/* Links Section 1 */}
          <div>
            <h3 className="font-semibold mb-6 text-zinc-200">Solution</h3>
            <ul className="space-y-4 text-sm text-zinc-500">
              <FooterLink href="#">Payroll Management</FooterLink>
              <FooterLink href="#">Recruitment (ATS)</FooterLink>
              <FooterLink href="#">Performance Reviews</FooterLink>
              <FooterLink href="#">Time & Attendance</FooterLink>
              <FooterLink href="#">Employee Self Service</FooterLink>
            </ul>
          </div>

          {/* Links Section 2 */}
          <div>
            <h3 className="font-semibold mb-6 text-zinc-200">Resources</h3>
            <ul className="space-y-4 text-sm text-zinc-500">
              <FooterLink href="#">Help Center</FooterLink>
              <FooterLink href="#">API Docs</FooterLink>
              <FooterLink href="#">HR Guides</FooterLink>
              <FooterLink href="#">Community</FooterLink>
              <FooterLink href="#">Status</FooterLink>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-6">
            <h3 className="font-semibold text-zinc-200">Join our journey</h3>
            <p className="text-sm text-zinc-500">
              Get monthly HR insights and early access to new AI features.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="work@email.com"
                className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-[#EF4444] transition-colors"
              />
              <button className="bg-[#EF4444] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#dc2626] transition-colors shadow-lg shadow-red-500/10">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-zinc-900 grid grid-cols-1 md:grid-cols-3 items-center gap-6 text-xs text-zinc-600">
          {/* Left: Copyright */}
          <div className="text-center md:text-left">
            <p>© {new Date().getFullYear()} Designed and developed by Dhruv</p>
          </div>

          {/* Center: Links */}
          <div className="flex justify-center gap-8">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Security</a>
          </div>

          {/* Right: Branding */}
          <div className="text-center md:text-right">
            <p className="text-zinc-700 font-medium tracking-widest text-[10px] uppercase">Powered by HRILAX</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FlickeringSquare = ({ isInView }: { isInView: boolean }) => {
  const [flicker, setFlicker] = useState(false);
  const [color, setColor] = useState("#EF4444");

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      if (Math.random() > 0.985) {
        setFlicker(true);
        // Brand colors: Red, Purple, Blue, Yellow
        const colors = ["#EF4444", "#8B5CF6", "#38BDF8", "#FBBF24"];
        setColor(colors[Math.floor(Math.random() * colors.length)]);
        
        setTimeout(() => setFlicker(false), Math.random() * 1000 + 500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <div
      className="border-[0.5px] border-zinc-900/10 h-full w-full transition-colors duration-1000"
      style={{
        backgroundColor: flicker ? color : "transparent",
        boxShadow: flicker ? `0 0 30px ${color}` : "none",
        opacity: flicker ? Math.random() * 0.4 + 0.1 : 0,
      }}
    />
  );
};

const FooterLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
  <li>
    <a 
      href={href} 
      className="hover:text-white transition-colors flex items-center group"
    >
      <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-[#EF4444] mr-0 group-hover:mr-2">›</span>
      {children}
    </a>
  </li>
);

const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <a
    href={href}
    className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-400 hover:bg-zinc-900 transition-all transform hover:-translate-y-1"
  >
    {icon}
  </a>
);

export default FlickeringFooter;
