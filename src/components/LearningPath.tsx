"use client";

import { motion } from "framer-motion";
import { type SyllabusItem, syllabus } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { CheckCircle, Lock, MapPin, Star } from "lucide-react";

export default function LearningPath() {
    return (
        <section className="py-24 px-6 max-w-5xl mx-auto overflow-hidden">
            <div className="text-center mb-20 relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 font-bold text-sm mb-6"
                >
                    <MapPin size={16} /> 你的學習地圖
                </motion.div>
                <h2 className="text-5xl font-black mb-6 dark:text-gray-100">The Path to Pro</h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    這不是傳統課程，這是一場 RPG 冒險。從 LV.1 新手村出發，一路升級到 LV.99 全端大師。
                </p>
            </div>

            <div className="relative space-y-24">
                {/* Connecting Line (Dashed) */}
                <div className="absolute left-1/2 top-10 bottom-10 w-1 border-r-2 border-dashed border-gray-300 dark:border-gray-700 -translate-x-1/2 z-0 hidden md:block" />

                {/* Prerequisite Node */}
                <div className="relative z-10 flex flex-col items-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="w-16 h-16 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center font-bold text-xl shadow-xl ring-8 ring-white dark:ring-gray-950"
                    >
                        START
                    </motion.div>
                    <div className="mt-4 font-bold text-gray-500 uppercase tracking-widest text-sm">準備開始</div>
                </div>

                {syllabus.map((lesson, index) => (
                    <PathNode key={lesson.id} lesson={lesson} index={index} />
                ))}

                {/* Unlock Node */}
                <div className="relative z-10 flex flex-col items-center">
                    <Link href="/resources" className="group">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white shadow-xl ring-8 ring-white dark:ring-gray-950 relative"
                        >
                            <Lock size={32} className="group-hover:hidden" />
                            <Star size={32} className="hidden group-hover:block" />

                            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-bounce">
                                UNLOCK
                            </div>
                        </motion.div>
                    </Link>
                    <div className="mt-6 font-bold text-xl dark:text-white">資源寶庫 (Resources)</div>
                    <p className="text-gray-500 text-sm mt-1">取得所有神級工具</p>
                </div>
            </div>
        </section>
    );
}

function PathNode({ lesson, index }: { lesson: SyllabusItem; index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={cn(
                "relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16",
                isEven ? "md:flex-row-reverse" : ""
            )}
        >
            {/* Timeline Dot */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gray-300 dark:bg-gray-700 rounded-full ring-4 ring-white dark:ring-gray-950 hidden md:block" />

            {/* Content Card */}
            <div className="flex-1 w-full md:w-auto">
                <Link href={`/lessons/${lesson.id.replace("lesson-", "")}`} className="block group">
                    <div className={cn(
                        "p-8 rounded-3xl border-2 bg-white dark:bg-gray-800 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl relative overflow-hidden",
                        lesson.color.replace("bg-", "border-").replace("text-", "dark:border-")
                    )}>
                        {/* Background Glow */}
                        <div className={cn(
                            "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity",
                            lesson.color
                        )} />

                        <div className="flex justify-between items-start mb-6">
                            <span className={cn(
                                "px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider",
                                lesson.color
                            )}>
                                Level {index + 1}
                            </span>
                            <span className="text-gray-400 font-mono text-xs flex items-center gap-1">
                                ⏱️ {lesson.duration}
                            </span>
                        </div>

                        <h3 className="text-3xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {lesson.title.split(":")[1] || lesson.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
                            {lesson.description}
                        </p>

                        <div className="flex items-center gap-2 text-sm font-bold text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                            <CheckCircle size={16} className="text-green-500" />
                            <span>核心目標: {lesson.goal}</span>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Empty Space for alignment */}
            <div className="flex-1 hidden md:block" />
        </motion.div>
    );
}
