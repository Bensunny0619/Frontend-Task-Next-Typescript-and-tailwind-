"use client";

import { useState, useEffect } from "react";
import {
  Home,
  Image as ImageIcon,
  Video,
  Wand2,
  Zap,
  Bell,
  PenTool,
  Headset,
  Compass,
  Folder,
  ChevronDown,
  Sun,
  Moon,
} from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem("theme");
     
      setTheme(stored === "dark" ? "dark" : "light");
    } catch (e) {
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
    
    if (next === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };

  return (
    <nav className="w-full px-8 py-4 flex items-center justify-between bg-white text-black shadow-sm transition-colors duration-200">
      <div className="relative flex">
        <div className="w-6 h-6 mt-2 mx-6 rounded bg-black flex items-center justify-center text-white font-bold text-lg">
          K
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-neutral-50 transition-colors"
        >
          <div className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-sm font-semibold">
            U
          </div>
          <span className="text-sm font-medium">username@email.com</span>
          <ChevronDown size={16} />
        </button>
      </div>

      {/* Center Navigation */}
      <div className="hidden md:flex items-center gap-3 px-3 py-2 rounded-2xl shadow-sm bg-neutral-100">
        <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white text-white transition-colors duration-300">
          <Home size={18} fill="white" stroke="black" />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-200 transition-colors duration-300">
          <ImageIcon size={18} />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-200 transition-colors duration-300">
          <Video size={18} />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-200 transition-colors duration-300">
          <Wand2 size={18} />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-200 transition-colors duration-300">
          <Zap size={18} />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-200 transition-colors duration-300">
          <PenTool size={18} />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-200 transition-colors duration-300">
          <Compass size={18} />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-200 transition-colors duration-300">
          <Folder size={18} />
        </button>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        <Link
          href="#"
          className="px-4 py-2 gap-1 flex rounded-full bg-neutral-100 hover:bg-neutral-200 text-sm transition-colors duration-300"
        >
          <ImageIcon size={16} className="pt-0.5" />
          Gallery
        </Link>
        <Link
          href="#"
          className="px-4 py-2 gap-1 flex rounded-full bg-neutral-100 hover:bg-neutral-200 text-sm transition-colors duration-300"
        >
          <Headset size={16} className="pt-0.5" />
          Support
        </Link>

        <Bell size={18} fill="black" />

        {/* Theme Toggle Button */}
        {mounted && (
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition"
            aria-label="Toggle Dark Mode"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        )}
      </div>
    </nav>
  );
}
