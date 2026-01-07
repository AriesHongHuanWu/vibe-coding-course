
export interface SyllabusItem {
  id: string;
  title: string;
  description: string;
  color: string;
  tags: string[];
  topics: {
    title: string;
    content: string;
    tools?: Tool[];
  }[];
}

export interface Tool {
  name: string;
  description: string;
  url: string;
  category?: string; // e.g., "Web Builder", "IDE", "API"
  badge?: string; // e.g., "必備", "推薦", "免費"
}

export const syllabus: SyllabusItem[] = [
  {
    id: "lesson-1",
    title: "Lesson 1: 從 0 到 1，體驗「魔法」",
    description: "理解網頁運作原理，並使用「全自動化 AI 工具」在 10 分鐘內做出一個看起來很厲害的網頁。",
    color: "bg-blue-100 border-blue-200 text-blue-800",
    tags: ["觀念", "生成式 AI", "無代碼"],
    topics: [
      {
        title: "1. 暖身與觀念 (15 mins)",
        content: "你是導演，AI 是演員。理解 Frontend (裝潢)、Backend (廚房) 與 API (服務生) 的關係。",
      },
      {
        title: "2. Level 1: 傳統 AI 聊天室 (10 mins)",
        content: "體驗用對話寫 Code 的痛點：複製貼上、沒有預覽、Token 限制。",
        tools: [
          { name: "Gemini", description: "Google 的強大 AI，適合問問題。", url: "https://gemini.google.com", badge: "免費" },
          { name: "ChatGPT", description: "經典 AI 聊天機器人。", url: "https://chatgpt.com" }
        ]
      },
      {
        title: "3. Level 2: 新世代網頁生成神器 (25 mins)",
        content: "一句話生成完整網頁。實作：高中生專屬匿名告白版 / 期末考倒數計時器。",
        tools: [
          { name: "Bolt.new", description: "目前最強，支援全端邏輯，瀏覽器直接開發。", url: "https://bolt.new", badge: "五星推薦" },
          { name: "Lovable", description: "介面極美，適合做 Landing Page。", url: "https://lovable.dev", badge: "高顏值" },
          { name: "v0.dev", description: "Vercel 出品，生成漂亮的 UI 元件。", url: "https://v0.dev" }
        ]
      }
    ]
  },
  {
    id: "lesson-2",
    title: "Lesson 2: 從玩具到專業，API 與無限可能",
    description: "脫離網頁版限制，建立專業開發環境，並學會「借用」大公司的 AI 大腦 (API)。",
    color: "bg-red-100 border-red-200 text-red-800",
    tags: ["專業環境", "API 串接", "部署"],
    topics: [
      {
        title: "1. Level 3: 專業開發環境 (20 mins)",
        content: "為什麼要用 VS Code？學生專屬福利與最強 AI 寫扣助手。",
        tools: [
          { name: "GitHub Student Pack", description: "學生必備福利，免費獲得大量付費工具。", url: "https://education.github.com/pack", badge: "必申請" },
          { name: "Cursor", description: "Vibe Coding 神器，Cmd+I 直接改整個專案。", url: "https://cursor.sh", badge: "神級工具" },
          { name: "VS Code + Copilot", description: "行業標準編輯器配上 AI 補全。", url: "https://code.visualstudio.com" }
        ]
      },
      {
        title: "2. 賦予網頁靈魂：API 大串燒 (20 mins)",
        content: "網頁不只要漂亮，還要聰明。呼叫別人的 AI 大腦。",
        tools: [
          { name: "Google AI Studio", description: "免費額度高，拿 Gemini API Key 的地方。", url: "https://aistudio.google.com", badge: "超佛心" },
          { name: "Groq", description: "推論速度極快，適合即時應用。", url: "https://groq.com", badge: "極速" },
          { name: "Firebase", description: "不用寫後端也能做登入系統與資料庫。", url: "https://firebase.google.com" }
        ]
      },
      {
        title: "3. 實戰演練：AI 指揮官 (15 mins)",
        content: "Prompt Engineering: 設定角色 (Role)、技術棧 (Stack)、分步驟 (Step-by-Step)。",
      }
    ]
  },
];

export const cheatSheetTools: Tool[] = [
  { name: "Bolt.new", category: "網頁生成 (Web)", description: "目前最強，支援全端邏輯，可以安裝套件", badge: "⭐⭐⭐⭐⭐", url: "https://bolt.new" },
  { name: "Lovable", category: "網頁生成 (Web)", description: "介面極美，適合做 Landing Page", badge: "⭐⭐⭐⭐", url: "https://lovable.dev" },
  { name: "v0.dev", category: "UI 生成", description: "Vercel 出品，生成漂亮的 Tailwind CSS 元件", badge: "⭐⭐⭐⭐", url: "https://v0.dev" },
  { name: "Cursor", category: "編輯器 (IDE)", description: "Vibe Coding 首選，AI 深度整合，比 VS Code 更強", badge: "⭐⭐⭐⭐⭐", url: "https://cursor.sh" },
  { name: "VS Code", category: "編輯器 (IDE)", description: "行業標準，外掛多", badge: "⭐⭐⭐⭐⭐", url: "https://code.visualstudio.com" },
  { name: "GitHub Copilot", category: "AI 助手", description: "在 VS Code 裡自動補完代碼 (學生包免費)", badge: "⭐⭐⭐⭐⭐", url: "https://github.com/features/copilot" },
  { name: "Firebase", category: "後端/資料庫", description: "Google 出品，包辦登入、資料庫、託管", badge: "⭐⭐⭐⭐⭐", url: "https://firebase.google.com" },
  { name: "Supabase", category: "後端/資料庫", description: "Firebase 的開源替代品，介面像 Excel 好懂", badge: "⭐⭐⭐⭐", url: "https://supabase.com" },
  { name: "Google AI Studio", category: "AI 模型 API", description: "拿 Gemini API Key 的地方，免費額度極高", badge: "⭐⭐⭐⭐⭐", url: "https://aistudio.google.com" },
  { name: "Groq", category: "AI 模型 API", description: "速度超快，使用 Llama 等開源模型", badge: "⭐⭐⭐⭐", url: "https://groq.com" },
];
