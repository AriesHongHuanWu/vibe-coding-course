import { cheatSheetTools } from "@/lib/data";
import { ArrowUpRight, Download } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ResourcesPage() {
    const categories = Array.from(new Set(cheatSheetTools.map((t) => t.category!)));

    return (
        <main className="min-h-screen py-20 px-6 max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-bold mb-4">
                    Vibe Coding Cheat Sheet
                </div>
                <h1 className="text-4xl md:text-5xl font-black mb-6">工具資源庫</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    工欲善其事，必先利其器。這裡整理了所有課程中使用到的神級工具。
                </p>
            </div>

            <div className="space-y-16">
                {categories.map((category) => (
                    <section key={category}>
                        <h2 className="text-2xl font-bold mb-6 border-l-4 border-yellow-400 pl-4">{category}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {cheatSheetTools.filter(t => t.category === category).map((tool) => (
                                <Link
                                    key={tool.name}
                                    href={tool.url}
                                    target="_blank"
                                    className="group block p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600 transition-all hover:shadow-lg"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold">{tool.name}</h3>
                                        <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" />
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-400 mb-4 h-12 line-clamp-2">
                                        {tool.description}
                                    </p>

                                    {tool.badge && (
                                        <span className={cn(
                                            "inline-block px-2 py-1 rounded text-xs font-bold",
                                            tool.badge.includes("⭐⭐⭐⭐⭐") ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" : "bg-gray-100 dark:bg-gray-700"
                                        )}>
                                            {tool.badge}
                                        </span>
                                    )}
                                </Link>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            <div className="mt-20 p-8 rounded-3xl bg-gray-50 dark:bg-gray-800/30 border border-gray-100 dark:border-gray-700 text-center">
                <h3 className="text-2xl font-bold mb-4">想要下載 PDF 版本嗎？</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">我們正在整理精美的講義 PDF，敬請期待！</p>
                <button className="px-6 py-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-500 cursor-not-allowed flex items-center gap-2 mx-auto font-bold">
                    <Download size={18} /> 即將推出
                </button>
            </div>
        </main>
    );
}
