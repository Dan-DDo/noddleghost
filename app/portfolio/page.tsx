import PortfolioClient from "@/components/PortfolioClient";

export default function PortfolioPage() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 28, fontWeight: 900 }}>Portfolio</h1>

      <div style={{ marginTop: 8, opacity: 0.7 }}>
        요리와 아이디어를 노션처럼 정리한 목록입니다.
      </div>

      <div style={{ marginTop: 24 }}>
        <PortfolioClient />
      </div>
    </main>
  );
}