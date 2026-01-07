
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
    duration: "50-90 mins",
    goal: "你不需要當砌磚工人，你要當「導演」。用 AI 幫你把大樓蓋起來。",
    topics: [
      {
        title: "暖身：你是導演，AI 是演員",
        duration: "15 mins",
        type: "Concept",
        content: "什麼是 Vibe Coding？不是背語法，而是用「自然語言」寫程式。\n前端是餐廳裝潢，後端是廚房，API 是服務生。",
      },
      {
        title: "Level 1: 傳統 AI 聊天室 (Gemini)",
        duration: "10 mins",
        type: "Demo",
        content: "痛點展示：用 ChatGPT 寫倒數計時器。\n問題：要複製貼上、沒有預覽、Token 少容易忘記設定。",
        tools: [
          { name: "Gemini", description: "Google 的強大 AI，適合問問題。", url: "https://gemini.google.com", badge: "免費" },
          { name: "ChatGPT", description: "經典 AI 聊天機器人。", url: "https://chatgpt.com" }
        ]
      },
      {
        title: "Level 2: 一句話生成網頁 (The Magic)",
        duration: "25 mins",
        type: "Practice",
        content: "Web-based AI Builders 實戰。\nLive Demo：做一個「高中生專屬匿名告白版」或「期末考倒數計時器」。\n詠唱技巧：「把背景換成黑客風格」、「按鈕要會發光」。",
        tools: [
          { name: "Bolt.new", description: "目前最強，瀏覽器內直接跑全端網頁。", url: "https://bolt.new", badge: "五星推薦" },
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
    duration: "50-90 mins",
    goal: "建立 VS Code 開發環境，並學會串接 Google Gemini API 做一個「廢話產生器」。",
    topics: [
      {
        title: "Level 3: 專業開發環境 (Visual Studio Code)",
        duration: "20 mins",
        type: "Concept",
        content: "為什麼要用 VS Code？因為真正的專案需要更多控制權。\n介紹 GitHub Student Pack 與 Copilot (學生免費神器)。",
        tools: [
          { name: "Cursor", description: "Vibe Coding 神器，Cmd+I 改全專案。", url: "https://cursor.sh", badge: "神級工具" },
          { name: "VS Code", description: "行業標準編輯器。", url: "https://code.visualstudio.com" },
          { name: "GitHub Copilot", description: "地表最強 AI 寫扣助手 (學生免費)。", url: "https://education.github.com/pack", badge: "必申請" }
        ]
      },
      {
        title: "賦予網頁靈魂：API 大串燒",
        duration: "20 mins",
        type: "Concept",
        content: "網頁不只要漂亮，還要聰明。我們「呼叫」別人的 API 來用。\nGoogle AI Studio (Gemini) 與 Groq (極速推論)。",
        tools: [
          { name: "Google AI Studio", description: "免費拿 Gemini API Key，額度超佛心。", url: "https://aistudio.google.com", badge: "開發者必備" },
          { name: "Groq", description: "推論速度極快，適合做即時對話。", url: "https://groq.com", badge: "極速" },
          { name: "Firebase Auth", description: "不用自己寫登入系統，直接用 Google 登入。", url: "https://firebase.google.com" }
        ]
      },
      {
        title: "實戰演練：AI 指揮官 (Prompt Engineering)",
        duration: "15 mins",
        type: "Practice",
        content: "如何叫 AI 教你做？\n技巧：Role (角色) -> Stack (技術) -> Step-by-Step (步驟)。\n挑戰：做一個「廢話產生器」或「毒舌運勢占卜」。",
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
