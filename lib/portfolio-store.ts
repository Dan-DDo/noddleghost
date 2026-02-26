export type PortfolioTag =
  | "Recipe"
  | "Idea"
  | "Dessert"
  | "Korean"
  | "Italian"
  | "Quick"
  | "Signature";

export type PortfolioItem = {
  id: string;
  title: string;
  emoji?: string;
  tags: PortfolioTag[];
  date: string; // YYYY-MM-DD
  excerpt?: string;
  pinned?: boolean;
  content?: string; // ✅ 상세 본문(긴 글)

  // ✅ 추가: 업로드한 이미지(DataURL)
  coverImage?: string; // "data:image/png;base64,...."
};

export const PORTFOLIO_STORAGE_KEY = "noddleghost:portfolio-items";
export const PORTFOLIO_UPDATED_EVENT = "portfolio-updated";

export const ALL_PORTFOLIO_TAGS: PortfolioTag[] = [
  "Recipe",
  "Idea",
  "Dessert",
  "Korean",
  "Italian",
  "Quick",
  "Signature",
];

export const seedPortfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "바질페스토 파스타",
    emoji: "🍝",
    tags: ["Recipe", "Italian", "Signature"],
    date: "2026-02-20",
    excerpt: "레몬 제스트와 잣을 더한 산뜻한 바질페스토.",
    pinned: true,
  },
  {
    id: "2",
    title: "된장버터 가지구이",
    emoji: "🍆",
    tags: ["Recipe", "Korean", "Quick"],
    date: "2026-02-18",
    excerpt: "된장과 버터의 감칠맛 조합.",
  },
  {
    id: "3",
    title: "요리에서 영감받은 UI 메모",
    emoji: "🗒️",
    tags: ["Idea"],
    date: "2026-02-10",
    excerpt: "재료→과정→결과 구조를 UI로 설계.",
  },
];

export function safeParseJSON<T>(raw: string | null): T | null {
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export function loadPortfolioItems(): PortfolioItem[] {
  if (typeof window === "undefined") return seedPortfolioItems;

  const raw = localStorage.getItem(PORTFOLIO_STORAGE_KEY);
  const parsed = safeParseJSON<PortfolioItem[]>(raw);

  if (!parsed || !Array.isArray(parsed) || parsed.length === 0) {
    // 최초 진입(또는 깨짐) 시 seed 주입
    localStorage.setItem(PORTFOLIO_STORAGE_KEY, JSON.stringify(seedPortfolioItems));
    return seedPortfolioItems;
  }

  return parsed;
}

export function savePortfolioItems(items: PortfolioItem[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(PORTFOLIO_STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event(PORTFOLIO_UPDATED_EVENT));
}

export function createId() {
  // 브라우저 지원되면 UUID, 아니면 timestamp+random
  // @ts-ignore
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  return `id_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

export function upsertPortfolioItem(item: PortfolioItem) {
  const items = loadPortfolioItems();
  const idx = items.findIndex((x) => x.id === item.id);
  if (idx >= 0) items[idx] = item;
  else items.unshift(item);
  savePortfolioItems(items);
}

export function deletePortfolioItem(id: string) {
  const items = loadPortfolioItems().filter((x) => x.id !== id);
  savePortfolioItems(items);
}