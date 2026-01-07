import { syllabus } from "@/lib/data";
import { ArrowRight, Calendar, CheckCircle, Clock } from "lucide-react";
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
        <main className="min-h-screen py-20 px-6">
            {/* Header */}
            <div className={cn("p-10 rounded-3xl mb-12 text-center relative overflow-hidden", lesson.color.replace("bg-", "bg-opacity-10 "))}>
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex justify-center gap-4 mb-6">
                        <span className="px-4 py-1.5 rounded-full bg-white dark:bg-gray-800 text-sm font-bold shadow-sm flex items-center gap-2">
                            <Clock size={16} /> {lesson.duration}
                        </span>
                        <div className="flex gap-2">
                            {lesson.tags.map(tag => (
                                <span key={tag} className="px-3 py-1.5 rounded-full bg-white/50 dark:bg-gray-800/50 text-sm font-medium">
                                    # {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">{lesson.title}</h1>
                    <p className="text-xl opacity-80 max-w-2xl mx-auto mb-8">{lesson.description}</p>

                    <div className="inline-flex items-center gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm md:text-lg">
                        <span className="text-2xl">🎯</span>
                        <span className="font-bold">{lesson.goal}</span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto space-y-16">
                {lesson.topics.map((topic, i) => (
                    <section key={i} className="relative pl-8 border-l-2 border-gray-100 dark:border-gray-800">
                        <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 border-4 border-white dark:border-gray-900 flex items-center justify-center font-bold text-sm">
                            {i + 1}
                        </div>

                        <div className="mb-6">
                            <div className="flex items-center gap-3 mb-2">
                                <span className={cn(
                                    "text-xs font-bold uppercase tracking-wider px-2 py-1 rounded",
                                    topic.type === "Concept" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-200" :
                                        topic.type === "Demo" ? "bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-200" :
                                            "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-200"
                                )}>
                                    {topic.type}
                                </span>
                                <span className="text-sm text-gray-400 font-mono">{topic.duration}</span>
                            </div>
                            <h2 className="text-3xl font-bold mb-4">{topic.title}</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl">
                                {topic.content}
                            </p>
                        </div>

                        {topic.tools && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {topic.tools.map((tool) => (
                                    <Link
                                        href={tool.url}
                                        key={tool.name}
                                        target="_blank"
                                        className="group p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-md bg-white dark:bg-gray-900"
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-bold">{tool.name}</h3>
                                            {tool.badge && (
                                                <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 font-bold">
                                                    {tool.badge}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{tool.description}</p>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </section>
                ))}
            </div>

            {/* Navigation Footer */}
            <div className="max-w-4xl mx-auto mt-20 pt-10 border-t border-gray-100 dark:border-gray-800 flex justify-between">
                <Link href="/" className="px-6 py-3 rounded-full bg-gray-100 dark:bg-gray-800 font-bold text-sm hover:bg-gray-200 transition-colors">
                    ← 回首頁
                </Link>

                {parseInt(id) < 2 ? (
                    <Link href={`/lessons/${parseInt(id) + 1}`} className="px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-bold text-sm hover:opacity-80 transition-opacity flex items-center gap-2">
                        下一課: Lesson {parseInt(id) + 1} <ArrowRight size={16} />
                    </Link>
                ) : (
                    <Link href="/resources" className="px-6 py-3 rounded-full bg-green-500 text-white font-bold text-sm hover:bg-green-600 transition-colors flex items-center gap-2">
                        查看資源 <CheckCircle size={16} />
                    </Link>
                )}
            </div>
        </main>
    );
}
