"use client";

import { useMemo, useState } from "react";
import { PortfolioItem } from "@/lib/portfolio";
import Link from "next/link";

type Props = {
  items: PortfolioItem[];
};

export default function PortfolioList({ items }: Props) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return items
      .filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
      .sort((a, b) => {
        if (!!a.pinned !== !!b.pinned) return a.pinned ? -1 : 1;
        return b.date.localeCompare(a.date);
      });
  }, [items, query]);

  return (
    <div style={{ display: "grid", gap: 16 }}>
      {/* 검색바 */}
      <input
        placeholder="검색..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: 12,
          borderRadius: 12,
          border: "1px solid #ddd",
          fontWeight: 600,
        }}
      />

      {/* 리스트 */}
      <div
        style={{
          border: "1px solid #eee",
          borderRadius: 18,
          overflow: "hidden",
        }}
      >
        {filtered.map((item, index) => (
          <div
            key={item.id}
            style={{
              padding: 16,
              display: "grid",
              gridTemplateColumns: "40px 1fr",
              gap: 12,
              borderBottom:
                index === filtered.length - 1
                  ? "none"
                  : "1px solid #eee",
            }}
          >
            {/* 아이콘 */}
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 12,
                background: "#f5f5f5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
              }}
            >
              {item.emoji || "🍽️"}
            </div>

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
    <Link
      href={`/portfolio/${item.id}`}
      style={{
        fontWeight: 900,
        textDecoration: "none",
        color: "inherit",
      }}
    >
      {item.title}
    </Link>

    {item.pinned && (
      <span
        style={{
          fontSize: 12,
          padding: "3px 8px",
          borderRadius: 999,
          background: "#000",
          color: "#fff", // ✅ 원래 #555라 안 보임
          fontWeight: 900,
        }}
      >
        PIN
      </span>
                )}
              </div>

              <div style={{ marginTop: 6, opacity: 0.6 }}>
                {item.excerpt}
              </div>

              <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 12,
                      padding: "4px 8px",
                      borderRadius: 999,
                      background: "#555",
                      fontWeight: 700,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ marginTop: 6, fontSize: 12, opacity: 0.5 }}>
                {item.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}