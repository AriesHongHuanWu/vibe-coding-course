
export interface SyllabusItem {
  id: string;
  title: string;
  description: string;
  color: string;
  tags: string[];
  duration: string;
  goal: string;
  topics: {
    title: string;
    duration: string;
    type: "Concept" | "Demo" | "Practice";
    content: string;
    tools?: Tool[];
  }[];
}

export interface Tool {
  name: string;
  description: string;
  url: string;
  category?: string;
  badge?: string;
}

export const syllabus: SyllabusItem[] = [
  {
    id: "lesson-1",
    title: "Lesson 1: 從 0 到 1，體驗「魔法」",
    description: "理解網頁運作原理，並使用「全自動化 AI 工具」在 10 分鐘內做出一個看起來很厲害的網頁。",
    color: "bg-blue-100 border-blue-200 text-blue-800",
    tags: ["觀念", "生成式 AI", "無代碼"],
    duration: "50-60 mins",
    goal: "做出第一個 AI 生成的網頁，理解前端與後端的區別。",
    topics: [
      {
        title: "暖身與觀念：你是導演，AI 是演員",
        duration: "15 mins",
        type: "Concept",
        content: "什麼是 Vibe Coding？不用背語法，用自然語言寫程式。\n網頁運作原理：前端 (裝潢)、後端 (廚房)、API (服務生)。",
      },
      {
        title: "Level 1: 傳統 AI 聊天室的痛點",
        duration: "10 mins",
        type: "Demo",
        content: "嘗試用 ChatGPT 寫一個倒數計時器。\n痛點：複製貼上很麻煩、沒有即時預覽、Token 限制。",
        tools: [
          { name: "Gemini", description: "Google 的強大 AI，適合問問題。", url: "https://gemini.google.com", badge: "免費" },
          { name: "ChatGPT", description: "經典 AI 聊天機器人。", url: "https://chatgpt.com" }
        ]
      },
      {
        title: "Level 2: 新世代網頁生成神器",
        duration: "25 mins",
        type: "Practice",
        content: "一句話生成完整網頁。實作：高中生專屬匿名告白版 / 期末考倒數計時器。\n指令技巧：「把背景換成黑客風格」、「按鈕要會發光」。",
        tools: [
          { name: "Bolt.new", description: "直接在瀏覽器對話，支援全端邏輯。", url: "https://bolt.new", badge: "五星推薦" },
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
    duration: "60 mins",
    goal: "建立 VS Code 開發環境，並學會串接 Google Gemini API。",
    topics: [
      {
        title: "Level 3: 建立專業開發環境",
        duration: "20 mins",
        type: "Concept",
        content: "為什麼要用 VS Code？\n介紹 GitHub Student Pack (學生必備福利) 與 Copilot。",
        tools: [
          { name: "GitHub Student Pack", description: "免費獲得大量付費工具。", url: "https://education.github.com/pack", badge: "必申請" },
          { name: "Cursor", description: "VS Code 的超強進化版，Cmd+I 改全專案。", url: "https://cursor.sh", badge: "神級工具" },
          { name: "VS Code", description: "行業標準編輯器。", url: "https://code.visualstudio.com" }
        ]
      },
      {
        title: "賦予網頁靈魂：API 大串燒",
        duration: "20 mins",
        type: "Concept",
        content: "網頁不只要漂亮，還要聰明。我們不訓練 AI，我們「呼叫」它。\n介紹 Google AI Studio 與 Groq。",
        tools: [
          { name: "Google AI Studio", description: "免費拿 Gemini API Key。", url: "https://aistudio.google.com", badge: "超佛心" },
          { name: "Groq", description: "極速推論，適合即時應用。", url: "https://groq.com", badge: "極速" },
          { name: "Firebase", description: "不用寫後端也能做登入系統。", url: "https://firebase.google.com" }
        ]
      },
      {
        title: "實戰演練：AI 指揮官 (Prompt Engineering)",
        duration: "15 mins",
        type: "Practice",
        content: "如何叫 AI 教你寫 Code？\nRole (角色) -> Stack (技術) -> Step-by-Step (步驟)。\n範例：做一個「廢話產生器」或「毒舌運勢占卜」。",
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
