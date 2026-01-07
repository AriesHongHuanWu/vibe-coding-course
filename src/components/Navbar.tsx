"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { name: "首頁", path: "/" },
        { name: "Lesson 1: AI 魔法", path: "/lessons/1" },
        { name: "Lesson 2: API 串接", path: "/lessons/2" },
        { name: "工具資源", path: "/resources" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="font-display font-bold text-xl tracking-tight hidden md:block">
                    Vibe Coding
                </Link>
                <Link href="/" className="font-display font-bold text-xl tracking-tight md:hidden">
                    VC
                </Link>

                {/* Links */}
                <div className="flex items-center gap-1 md:gap-6">
                    {navItems.map((item) => {
                        const isActive = pathname === item.path;

                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={cn(
                                    "relative px-3 py-1.5 text-sm font-medium transition-colors hover:text-google-blue dark:hover:text-google-blue",
                                    isActive ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"
                                )}
                            >
                                {item.name}
                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-full -z-10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </Link>
                        )
                    })}
                </div>

                {/* Toggle */}
                <div className="flex items-center gap-4">
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}
