export default function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-gray-100 bg-white">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <h3 className="font-bold text-lg">Vibe Coding</h3>
                    <p className="text-gray-500 text-sm">為下一代開發者設計的直覺式編碼課程。</p>
                </div>
                <div className="flex gap-6 text-sm text-gray-600">
                    <a href="#" className="hover:text-black hover:underline">課程大綱</a>
                    <a href="#" className="hover:text-black hover:underline">工具資源</a>
                    <a href="#" className="hover:text-black hover:underline">GitHub</a>
                </div>
            </div>
        </footer>
    );
}
