import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import { randomUUID } from "crypto";

export const runtime = "nodejs"; // 파일 저장하려면 node runtime 필요

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file");

  if (!file || !(file instanceof File)) {
    return NextResponse.json({ error: "file is required" }, { status: 400 });
  }

  // 파일 타입 간단 검증 (이미지)
  if (!file.type.startsWith("image/")) {
    return NextResponse.json({ error: "image file only" }, { status: 400 });
  }

  // 저장 경로: /public/uploads
  const uploadsDir = path.join(process.cwd(), "public", "uploads");
  await fs.mkdir(uploadsDir, { recursive: true });

  // 확장자 추정
  const ext = file.name.split(".").pop()?.toLowerCase() || "png";
  const safeExt = ext.replace(/[^a-z0-9]/g, "") || "png";

  const filename = `hero-${randomUUID()}.${safeExt}`;
  const filepath = path.join(uploadsDir, filename);

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  await fs.writeFile(filepath, buffer);

  // 브라우저에서 접근 가능한 URL
  const url = `/uploads/${filename}`;

  return NextResponse.json({ url });
}