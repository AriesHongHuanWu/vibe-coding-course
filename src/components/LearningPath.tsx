"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { type SyllabusItem, syllabus } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { CheckCircle, Lock, Trophy, Star, ChevronRight, Gamepad2 } from "lucide-react";
import { useRef } from "react";

export default function LearningPath() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative overflow-hidden">

            {/* Sticky Level Progress Bar */}
            <motion.div className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-google-blue via-google-red to-google-yellow transform origin-left z-50 opacity-80" style={{ scaleX }} />

            <div className="text-center mb-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold text-sm mb-8 shadow-xl"
                >
                    <Gamepad2 size={18} /> WORLD MAP SELECT
                </motion.div>
                <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-[var(--text-primary)] uppercase font-display">
                    Level Select
                </h2>
                <p className="text-2xl text-[var(--text-secondary)] max-w-2xl mx-auto font-medium">
                    Choose your mission. Unlock new skills. Defeat the final boss.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-32 relative">
                {/* Connecting Line */}
                <div className="absolute left-4 md:left-1/2 top-20 bottom-20 w-1 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-700 to-transparent -translate-x-1/2 pointer-events-none" />

                {/* Tutorial / Start Node */}
                <div className="flex flex-col items-center relative z-10 transition-transform hover:scale-105 duration-300 cursor-default">
                    <div className="w-24 h-24 rounded-3xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center shadow-2xl rotate-3 mb-4 ring-4 ring-white dark:ring-gray-900 relative">
                        <div className="absolute inset-0 bg-white/20 animate-pulse rounded-3xl" />
                        <span className="font-display font-black text-2xl">START</span>
                    </div>
                    <div className="bg-white dark:bg-gray-800 px-4 py-1 rounded-full text-xs font-bold border border-gray-200 dark:border-gray-700">
                        PWR: 0
                    </div>
                </div>

                {syllabus.map((lesson, index) => (
                    <LevelCard key={lesson.id} lesson={lesson} index={index} />
                ))}

                {/* Unlock Node */}
                <div className="relative z-10 flex flex-col items-center group">
                    <Link href="/resources">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-32 h-32 rounded-[2rem] bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white shadow-[0_20px_50px_rgba(251,188,5,0.3)] ring-8 ring-white dark:ring-gray-950 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
                            <Lock size={48} className="group-hover:hidden transition-all" />
                            <Trophy size={48} className="hidden group-hover:block transition-all animate-bounce" />

                            <div className="absolute bottom-4 text-xs font-black uppercase tracking-widest">
                                The Loot
                            </div>
                        </motion.div>
                    </Link>
                    <h3 className="mt-8 font-black text-3xl dark:text-white uppercase tracking-tight">Resource Vault</h3>
                    <p className="text-gray-500 font-bold">Unlocks at Level 99</p>
                </div>
            </div>
        </section>
    );
}

function LevelCard({ lesson, index }: { lesson: SyllabusItem; index: number }) {
    const isEven = index % 2 === 0;
    const ref = useRef(null);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, type: "spring" }}
            className={cn(
                "relative z-10 flex flex-col md:flex-row items-center gap-12 group",
                isEven ? "md:flex-row-reverse" : ""
            )}
        >
            {/* Connector Dot */}
            <div className="absolute left-4 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 rounded-full border-4 border-gray-200 dark:border-gray-700 z-20 group-hover:border-google-blue transition-colors duration-500 hidden md:block">
                <div className="w-full h-full rounded-full bg-gray-300 dark:bg-gray-600 group-hover:bg-google-blue transition-colors duration-500" />
            </div>

            {/* The Card */}
            <div className="flex-1 w-full md:w-auto md:max-w-xl perspective-1000">
                <Link href={`/lessons/${lesson.id.replace("lesson-", "")}`} className="block">
                    <motion.div
                        whileHover={{ rotateY: isEven ? 5 : -5, scale: 1.02 }}
                        className={cn(
                            "relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-[var(--card-bg)] border border-[var(--glass-border)] p-1 shadow-2xl transition-all duration-500",
                            "hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]",
                            "group-hover:border-[var(--card-hover-border)]"
                        )}
                    >
                        <div className={cn(
                            "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-transparent via-transparent to-google-blue/5 pointer-events-none"
                        )} />

                        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-[2.2rem] p-8 md:p-10 h-full">
                            <div className="flex justify-between items-start mb-8">
                                <div className={cn(
                                    "flex flex-col items-center justify-center w-16 h-16 rounded-2xl font-black text-2xl shadow-inner",
                                    lesson.color
                                )}>
                                    <span className="text-[10px] opacity-70 uppercase tracking-wider">Lvl</span>
                                    0{index + 1}
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Mission Time</span>
                                    <span className="font-mono font-bold text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-lg">
                                        {lesson.duration}
                                    </span>
                                </div>
                            </div>

                            <h3 className="text-4xl md:text-5xl font-black mb-6 leading-[0.9] text-[var(--text-primary)] group-hover:text-google-blue transition-colors font-display">
                                {lesson.title.split(":")[1]?.trim() || lesson.title}
                            </h3>

                            <p className="text-lg text-[var(--text-secondary)] mb-8 font-medium leading-relaxed">
                                {lesson.description}
                            </p>

                            <div className="flex items-center gap-4 pt-8 border-t border-gray-100 dark:border-gray-800">
                                <span className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-wider group-hover:text-google-blue transition-colors">
                                    Enter Mission <ChevronRight size={16} />
                                </span>
                                <div className="flex-1" />
                                <div className="flex gap-2">
                                    {/* Mock Achievement Badges */}
                                    <div className="w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600 dark:text-yellow-400" title="Gold Star">
                                        <Star size={14} fill="currentColor" />
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400" title="Completed">
                                        <CheckCircle size={14} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </Link>
            </div>

            <div className="flex-1 hidden md:block" />
        </motion.div>
    );
}
