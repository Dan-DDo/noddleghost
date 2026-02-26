import Link from "next/link";
import { Recipe } from "@/lib/types";

export default function PhotoGrid({ items }: { items: Recipe[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: 12,
      }}
    >
      {items.map((r) => (
        <Link
          key={r.id}
          href={`/portfolio?focus=${r.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #eee" }}>
            <img
              src={r.imageUrl}
              alt={r.title}
              style={{ width: "100%", height: 220, objectFit: "cover", display: "block" }}
            />
            <div style={{ padding: 10 }}>
              <div style={{ fontWeight: 900 }}>{r.title}</div>
              <div style={{ fontSize: 13, opacity: 0.8, marginTop: 4 }}>
                {r.summary}
              </div>
              <div style={{ marginTop: 8, display: "flex", gap: 6, flexWrap: "wrap" }}>
                {r.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: 12,
                      padding: "4px 8px",
                      borderRadius: 999,
                      background: "#f3f3f3",
                    }}
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}