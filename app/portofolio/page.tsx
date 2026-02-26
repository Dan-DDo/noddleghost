import PhotoGrid from "@/components/PhotoGrid";
import { recipes } from "@/lib/mock";

export default function PortfolioPage() {
  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: 20 }}>
      <h1 style={{ marginTop: 0 }}>포트폴리오</h1>
      <div style={{ opacity: 0.8, marginBottom: 12 }}>사진 중심으로 내가 만든 요리를 모아보기</div>

      {/* 필터 UI (1차는 UI만) */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
        {["전체", "한식", "양식", "디저트", "면", "밥"].map((t) => (
          <button key={t} style={{ padding: "8px 10px", borderRadius: 999, border: "1px solid #ddd", background: "white" }}>
            {t}
          </button>
        ))}
      </div>

      <PhotoGrid items={recipes} />
    </main>
  );
}