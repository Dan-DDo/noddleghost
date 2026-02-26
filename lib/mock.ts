import type { Idea, Recipe } from "./types";

export const recipes: Recipe[] = [
  {
    id: "r1",
    title: "김치볶음밥",
    summary: "김치·파·햄을 충분히 볶고 반숙 계란으로 마무리.",
    imageUrl: "https://picsum.photos/seed/kimchi/1200/900",
    tags: ["한식", "밥"],
    createdAt: new Date().toISOString(),
  },
  {
    id: "r2",
    title: "버터 파스타",
    summary: "버터+마늘+간장 조합, 면 삶은 물로 농도 조절.",
    imageUrl: "https://picsum.photos/seed/pasta/1200/900",
    tags: ["양식", "면"],
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: "r3",
    title: "연어 스테이크",
    summary: "겉은 바삭, 속은 촉촉. 레몬과 딜로 향 추가.",
    imageUrl: "https://picsum.photos/seed/salmon/1200/900",
    tags: ["양식", "생선"],
    createdAt: new Date(Date.now() - 2 * 86400000).toISOString(),
  },
];

export const ideas: Idea[] = [
  {
    id: "i1",
    title: "포트폴리오 카드에 ‘오늘의 한 줄’",
    summary: "요리 감정/상황을 한 줄로 남기면 아카이브가 더 살아남.",
    tags: ["콘텐츠", "브랜딩"],
    createdAt: new Date().toISOString(),
    relatedRecipeIds: ["r1"],
  },
  {
    id: "i2",
    title: "‘재료 태그’로 자동 분류",
    summary: "재료 태그를 따로 두고 검색 정확도를 올리기.",
    tags: ["UX", "검색"],
    createdAt: new Date(Date.now() - 3600_000).toISOString(),
  },
];