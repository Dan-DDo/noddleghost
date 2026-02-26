"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ALL_PORTFOLIO_TAGS,
  PortfolioItem,
  PortfolioTag,
  createId,
  deletePortfolioItem,
  loadPortfolioItems,
  upsertPortfolioItem,
} from "@/lib/portfolio-store";

const emptyForm = (): PortfolioItem => ({
  id: "",
  title: "",
  emoji: "🍽️",
  tags: ["Recipe"],
  date: new Date().toISOString().slice(0, 10),
  excerpt: "",
  pinned: false,
  content: "",
  coverImage: "", // ✅ 추가
});


function Chip({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: "6px 10px",
        borderRadius: 999,
        border: `1px solid ${active ? "#111" : "#ddd"}`,
        background: active ? "#111" : "#fff",
        color: active ? "#fff" : "#111",
        fontWeight: 900,
        fontSize: 12,
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

export default function AdminPortfolioPage() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [form, setForm] = useState<PortfolioItem>(emptyForm());
  const [mode, setMode] = useState<"create" | "edit">("create");
  const [query, setQuery] = useState("");

  const refresh = () => setItems(loadPortfolioItems());

  useEffect(() => {
    refresh();
  }, []);

const onPickCoverImage = (file: File | null) => {
  if (!file) return;

  // 이미지 파일만
  if (!file.type.startsWith("image/")) {
    alert("이미지 파일만 업로드할 수 있어!");
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    const result = reader.result?.toString() ?? "";
    setForm((prev) => ({ ...prev, coverImage: result }));
  };
  reader.readAsDataURL(file);
};

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items
      .filter((it) => {
        if (!q) return true;
        return (
          it.title.toLowerCase().includes(q) ||
          (it.excerpt ?? "").toLowerCase().includes(q) ||
          it.tags.join(" ").toLowerCase().includes(q)
        );
      })
      .sort((a, b) => {
        if (!!a.pinned !== !!b.pinned) return a.pinned ? -1 : 1;
        return b.date.localeCompare(a.date);
      });
  }, [items, query]);

  const toggleTag = (tag: PortfolioTag) => {
    const has = form.tags.includes(tag);
    const next = has ? form.tags.filter((t) => t !== tag) : [...form.tags, tag];
    setForm({ ...form, tags: next.length ? next : form.tags }); // 최소 1개 유지
  };

  const resetToCreate = () => {
    setMode("create");
    setForm(emptyForm());
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const title = form.title.trim();
    if (!title) {
      alert("제목을 입력해줘!");
      return;
    }
    if (!form.tags || form.tags.length === 0) {
      alert("태그를 최소 1개 선택해줘!");
      return;
    }

    const item: PortfolioItem = {
      ...form,
      id: mode === "edit" ? form.id : createId(),
      title,
      emoji: (form.emoji ?? "").trim() || "🍽️",
      excerpt: (form.excerpt ?? "").trim(),
      date: form.date || new Date().toISOString().slice(0, 10),
    };

    upsertPortfolioItem(item);
    refresh();
    resetToCreate();
  };

  const onEdit = (it: PortfolioItem) => {
    setMode("edit");
    setForm({ ...it });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onDelete = (it: PortfolioItem) => {
    const ok = confirm(`삭제할까?\n\n- ${it.title}`);
    if (!ok) return;
    deletePortfolioItem(it.id);
    refresh();
    if (mode === "edit" && form.id === it.id) resetToCreate();
  };

  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 28, fontWeight: 950 }}>포트폴리오 관리자</h1>
      <div style={{ marginTop: 6, opacity: 0.75 }}>
        포트폴리오 항목을 추가/수정/삭제하면 /portfolio 목록에 바로 반영돼.
      </div>

      {/* 작성 폼 */}
      <section
        style={{
          marginTop: 18,
          border: "1px solid #eee",
          borderRadius: 18,
          padding: 16,
        }}
      >
        <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ fontWeight: 950 }}>
            {mode === "create" ? "새 항목 추가" : "항목 수정"}
          </div>
          {mode === "edit" && (
            <button
              type="button"
              onClick={resetToCreate}
              style={{
                padding: "6px 10px",
                borderRadius: 12,
                border: "1px solid #ddd",
                background: "#fff",
                fontWeight: 900,
                cursor: "pointer",
              }}
            >
              새로 추가 모드로
            </button>
          )}
        </div>

        <form onSubmit={onSubmit} style={{ marginTop: 14, display: "grid", gap: 12 }}>
          <div style={{ display: "grid", gap: 8, gridTemplateColumns: "120px 1fr" }}>
            <div style={{ fontWeight: 900, opacity: 0.75 }}>아이콘</div>
            <input
              value={form.emoji ?? ""}
              onChange={(e) => setForm({ ...form, emoji: e.target.value })}
              placeholder="예: 🍝 🥐 🗒️"
              style={{
                height: 40,
                borderRadius: 12,
                border: "1px solid #ddd",
                padding: "0 12px",
                fontWeight: 800,
              }}
            />
          </div>

          <div style={{ display: "grid", gap: 8, gridTemplateColumns: "120px 1fr" }}>
            <div style={{ fontWeight: 900, opacity: 0.75 }}>제목</div>
            <input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="예: 된장버터 가지구이"
              style={{
                height: 40,
                borderRadius: 12,
                border: "1px solid #ddd",
                padding: "0 12px",
                fontWeight: 900,
              }}
            />
          </div>

          <div style={{ display: "grid", gap: 8, gridTemplateColumns: "120px 1fr" }}>
            <div style={{ fontWeight: 900, opacity: 0.75 }}>한줄 설명</div>
            
            <div style={{ display: "grid", gap: 8, gridTemplateColumns: "120px 1fr" }}>
                <div style={{ fontWeight: 900, opacity: 0.75 }}>커버 이미지</div>

                <div style={{ display: "grid", gap: 10 }}>
                    <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => onPickCoverImage(e.target.files?.[0] ?? null)}
                    style={{
                        height: 40,
                        borderRadius: 12,
                        border: "1px solid #ddd",
                        padding: "7px 12px",
                        fontWeight: 800,
                        background: "#fff",
                    }}
                    />

                    {/* ✅ 미리보기 */}
                    {form.coverImage ? (
                    <div style={{ display: "grid", gap: 10 }}>
                        <div
                        style={{
                            border: "1px solid #eee",
                            borderRadius: 16,
                            overflow: "hidden",
                            width: "100%",
                            maxWidth: 520,
                            background: "#fafafa",
                        }}
                        >
                        <img
                            src={form.coverImage}
                            alt="cover preview"
                            style={{
                            width: "100%",
                            height: 240,
                            objectFit: "cover",
                            display: "block",
                            }}
                        />
                        </div>

                        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                        <button
                            type="button"
                            onClick={() => setForm((prev) => ({ ...prev, coverImage: "" }))}
                            style={{
                            padding: "10px 14px",
                            borderRadius: 12,
                            border: "1px solid #ddd",
                            background: "#fff",
                            fontWeight: 950,
                            cursor: "pointer",
                            }}
                        >
                            이미지 제거
                        </button>
                        </div>
                    </div>
                    ) : (
                    <div style={{ fontSize: 12, opacity: 0.7 }}>
                        상세 페이지에서 보여줄 커버 이미지를 올려줘. (JPG/PNG 추천)
                    </div>
                    )}
                </div>
            </div>

            <div style={{ display: "grid", gap: 8, gridTemplateColumns: "120px 1fr" }}>
  <div style={{ fontWeight: 900, opacity: 0.75 }}>본문</div>
  <textarea
    value={form.content ?? ""}
    onChange={(e) => setForm({ ...form, content: e.target.value })}
    placeholder={`상세 페이지에 보여줄 글을 작성해줘.\n\n예)\n- 재료\n- 과정\n- 팁\n- 느낀점`}
    rows={12}
    style={{
      borderRadius: 12,
      border: "1px solid #ddd",
      padding: 12,
      fontWeight: 700,
      lineHeight: 1.6,
      resize: "vertical",
    }}
  />
