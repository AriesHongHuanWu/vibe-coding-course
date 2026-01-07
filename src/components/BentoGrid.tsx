"use client";

import { ArrowUpRight, Code2, Database, MessageSquare, Monitor, Zap } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { cheatSheetTools } from "@/lib/data";

export default function BentoGrid() {
    // Select top tools for Bento Grid (first 5 for layout)
    const displayTools = [
        { ...cheatSheetTools.find(t => t.name === "Bolt.new")!, className: "md:col-span-2 md:row-span-2 bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-100", icon: Monitor },
        { ...cheatSheetTools.find(t => t.name === "Lovable")!, className: "md:col-span-1 bg-red-50 dark:bg-red-900/20 text-red-900 dark:text-red-100", icon: Monitor },
        { ...cheatSheetTools.find(t => t.name === "Groq")!, className: "md:col-span-1 bg-orange-50 dark:bg-orange-900/20 text-orange-900 dark:text-orange-100", icon: Zap },
        { ...cheatSheetTools.find(t => t.name === "Cursor")!, className: "md:col-span-2 bg-gray-900 dark:bg-gray-800 text-white dark:text-gray-100", icon: Code2 },
        { ...cheatSheetTools.find(t => t.name === "Firebase")!, className: "md:col-span-2 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-900 dark:text-yellow-100", icon: Database },
    ];

    return (
        <section className="py-20 px-6 max-w-6xl mx-auto">
            <div className="mb-12">
                <h2 className="text-4xl font-bold mb-4">Vibe Toolbox (工具箱)</h2>
                <p className="text-xl text-gray-600 dark:text-gray-400">工欲善其事，必先利其器。這是你的神級裝備。</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
                {displayTools.map((tool) => (
                    <Link
                        href={tool.url}
                        target="_blank"
                        key={tool.name}
                        className={cn(
                            "group relative p-6 rounded-3xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border border-transparent dark:border-[var(--card-border)] bg-gray-50 dark:bg-[var(--card-bg)]",
                            tool.className
                        )}
                    >
                        <div className="flex flex-col h-full justify-between relative z-10">
                            <div className="flex justify-between items-start">
                                <tool.icon size={32} className="opacity-80" />
                                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <p className="text-xs font-bold uppercase tracking-wider opacity-60">{tool.category}</p>
                                    {tool.badge && (
                                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10 font-bold backdrop-blur-sm">
                                            {tool.badge.replace(/⭐/g, '') || "推薦"}
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-xl font-black mb-1 font-display">{tool.name}</h3>
                                <p className="text-sm opacity-80 line-clamp-2 font-medium">{tool.description}</p>
                            </div>
                        </div>

                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                ))}
            </div>
        </section>
    );
}
