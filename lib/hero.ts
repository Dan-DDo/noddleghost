export type HeroSetting = {
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText: string;
  ctaHref: string;
};

export const HERO_STORAGE_KEY = "hero_setting_v1";

export const defaultHero: HeroSetting = {
  title: "요리 사진 포트폴리오 · 레시피 아카이브",
  subtitle: "내가 만든 요리를 기록하고, 거기서 나온 아이디어를 함께 모아두는 공간",
  imageUrl: "https://picsum.photos/seed/hero/1400/700",
  ctaText: "포트폴리오 보기",
  ctaHref: "/portfolio",
};