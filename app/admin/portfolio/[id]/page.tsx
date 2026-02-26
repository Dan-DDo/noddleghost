"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  loadPortfolioItems,
  PortfolioItem,
} from "@/lib/portfolio-store";

function TagPill({ text }: { text: string }) {
  return (
    <span
      style={{
        fontSize: 12,
        padding: "5px 10px",
        borderRadius: 999,
        background: "#eee",
        fontWeight: 900,
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
      }}
    >
      {text}
    </span>
  );
}

export default function PortfolioDetailPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const id = params?.id;

  const [item, setItem] = useState<PortfolioItem | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!id) return;

    const items = loadPortfolioItems();
    const found = items.find((x) => x.id === id) ?? null;

    if (!found) {
      setNotFound(true);
      setItem(null);
      return;
    }

    setItem(found);
  }, [id]);

  const contentLines = useMemo(() => {
    const text = item?.content ?? "";
    // 줄바꿈 유지용
    return text;
  }, [item?.content]);

  if (notFound) {
    return (
      <main style={{ maxWidth: 860, margin: "0 auto", padding: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 950 }}>없는 포트폴리오예요</h1>
        <p style={{ marginTop: 10, opacity: 0.75 }}>
          목록으로 돌아가서 다시 선택해줘.
        </p>
        <div style={{ marginTop: 18 }}>
          <button
            onClick={() => router.push("/portfolio")}
            style={{
              padding: "10px 14px",
              borderRadius: 12,
              border: "1px solid #ddd",
              background: "#fff",
              fontWeight: 950,
              cursor: "pointer",
            }}
          >
            ← 목록으로
          </button>
        </div>
      </main>
    );
  }

  if (!item) {
    return (
      <main style={{ maxWidth: 860, margin: "0 auto", padding: 24, opacity: 0.7 }}>
        불러오는 중…
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 860, margin: "0 auto", padding: 24 }}>
      {/* 상단 네비 */}
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <button
          onClick={() => router.push("/portfolio")}
          style={{
            padding: "10px 14px",
            borderRadius: 12,
            border: "1px solid #ddd",
            background: "#fff",
            fontWeight: 950,
            cursor: "pointer",
          }}
        >
          ← 목록
        </button>

        <button
          onClick={() => router.push("/admin/portfolio")}
          style={{
            padding: "10px 14px",
            borderRadius: 12,
            border: "1px solid #ddd",
            background: "#fff",
            fontWeight: 950,
            cursor: "pointer",
          }}
        >
          관리자에서 수정
        </button>
      </div>

      {/* 커버 이미지 */}
      {item.coverImage ? (
        <div
          style={{
            marginTop: 18,
            borderRadius: 18,
            overflow: "hidden",
            border: "1px solid #eee",
            background: "#fafafa",
          }}
        >
          <img
            src={item.coverImage}
            alt={`${item.title} cover`}
            style={{
              width: "100%",
              height: 420,
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      ) : null}

      {/* 헤더 */}
      <header style={{ marginTop: 18 }}>
        <div style={{ fontSize: 42, lineHeight: 1 }}>{item.emoji ?? "🍽️"}</div>

        <h1 style={{ marginTop: 10, fontSize: 34, fontWeight: 950 }}>
          {item.title}
        </h1>

        <div style={{ marginTop: 8, display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ fontSize: 13, opacity: 0.7, fontWeight: 800 }}>
            {item.date}
          </span>

          {item.pinned && (
            <span
              style={{
                fontSize: 12,
                padding: "4px 10px",
                borderRadius: 999,
                background: "#111",
                color: "#fff",
                fontWeight: 950,
              }}
            >
              PIN
            </span>
          )}
        </div>

        {item.tags?.length ? (
          <div style={{ marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
            {item.tags.map((t) => (
              <TagPill key={t} text={t} />
            ))}
          </div>
        ) : null}

        {item.excerpt ? (
          <p style={{ marginTop: 14, fontSize: 15, opacity: 0.85, lineHeight: 1.6 }}>
            {item.excerpt}
          </p>
        ) : null}
      </header>

      {/* 본문 */}
      <section
        style={{
          marginTop: 22,
          border: "1px solid #eee",
          borderRadius: 18,
          padding: 16,
          background: "#fff",
        }}
      >
        <div style={{ fontSize: 14, fontWeight: 950, marginBottom: 10 }}>본문</div>

        {contentLines?.trim() ? (
          <div
            style={{
              whiteSpace: "pre-wrap", // ✅ 줄바꿈 유지
              lineHeight: 1.75,
              fontSize: 15,
              fontWeight: 650,
              opacity: 0.92,
            }}
          >
            {contentLines}
          </div>
        ) : (
          <div style={{ opacity: 0.65, fontWeight: 800 }}>
            아직 본문이 없어요. 관리자에서 본문을 추가해줘!
          </div>
        )}
      </section>
    </main>
  );
}