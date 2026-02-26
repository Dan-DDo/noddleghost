import MainHero from "@/components/MainHero";
import PhotoGrid from "@/components/PhotoGrid";
import { ideas, recipes } from "@/lib/mock";
import { Main } from "next/document";

export default function MainPage() {
  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: 20 }}>
      <MainHero />

      {/* Latest Photos */}
      <section style={{ marginBottom: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <h2 style={{ margin: "8px 0" }}>포트폴리오</h2>
          <a href="/portfolio">포트폴리오 더보기 →</a>
        </div>
        <PhotoGrid items={recipes.slice(0, 6)} />
      </section>

      {/* Latest Ideas */}
      <section>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <h2 style={{ margin: "8px 0" }}>아이디어 아카이빙</h2>
          <a href="/ideas">아이디어 더보기 →</a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
          {ideas.slice(0, 3).map((i) => (
            <div key={i.id} style={{ border: "1px solid #eee", borderRadius: 16, padding: 12 }}>
              <div style={{ fontWeight: 950 }}>{i.title}</div>
              <div style={{ marginTop: 6, opacity: 0.85 }}>{i.summary}</div>
              <div style={{ marginTop: 10, display: "flex", gap: 6, flexWrap: "wrap" }}>
                {i.tags.map((t) => (
                  <span key={t} style={{ fontSize: 12, padding: "4px 8px", borderRadius: 999, background: "#f3f3f3" }}>
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}