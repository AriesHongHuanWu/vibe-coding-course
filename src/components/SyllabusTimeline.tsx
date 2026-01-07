"use client";

import { motion } from "framer-motion";
import { type SyllabusItem, syllabus } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function SyllabusTimeline() {
    return (
        <section className="py-20 px-6 max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">課程大綱</h2>
                <p className="text-xl text-gray-600 dark:text-gray-400">從觀念到實戰的完整學習路徑</p>
            </div>

            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 bg-gray-100 dark:bg-gray-800 hidden md:block" />

                <div className="space-y-16 pl-0 md:pl-20">
                    {syllabus.map((lesson, index) => (
                        <TimelineItem key={lesson.id} lesson={lesson} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TimelineItem({ lesson, index }: { lesson: SyllabusItem; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
        >
            {/* Lesson Header */}
            <div className={cn(
                "p-8 rounded-3xl border-2 bg-white dark:bg-gray-800/50 mb-6 relative overflow-hidden",
                lesson.color.replace("bg-", "bg-opacity-10 dark:bg-opacity-10 border-")
            )}>
                {/* Decorative Background Icon */}
                <div className="absolute -right-10 -top-10 text-[200px] opacity-5 font-black pointer-events-none select-none dark:opacity-[0.02]">
                    {index + 1}
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-4">
                    <div className={cn(
                        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
                        lesson.color
                    )}>
                        {lesson.tags.join(" • ")}
                    </div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        ⏱️ {lesson.duration}
                    </span>
                </div>

                <Link href={`/lessons/${lesson.id.replace("lesson-", "")}`} className="hover:text-google-blue dark:hover:text-google-blue transition-colors inline-block">
                    <h3 className="text-3xl font-bold mb-2">{lesson.title}</h3>
                </Link>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">{lesson.description}</p>

                {/* Goal Box */}
                <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700 mb-8 flex gap-3">
                    <div className="text-2xl">🎯</div>
                    <div>
                        <div className="font-bold text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1">本課目標</div>
                        <div className="font-medium">{lesson.goal}</div>
                    </div>
                </div>

                <div className="space-y-8">
                    {lesson.topics.map((topic, i) => (
                        <div key={i} className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-700">
                            <div className="flex items-center gap-2 mb-2">
                                <span className={cn(
                                    "text-[10px] uppercase font-bold px-2 py-0.5 rounded border",
                                    topic.type === "Concept" ? "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800" :
                                        topic.type === "Demo" ? "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800" :
                                            "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800"
                                )}>
                                    {topic.type}
                                </span>
                                <span className="text-xs text-gray-400 font-mono">{topic.duration}</span>
                            </div>

                            <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">{topic.title}</h4>
                            <p className="text-gray-600 dark:text-gray-400 mb-4 whitespace-pre-line">{topic.content}</p>

                            {topic.tools && (
                                <div className="flex flex-wrap gap-3">
                                    {topic.tools.map((tool) => (
                                        <a
                                            key={tool.name}
                                            href={tool.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 border dark:border-gray-700 hover:border-blue-200 rounded-xl transition-all shadow-sm hover:shadow-md"
                                        >
                                            <span className="font-semibold text-sm">{tool.name}</span>
                                            {tool.badge && (
                                                <span className={cn(
                                                    "text-[10px] px-1.5 py-0.5 rounded text-white font-bold",
                                                    tool.badge.includes("免費") || tool.badge.includes("佛心") ? "bg-green-500" :
                                                        tool.badge.includes("必") ? "bg-red-500" : "bg-blue-500"
                                                )}>
                                                    {tool.badge}
                                                </span>
                                            )}
                                            <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:block hidden max-w-[150px] truncate">
                                                {tool.description}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
