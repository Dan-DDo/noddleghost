import { ideas } from "@/lib/mock";

export default function IdeasPage() {
  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: 20 }}>
      <h1 style={{ marginTop: 0 }}>아이디어</h1>
      <div style={{ opacity: 0.8, marginBottom: 12 }}>요리에서 떠오른 생각들을 카드로 쌓아두기</div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
        {ideas.map((i) => (
          <div key={i.id} style={{ border: "1px solid #eee", borderRadius: 16, padding: 12 }}>
            <div style={{ fontWeight: 950, fontSize: 16 }}>{i.title}</div>
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
    </main>
  );
}