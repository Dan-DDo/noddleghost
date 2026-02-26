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
  date: string;
  excerpt?: string;
  pinned?: boolean;
};

export const portfolioItems: PortfolioItem[] = [
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