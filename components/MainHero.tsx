"use client";

import { useEffect, useState } from "react";
import { HERO_STORAGE_KEY, HeroSetting, defaultHero } from "../lib/hero";

export default function MainHero() {
  const [hero, setHero] = useState<HeroSetting>(defaultHero);

  const loadHero = () => {
    try {
      const raw = localStorage.getItem(HERO_STORAGE_KEY);
      if (raw) {
        setHero({ ...defaultHero, ...JSON.parse(raw) });
      } else {
        setHero(defaultHero);
      }
    } catch {
      setHero(defaultHero);
    }
  };

  useEffect(() => {
    loadHero();

    const onStorage = (e: StorageEvent) => {
      if (e.key === HERO_STORAGE_KEY) loadHero();
    };

    const onHeroUpdated = () => {
      loadHero();
    };

    window.addEventListener("storage", onStorage);
    window.addEventListener("hero-updated", onHeroUpdated);

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("hero-updated", onHeroUpdated);
    };
  }, []);

  return (
    <section
      style={{
        border: "1px solid #eee",
        borderRadius: 18,
        overflow: "hidden",
        marginBottom: 18,
      }}
    >
      <img
        src={hero.imageUrl || defaultHero.imageUrl}
        alt="hero"
        style={{
          width: "100%",
          height: 320,
          objectFit: "cover",
          display: "block",
        }}
      />

      <div style={{ padding: 16 }}>
        <div style={{ fontSize: 26, fontWeight: 900 }}>
          {hero.title}
        </div>

        <div style={{ marginTop: 8, opacity: 0.85 }}>
          {hero.subtitle}
        </div>

        <div style={{ marginTop: 16 }}>
          <a
            href={hero.ctaHref || "/portfolio"}
            style={{
              display: "inline-block",
              padding: "10px 14px",
              borderRadius: 12,
              border: "1px solid #ddd",
              fontWeight: 900,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            {hero.ctaText}
          </a>
        </div>
      </div>
    </section>
  );
}