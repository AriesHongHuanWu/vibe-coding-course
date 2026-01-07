"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const FloatingChip = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.8, ease: "easeOut" }}
        className={cn(
            "absolute px-4 py-2 rounded-full shadow-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-sm font-medium flex items-center gap-2 text-gray-800 dark:text-gray-200",
            className
        )}
    >
        {children}
    </motion.div>
);

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-20">

            {/* Background Blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30 animate-pulse" />
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-yellow-100 dark:bg-yellow-900/20 rounded-full blur-3xl opacity-30 animate-pulse delay-700" />

            {/* Floating Chips */}
            <div className="absolute inset-0 max-w-6xl mx-auto pointer-events-none">
                <FloatingChip className="top-20 left-10 md:left-20 rotate-[-6deg] text-google-blue" delay={1.2}>
                    <Sparkles size={16} /> Gemini AI
                </FloatingChip>
                <FloatingChip className="top-40 right-10 md:right-32 rotate-[12deg] text-google-red" delay={1.4}>
                    ❤️ Lovable
                </FloatingChip>
                <FloatingChip className="bottom-32 left-10 md:left-32 rotate-[6deg] text-google-green" delay={1.6}>
                    🚀 Cursor
                </FloatingChip>
                <FloatingChip className="bottom-20 right-10 md:right-20 rotate-[-12deg] text-google-yellow" delay={1.8}>
                    ⚡ Firebase
                </FloatingChip>
            </div>

            <div className="relative z-10 text-center max-w-4xl px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800/50 text-gray-800 dark:text-gray-200 text-xs font-semibold uppercase tracking-wider mb-6"
                >
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    High School Edition • 高中生專屬
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-[var(--text-primary)]"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-google-blue via-google-red to-google-yellow">
                        Vibe Coding
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-[var(--text-secondary)] mb-10 leading-relaxed max-w-2xl mx-auto"
                >
                    你不需要當砌磚工人，你要當 <span className="font-bold text-[var(--text-primary)] border-b-4 border-yellow-200 dark:border-yellow-900">總導演</span>。<br />
                    用直覺與 AI 對話，讓代碼自己長出來。
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center gap-4 justify-center"
                >
                    <Link href="/lessons/1" className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        開始課程 <ArrowRight size={20} />
                    </Link>
                    <Link href="/resources" className="px-8 py-4 bg-white dark:bg-gray-900/50 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-full font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm hover:shadow-md">
                        查看講義
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
