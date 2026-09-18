import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const encoded = await readFile(
    path.join(process.cwd(), "public", "Franky_Kyaw_resume.pdf.base64"),
    "utf8",
  );
  const pdf = Buffer.from(encoded.trim(), "base64");

  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="Franky_Kyaw_resume.pdf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
