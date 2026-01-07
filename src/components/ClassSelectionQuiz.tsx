"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Bot, Code2, Sparkles, Wand2, Hammer, BrainCircuit, Paintbrush } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type ClassType = "Alchemist" | "Architect";

interface Question {
    id: number;
    text: string;
    options: {
        text: string;
        icon: any;
        type: ClassType;
    }[];
}

const questions: Question[] = [
    {
        id: 1,
        text: "面對一個新的靈感，你通常會...",
        options: [
            { text: "直接畫出畫面，越快看到越好", icon: Wand2, type: "Alchemist" },
            { text: "思考資料結構，確保邏輯完美", icon: BrainCircuit, type: "Architect" },
        ]
    },
    {
        id: 2,
        text: "你的理想工作桌長什麼樣子？",
        options: [
            { text: "充滿設計稿、色票、漂亮的螢幕", icon: Paintbrush, type: "Alchemist" },
            { text: "多螢幕、駭客任務般的代碼瀑布", icon: Hammer, type: "Architect" },
        ]
    },
    {
        id: 3,
        text: "遇到 Bug 時，你的直覺是...",
        options: [
            { text: "這畫面怎麼跑版了？(視覺優先)", icon: Sparkles, type: "Alchemist" },
            { text: "這數據回傳錯誤了？(邏輯優先)", icon: Code2, type: "Architect" },
        ]
    }
];

export function ClassSelectionQuiz() {
    const [step, setStep] = useState(0); // 0 = start, 1-3 = questions, 4 = result
    const [scores, setScores] = useState({ Alchemist: 0, Architect: 0 });
    const [result, setResult] = useState<ClassType | null>(null);

    const handleAnswer = (type: ClassType) => {
        const newScores = { ...scores, [type]: scores[type] + 1 };
        setScores(newScores);

        if (step < questions.length) {
            setStep(step + 1);
        } else {
            // Calculate result
            const finalResult = newScores.Alchemist > newScores.Architect ? "Alchemist" : "Architect";
            setResult(finalResult);
            setStep(step + 1);
        }
    };

    const resetQuiz = () => {
        setStep(0);
        setScores({ Alchemist: 0, Architect: 0 });
        setResult(null);
    };

    return (
        <section className="py-24 px-6 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-[3rem] p-8 md:p-16 shadow-2xl border border-gray-200 dark:border-gray-800 text-center relative overflow-hidden min-h-[500px] flex flex-col justify-center items-center">

                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />

                <AnimatePresence mode="wait">
                    {/* START SCREEN */}
                    {step === 0 && (
                        <motion.div
                            key="start"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-bold text-sm">
                                <Bot size={18} /> Vibe Sorting Hat
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black mb-6 font-display dark:text-white">
                                探索你的<br />天賦職業
                            </h2>
                            <p className="text-xl text-gray-700 dark:text-gray-400 max-w-lg mx-auto">
                                你是注重視覺的「煉金術士」，還是掌控邏輯的「架構師」？<br />
                                回答 3 個問題，找出最適合你的 AI 工具。
                            </p>
                            <button
                                onClick={() => setStep(1)}
                                className="px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold text-lg hover:scale-105 transition-transform shadow-lg flex items-center gap-2 mx-auto"
                            >
                                開始測驗 <ArrowRight size={20} />
                            </button>
                        </motion.div>
                    )}

                    {/* QUESTIONS */}
                    {step > 0 && step <= questions.length && (
                        <motion.div
                            key={`q-${step}`}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            className="w-full max-w-2xl"
                        >
                            <div className="text-sm font-bold text-gray-400 mb-8 uppercase tracking-widest">
                                Question {step} / {questions.length}
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-12 dark:text-white">
                                {questions[step - 1].text}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {questions[step - 1].options.map((option) => (
                                    <button
                                        key={option.text}
                                        onClick={() => handleAnswer(option.type)}
                                        className="p-8 rounded-3xl bg-gray-50 dark:bg-gray-800 border-2 border-transparent hover:border-google-blue dark:hover:border-google-blue hover:text-google-blue dark:hover:text-google-blue transition-all group text-left group"
                                    >
                                        <option.icon size={48} className="mb-6 text-gray-400 group-hover:text-google-blue transition-colors" />
                                        <div className="text-xl font-bold dark:text-white group-hover:text-current">
                                            {option.text}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* RESULT: ALCHEMIST */}
                    {step > questions.length && result === "Alchemist" && (
                        <motion.div
                            key="result-alchemist"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="space-y-8"
                        >
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 mx-auto flex items-center justify-center shadow-2xl ring-8 ring-white dark:ring-gray-900">
                                <Sparkles size={64} className="text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">你的職業是</h3>
                                <h2 className="text-5xl md:text-7xl font-black mb-6 font-display dark:text-white">
                                    The Alchemist
                                    <span className="block text-2xl mt-2 text-gray-400 font-sans tracking-wide">煉金術士 (視覺型)</span>
                                </h2>
                            </div>
                            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-lg mx-auto">
                                你對畫面有極高的敏感度，喜歡快速看到成果。你不應該浪費時間在繁瑣的語法上。
                            </p>

                            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl border border-purple-100 dark:border-purple-900/50">
                                <div className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-4">
                                    推薦神武 (Recommended Weapons)
                                </div>
                                <div className="flex gap-4 justify-center">
                                    <Link href="https://bolt.new" target="_blank" className="font-bold underline hover:text-purple-600">Bolt.new</Link>
                                    <Link href="https://lovable.dev" target="_blank" className="font-bold underline hover:text-purple-600">Lovable</Link>
                                </div>
                            </div>

                            <button onClick={resetQuiz} className="text-gray-400 hover:text-gray-600 text-sm font-bold underline">
                                再測一次
                            </button>
                        </motion.div>
                    )}

                    {/* RESULT: ARCHITECT */}
                    {step > questions.length && result === "Architect" && (
                        <motion.div
                            key="result-architect"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="space-y-8"
                        >
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 mx-auto flex items-center justify-center shadow-2xl ring-8 ring-white dark:ring-gray-900">
                                <BrainCircuit size={64} className="text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">你的職業是</h3>
                                <h2 className="text-5xl md:text-7xl font-black mb-6 font-display dark:text-white">
                                    The Architect
                                    <span className="block text-2xl mt-2 text-gray-400 font-sans tracking-wide">架構師 (邏輯型)</span>
                                </h2>
                            </div>
                            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-lg mx-auto">
                                你喜歡掌控細節，享受邏輯搭建的過程。你需要最強大的編輯器來輔助你的大腦。
                            </p>

                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-900/50">
                                <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4">
                                    推薦神武 (Recommended Weapons)
                                </div>
                                <div className="flex gap-4 justify-center">
                                    <Link href="https://cursor.sh" target="_blank" className="font-bold underline hover:text-blue-600">Cursor</Link>
                                    <Link href="https://code.visualstudio.com" target="_blank" className="font-bold underline hover:text-blue-600">VS Code</Link>
                                </div>
                            </div>

                            <button onClick={resetQuiz} className="text-gray-400 hover:text-gray-600 text-sm font-bold underline">
                                再測一次
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
