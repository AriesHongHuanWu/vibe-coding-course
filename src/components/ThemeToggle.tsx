"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800" />
        );
    }

    return (
        <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-[var(--card-bg)] hover:bg-[var(--card-border)] text-[var(--text-primary)] transition-colors shadow-sm hover:shadow-md relative overflow-hidden"
            aria-label="Toggle Theme"
        >
            <div className="relative z-10">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 absolute top-0 left-0" />
                <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                {/* Spacer to keep size */}
                <div className="h-[1.2rem] w-[1.2rem] opacity-0"></div>
            </div>
        </motion.button>
    );
}
