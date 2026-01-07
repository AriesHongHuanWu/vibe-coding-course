"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Gamepad2, Home, Library, Map } from "lucide-react";

export default function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { name: "HQ", path: "/", icon: Home },
        { name: "Lvl 1", path: "/lessons/1", icon: Gamepad2 },
        { name: "Lvl 2", path: "/lessons/2", icon: Map },
        { name: "Inv", path: "/resources", icon: Library },
    ];

    return (
        <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <div className="relative z-50 flex items-center justify-between px-6 py-4 bg-[var(--card-bg)]/80 backdrop-blur-md rounded-full border border-[var(--card-border)] shadow-sm pointer-events-auto">

                {/* Logo (Mobile Hidden / Desktop Small) */}
                <Link href="/" className="text-xl font-black tracking-tighter flex items-center gap-2 text-[var(--text-primary)] mr-2">
                    VC
                </Link>

                {/* Tabs */}
                {navItems.map((item) => {
                    const isActive = pathname === item.path;

                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={cn(
                                "relative px-4 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2",
                                isActive ? "text-google-blue dark:text-google-blue" : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                            )}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="navbar-tab"
                                    className="absolute inset-0 bg-blue-50 dark:bg-blue-900/20 rounded-full"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                <item.icon size={16} />
                                <span className={cn(isActive ? "block" : "hidden md:block")}>{item.name}</span>
                            </span>
                        </Link>
                    )
                })}

                <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-1" />

                {/* Toggle */}
                <ThemeToggle />
            </div>
        </nav>
    );
}
