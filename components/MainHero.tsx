"use client";

import { useEffect, useState } from "react";
import { HERO_STORAGE_KEY, HeroSetting, defaultHero } from "../lib/hero";

export default function MainHero() {
  const [hero, setHero] = useState<HeroSetting>(defaultHero);

  const loadHero = () => {
    try {
      const raw = localStorage.getItem(HERO_STORAGE_KEY);
      if (raw) setHero({ ...defaultHero, ...JSON.parse(raw) });
      else setHero(defaultHero);
    } catch {
      setHero(defaultHero);
    }
  };

  useEffect(() => {
    loadHero();

    const onStorage = (e: StorageEvent) => {
      if (e.key === HERO_STORAGE_KEY) loadHero();
    };

    const onHeroUpdated = () => loadHero();

    window.addEventListener("storage", onStorage);
    window.addEventListener("hero-updated", onHeroUpdated);

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("hero-updated", onHeroUpdated);
    };
  }, []);

  const imageSrc = hero.imageUrl || defaultHero.imageUrl;

  return (
    <section
      style={{
        border: "1px solid #eee",
        borderRadius: 18,
        overflow: "hidden",
        marginBottom: 18,
      }}
    >
      {/* 이미지 래퍼: contain일 때 남는 여백을 예쁘게 처리 */}
      <div
        style={{
          width: "100%",
          height: 320,
          background: "#FFF", // 여백 색 (원하면 "#0b1e3a" 같은 푸른톤 가능)
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={imageSrc}
          alt="hero"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain", // ✅ 안 잘리게
            objectPosition: "center",
            display: "block",
          }}
        />
      </div>

      <div style={{ padding: 16, background: "#000" }}>
        <div style={{ fontSize: 26, fontWeight: 900, color: "#fff" }}>
          {hero.title}
        </div>

        <div style={{ marginTop: 8, opacity: 0.85, color: "#cfcfcf" }}>
          {hero.subtitle}
        </div>

        <div style={{ marginTop: 16 }}>
          <a
            href={hero.ctaHref || "/portfolio"}
            style={{
              display: "inline-block",
              padding: "10px 14px",
              borderRadius: 12,
              border: "1px solid #333",
              fontWeight: 900,
              textDecoration: "none",
              color: "#fff",
            }}
          >
            {hero.ctaText}
          </a>
        </div>
      </div>
    </section>
  );
}