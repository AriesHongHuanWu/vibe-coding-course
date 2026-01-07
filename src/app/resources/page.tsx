import { cheatSheetTools } from "@/lib/data";
import { ArrowUpRight, Download, Search, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ResourcesPage() {
    const categories = Array.from(new Set(cheatSheetTools.map((t) => t.category!)));

    return (
        <main className="min-h-screen py-24 px-4 md:px-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl -z-10" />

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 font-bold text-sm mb-6 border border-yellow-200 dark:border-yellow-800">
                    <Sparkles size={16} /> ITEM SHOP
                </div>
                <h1 className="text-6xl md:text-8xl font-black mb-6 dark:text-white font-display uppercase tracking-tight">
                    Resource Vault
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
                    Equip yourself with the best tools in the game. All free, all powerful.
                </p>
            </div>

            <div className="space-y-24">
                {categories.map((category) => (
                    <section key={category}>
                        <div className="flex items-center gap-4 mb-10">
                            <h2 className="text-3xl font-black dark:text-white font-display uppercase">{category}</h2>
                            <div className="h-1 bg-gray-200 dark:bg-gray-800 flex-1 rounded-full" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {cheatSheetTools.filter(t => t.category === category).map((tool) => (
                                <Link
                                    key={tool.name}
                                    href={tool.url}
                                    target="_blank"
                                    className="group block relative"
                                >
                                    <div className="absolute inset-0 bg-google-blue/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative h-full p-8 rounded-[2rem] bg-white dark:bg-[var(--card-bg)] border border-gray-200 dark:border-[var(--card-border)] hover:border-google-blue dark:hover:border-google-blue transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col">

                                        <div className="flex justify-between items-start mb-6">
                                            <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-2xl shadow-inner">
                                                {tool.name[0]}
                                            </div>
                                            <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0 text-google-blue" />
                                        </div>

                                        <h3 className="text-2xl font-black mb-3 dark:text-white font-display group-hover:text-google-blue transition-colors">
                                            {tool.name}
                                        </h3>

                                        <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1 font-medium leading-relaxed">
                                            {tool.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {tool.badge && (
                                                <span className={cn(
                                                    "px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider",
                                                    tool.badge.includes("⭐⭐⭐⭐⭐") ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                                                )}>
                                                    {tool.badge}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            <div className="mt-32 p-12 rounded-[3rem] bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-google-blue/10 rounded-full blur-3xl" />

                <h3 className="text-3xl font-black mb-4 dark:text-white font-display">Need Offline Access?</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto">
                    We are compiling a legendary PDF "Strategy Guide" with all these tools and cheats codes.
                </p>
                <button className="px-8 py-4 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-500 cursor-not-allowed inline-flex items-center gap-2 font-black text-sm uppercase tracking-widest opacity-50">
                    <Download size={18} /> DLC Coming Soon
                </button>
            </div>
        </main>
    );
}
