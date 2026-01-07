"use client";

import { motion } from "framer-motion";
import { type SyllabusItem, syllabus } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function SyllabusTimeline() {
    return (
        <section className="py-20 px-6 max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">課程大綱</h2>
                <p className="text-xl text-gray-600">從觀念到實戰的完整學習路徑</p>
            </div>

            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 bg-gray-100 hidden md:block" />

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
                "p-8 rounded-3xl border-2 bg-white mb-6 relative overflow-hidden",
                lesson.color.replace("bg-", "bg-opacity-10 border-")
            )}>
                {/* Decorative Background Icon */}
                <div className="absolute -right-10 -top-10 text-[200px] opacity-5 font-black pointer-events-none select-none">
                    {index + 1}
                </div>

                <div className={cn(
                    "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4",
                    lesson.color
                )}>
                    {lesson.tags.join(" • ")}
                </div>

                <h3 className="text-3xl font-bold mb-2">{lesson.title}</h3>
                <p className="text-lg text-gray-600 border-b border-gray-100 pb-6 mb-6">{lesson.description}</p>

                <div className="space-y-8">
                    {lesson.topics.map((topic, i) => (
                        <div key={i} className="relative pl-6 border-l-2 border-gray-200">
                            <h4 className="text-xl font-bold mb-2 text-gray-800">{topic.title}</h4>
                            <p className="text-gray-600 mb-4 whitespace-pre-line">{topic.content}</p>

                            {topic.tools && (
                                <div className="flex flex-wrap gap-3">
                                    {topic.tools.map((tool) => (
                                        <a
                                            key={tool.name}
                                            href={tool.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-white border hover:border-blue-200 rounded-xl transition-all shadow-sm hover:shadow-md"
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
                                            <span className="text-xs text-gray-500 group-hover:block hidden max-w-[150px] truncate">
                                                {tool.descriptionWithoutBadge || tool.description}
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
