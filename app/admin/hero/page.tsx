"use client";

import { useEffect, useRef, useState } from "react";
import { HERO_STORAGE_KEY, HeroSetting, defaultHero } from "../../../lib/hero";

export default function HeroAdminPage() {
  const [form, setForm] = useState<HeroSetting>(defaultHero);
  const [saved, setSaved] = useState(false);

  const fileRef = useRef<HTMLInputElement | null>(null);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem(HERO_STORAGE_KEY);
    if (raw) {
      setForm({ ...defaultHero, ...JSON.parse(raw) });
    }
  }, []);

  const update = (key: keyof HeroSetting, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const onSave = () => {
    localStorage.setItem(HERO_STORAGE_KEY, JSON.stringify(form));

    // ⭐ 메인 즉시 반영
    window.dispatchEvent(new Event("hero-updated"));

    setSaved(true);
    setTimeout(() => setSaved(false), 1200);
  };

  const onUpload = async () => {
    const file = fileRef.current?.files?.[0];
    if (!file) return;

    setUploading(true);

    const fd = new FormData();
    fd.append("file", file);

    const res = await fetch("/api/upload/hero", {
      method: "POST",
      body: fd,
    });

    const data = await res.json();
    setUploading(false);

    if (!res.ok) {
      alert(data?.error || "업로드 실패");
      return;
    }

    setForm((prev) => ({
      ...prev,
      imageUrl: data.url,
    }));
  };

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: 20 }}>
      <h1>메인 키비주얼 설정</h1>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {/* 입력 영역 */}
        <div style={{ border: "1px solid #eee", padding: 16, borderRadius: 16 }}>
          <div style={{ display: "grid", gap: 12 }}>
            <input
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
              placeholder="타이틀"
              style={{ padding: 10, borderRadius: 12, border: "1px solid #ddd" }}
            />

            <textarea
              value={form.subtitle}
              onChange={(e) => update("subtitle", e.target.value)}
              placeholder="서브타이틀"
              rows={3}
              style={{ padding: 10, borderRadius: 12, border: "1px solid #ddd" }}
            />

            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) {
                  setPreview(URL.createObjectURL(f));
                }
              }}
            />

            <button
              onClick={onUpload}
              disabled={uploading}
              style={{
                padding: "10px 12px",
                borderRadius: 12,
                border: "1px solid #ddd",
                fontWeight: 900,
              }}
            >
              {uploading ? "업로드 중..." : "업로드해서 적용"}
            </button>

            <input
              value={form.imageUrl}
              onChange={(e) => update("imageUrl", e.target.value)}
              placeholder="/uploads/hero-xxx.png"
              style={{ padding: 10, borderRadius: 12, border: "1px solid #ddd" }}
            />

            <input
              value={form.ctaText}
              onChange={(e) => update("ctaText", e.target.value)}
              placeholder="버튼 문구"
              style={{ padding: 10, borderRadius: 12, border: "1px solid #ddd" }}
            />

            <input
              value={form.ctaHref}
              onChange={(e) => update("ctaHref", e.target.value)}
              placeholder="/portfolio"
              style={{ padding: 10, borderRadius: 12, border: "1px solid #ddd" }}
            />

            <button
              onClick={onSave}
              style={{
                padding: "10px 12px",
                borderRadius: 12,
                border: "1px solid #ddd",
                fontWeight: 900,
              }}
            >
              저장
            </button>

            {saved && <div>저장됨 ✅</div>}
          </div>
        </div>

        {/* 미리보기 */}
        <div style={{ border: "1px solid #eee", borderRadius: 16, overflow: "hidden" }}>
          <img
            src={form.imageUrl || defaultHero.imageUrl}
            alt="preview"
            style={{ width: "100%", height: 300, objectFit: "cover" }}
          />
          <div style={{ padding: 16 }}>
            <div style={{ fontSize: 22, fontWeight: 900 }}>{form.title}</div>
            <div style={{ marginTop: 6, opacity: 0.85 }}>{form.subtitle}</div>
          </div>
        </div>
      </div>
    </main>
  );
}