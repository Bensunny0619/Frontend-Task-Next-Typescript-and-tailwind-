"use client";

import {
  Image as ImageIcon,
  Video,
  Zap,
  Wand2,
  PenTool,
  Compass,
  Folder,
} from "lucide-react";

const features = [
  {
    title: "Image",
    subtitle: "Generate images with custom styles for Fun and Instagram.",
    icon: <ImageIcon size={20} />,
    action: "Open",
    color: "bg-blue-200",
  },
  {
    title: "Video",
    subtitle: "Generate videos with Motion, Flux, Runway, Lumina, and more.",
    icon: <Video size={20} />,
    action: "Open",
    color: "bg-amber-300",
  },
  {
    title: "Realtime",
    subtitle: "Realtime AI rendering on a canvas. Instant feedback loops.",
    icon: <Zap size={20} />,
    action: "Open",
    color: "bg-blue-100",
  },
  {
    title: "Enhancer",
    subtitle: "Upscale and enhance images and videos up to 8x.",
    icon: <Wand2 size={20} />,
    action: "Open",
    color: "bg-neutral-700",
  },
  {
    title: "Edit",
    subtitle: "Add effects, change style, or expand pictures and generations.",
    icon: <PenTool size={20} />,
    action: "Open",
    color: "bg-cyan-700",
  },
  {
    title: "Video Lyrics",
    subtitle: "Lip-sync any video to any audio.",
    icon: <Folder size={20} />,
    action: "Open",
    color: "bg-green-300",
  },
  {
    title: "Motion Transfer",
    subtitle: "Transfer motions to images and animate characters.",
    icon: <Compass size={20} />,
    action: "Open",
    color: "bg-neutral-500",
  },
  {
    title: "Train",
    subtitle: "Teach to replicate your style or products.",
    icon: <Compass size={20} />,
    action: "Open",
    color: "bg-gray-300",
  },
];

export default function FeaturesSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      <h2 className="text-xl font-semibold mb-6">Generate</h2>

      {/* Force 4 columns on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex flex-col rounded-2xl border border-neutral-50 bg-white shadow-sm p-2 hover:shadow-md transition"
          >
            {/* Top: icon + text */}
            <div className="flex items-start gap-4 flex-1">
              <div className={`w-10 h-10 flex mt-4 items-center justify-center rounded-lg ${f.color} shrink-0`}>
                {f.icon}
              </div>

              <div>
                <h3 className="font-semibold text-sm">{f.title}</h3>
                <p className="text-xs text-neutral-600 mt-1">{f.subtitle}</p>
              </div>
               <button className="mt-4 px-4 py-1.5 text-sm rounded-full bg-neutral-100 hover:bg-neutral-200 transition self-start">
              {f.action}
            </button>
            </div>

            {/* Bottom: aligned button */}
           
          </div>
        ))}
      </div>
    </section>
  );
}
