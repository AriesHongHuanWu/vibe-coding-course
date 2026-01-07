import { syllabus } from "@/lib/data";
import { ArrowRight, CheckCircle, Clock, ChevronRight, Gamepad2, Target, Code2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";

// Required for Static Export
export function generateStaticParams() {
    return syllabus.map((lesson) => ({
        id: lesson.id.replace("lesson-", ""),
    }));
}

export default async function LessonPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const lesson = syllabus.find((l) => l.id === `lesson-${id}`);

    if (!lesson) {
        notFound();
    }

    return (
        <main className="min-h-screen py-24 px-4 md:px-8 max-w-5xl mx-auto">

            {/* Mission Briefing Header */}
            <div className="relative mb-20 group perspective-1000">
                <div className={cn(
                    "absolute inset-0 bg-gradient-to-r from-google-blue/20 to-purple-500/20 blur-3xl -z-10 rounded-full opacity-50"
                )} />

                <div className={cn(
                    "relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-[var(--card-bg)] border border-gray-200 dark:border-[var(--card-border)] p-8 md:p-12 shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                )}>
                    <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
                        <div className="flex items-center gap-3">
                            <div className={cn(
                                "flex items-center justify-center w-12 h-12 rounded-xl text-xl font-black shadow-inner",
                                lesson.color
                            )}>
                                {id}
                            </div>
                            <span className="text-sm font-bold tracking-widest uppercase text-gray-600">Mission Briefing</span>
                        </div>

                        <div className="flex gap-2 flex-wrap">
                            <span className="px-4 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm font-mono font-bold flex items-center gap-2 text-gray-700 dark:text-gray-300">
                                <Clock size={16} /> {lesson.duration}
                            </span>
                            {lesson.tags.map(tag => (
                                <span key={tag} className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-bold text-gray-700 dark:text-gray-400">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-[var(--text-primary)] font-display uppercase leading-[0.9]">
                        {lesson.title.split(":")[1]?.trim() || lesson.title}
                    </h1>

                    <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-3xl mb-10 font-medium leading-relaxed">
                        {lesson.description}
                    </p>

                    <div className="inline-flex items-center gap-4 bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
                        <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">
                            <Target size={20} />
                        </div>
                        <div>
                            <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Main Objective</div>
                            <div className="font-bold text-lg text-gray-900 dark:text-white">{lesson.goal}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission Content Steps */}
            <div className="space-y-12 relative">
                <div className="absolute left-8 md:left-10 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-800 -z-10" />

                {lesson.topics.map((topic, i) => (
                    <section key={i} className="relative pl-20 md:pl-24">
                        <div className="absolute left-4 md:left-6 top-0 w-8 h-8 md:w-10 md:h-10 rounded-xl bg-white dark:bg-gray-900 border-4 border-gray-100 dark:border-gray-800 flex items-center justify-center font-black text-sm z-10 shadow-lg">
                            {i + 1}
                        </div>

                        <div className="mb-6 group">
                            <div className="flex items-center gap-3 mb-3">
                                <span className={cn(
                                    "text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded",
                                    topic.type === "Concept" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" :
                                        topic.type === "Demo" ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300" :
                                            "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                                )}>
                                    {topic.type}
                                </span>
                                <span className="text-sm text-gray-400 font-mono hidden md:inline-block">Time: {topic.duration}</span>
                            </div>

                            <h2 className="text-3xl font-black mb-4 dark:text-white font-display group-hover:text-google-blue transition-colors">
                                {topic.title}
                            </h2>

                            <div className="prose dark:prose-invert max-w-none text-lg text-gray-600 dark:text-gray-400 leading-relaxed bg-white dark:bg-[var(--card-bg)] p-8 rounded-3xl border border-gray-100 dark:border-[var(--card-border)] shadow-sm">
                                {topic.content}
                            </div>
                        </div>

                        {topic.tools && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                                {topic.tools.map((tool) => (
                                    <Link
                                        href={tool.url}
                                        key={tool.name}
                                        target="_blank"
                                        className="group flex items-center gap-4 p-4 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-google-blue dark:hover:border-google-blue transition-all bg-gray-50 dark:bg-gray-900/30 hover:bg-white dark:hover:bg-gray-800"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm text-google-blue">
                                            <Code2 size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold dark:text-white">{tool.name}</h3>
                                            <p className="text-xs text-gray-500 font-mono mt-0.5">Recommended Tool</p>
                                        </div>
                                        <ChevronRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-google-blue" />
                                    </Link>
                                ))}
                            </div>
                        )}
                    </section>
                ))}
            </div>

            {/* Navigation Footer */}
            <div className="mt-24 pt-10 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between gap-6 items-center">
                <Link href="/" className="px-8 py-4 rounded-full bg-gray-100 dark:bg-gray-800 font-bold text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors w-full md:w-auto text-center">
                    ← ABORT MISSION (HOME)
                </Link>

                {parseInt(id) < 2 ? (
                    <Link href={`/lessons/${parseInt(id) + 1}`} className="px-8 py-4 rounded-full bg-black dark:bg-white text-white dark:text-black font-black text-sm hover:scale-105 transition-transform flex items-center justify-center gap-2 w-full md:w-auto shadow-lg hover:shadow-xl">
                        NEXT MISSION: LVL {parseInt(id) + 1} <ArrowRight size={18} />
                    </Link>
                ) : (
                    <Link href="/resources" className="px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-black text-sm hover:scale-105 transition-transform flex items-center justify-center gap-2 w-full md:w-auto shadow-lg hover:shadow-xl">
                        CLAIM REWARDS <Gamepad2 size={18} />
                    </Link>
                )}
            </div>
        </main>
    );
}