</div>

            <input
              value={form.excerpt ?? ""}
              onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
              placeholder="예: 된장과 버터의 감칠맛 조합."
              style={{
                height: 40,
                borderRadius: 12,
                border: "1px solid #ddd",
                padding: "0 12px",
                fontWeight: 800,
              }}
            />
          </div>

          <div style={{ display: "grid", gap: 8, gridTemplateColumns: "120px 1fr" }}>
            <div style={{ fontWeight: 900, opacity: 0.75 }}>날짜</div>
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              style={{
                height: 40,
                borderRadius: 12,
                border: "1px solid #ddd",
                padding: "0 12px",
                fontWeight: 900,
              }}
            />
          </div>

          <div style={{ display: "grid", gap: 8, gridTemplateColumns: "120px 1fr" }}>
            <div style={{ fontWeight: 900, opacity: 0.75 }}>태그</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {ALL_PORTFOLIO_TAGS.map((t) => (
                <Chip key={t} active={form.tags.includes(t)} onClick={() => toggleTag(t)}>
                  {t}
                </Chip>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gap: 8, gridTemplateColumns: "120px 1fr" }}>
            <div style={{ fontWeight: 900, opacity: 0.75 }}>고정(PIN)</div>
            <label style={{ display: "flex", gap: 10, alignItems: "center", fontWeight: 900 }}>
              <input
                type="checkbox"
                checked={!!form.pinned}
                onChange={(e) => setForm({ ...form, pinned: e.target.checked })}
              />
              상단 고정
            </label>
          </div>

          <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={resetToCreate}
              style={{
                padding: "10px 14px",
                borderRadius: 12,
                border: "1px solid #ddd",
                background: "#fff",
                fontWeight: 950,
                cursor: "pointer",
              }}
            >
              초기화
            </button>

            <button
              type="submit"
              style={{
                padding: "10px 14px",
                borderRadius: 12,
                border: "1px solid #111",
                background: "#111",
                color: "#fff",
                fontWeight: 950,
                cursor: "pointer",
              }}
            >
              {mode === "create" ? "추가" : "저장"}
            </button>
          </div>
        </form>
      </section>

      {/* 목록 관리 */}
      <section style={{ marginTop: 18 }}>
        <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ fontSize: 18, fontWeight: 950 }}>등록된 항목</div>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="검색 (제목/태그/설명)"
            style={{
              flex: "1 1 240px",
              height: 40,
              borderRadius: 12,
              border: "1px solid #ddd",
              padding: "0 12px",
              fontWeight: 800,
            }}
          />
          <div style={{ opacity: 0.7, fontWeight: 900 }}>총 {filtered.length}개</div>
        </div>

        <div
          style={{
            marginTop: 12,
            border: "1px solid #eee",
            borderRadius: 18,
            overflow: "hidden",
          }}
        >
          {filtered.map((it, idx) => (
            <div
              key={it.id}
              style={{
                padding: 14,
                display: "grid",
                gridTemplateColumns: "44px 1fr auto",
                gap: 12,
                alignItems: "center",
                borderBottom: idx === filtered.length - 1 ? "none" : "1px solid #eee",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "#f5f5f5",
                  display: "grid",
                  placeItems: "center",
                  fontSize: 20,
                }}
              >
                {it.emoji ?? "🍽️"}
              </div>

              <div style={{ display: "grid", gap: 6 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                  <div style={{ fontWeight: 950 }}>{it.title}</div>
                  {it.pinned && (
                    <span
                      style={{
                        fontSize: 12,
                        padding: "3px 8px",
                        borderRadius: 999,
                        background: "#111",
                        color: "#fff",
                        fontWeight: 950,
                      }}
                    >
                      PIN
                    </span>
                  )}
                  <span style={{ fontSize: 12, opacity: 0.55 }}>{it.date}</span>
                </div>
                {it.excerpt && <div style={{ opacity: 0.75 }}>{it.excerpt}</div>}
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {it.tags.map((t) => (
                    <span
                      key={`${it.id}-${t}`}
                      style={{
                        fontSize: 12,
                        padding: "4px 8px",
                        borderRadius: 999,
                        background: "#555",
                        fontWeight: 900,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "flex-end" }}>
                <button
                  type="button"
                  onClick={() => onEdit(it)}
                  style={{
                    padding: "8px 10px",
                    borderRadius: 12,
                    border: "1px solid #000",
                    background: "#555",
                    fontWeight: 950,
                    cursor: "pointer",
                  }}
                >
                  수정
                </button>
                <button
                  type="button"
                  onClick={() => onDelete(it)}
                  style={{
                    padding: "8px 10px",
                    borderRadius: 12,
                    border: "1px solid #000",
                    background: "#555",
                    fontWeight: 950,
                    cursor: "pointer",
                  }}
                >
                  삭제
                </button>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div style={{ padding: 14, opacity: 0.75, fontWeight: 900 }}>
              아직 항목이 없어요. 위에서 추가해줘!
            </div>
          )}
        </div>
      </section>
    </main>
  );
}