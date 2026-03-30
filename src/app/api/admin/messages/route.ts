import { NextRequest, NextResponse } from "next/server";
import pool, { initDb } from "@/lib/db";

const ADMIN_PASSWORD = "lefkowitz2025";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const password = searchParams.get("password");

  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ messages: [] });
  }

  try {
    await initDb();
    const result = await pool.query(
      "SELECT * FROM contact_messages ORDER BY created_at DESC"
    );
    return NextResponse.json({ messages: result.rows });
  } catch (error) {
    console.error("Admin messages error:", error);
    return NextResponse.json(
      { error: "Failed to fetch messages" },
      { status: 500 }
    );
  }
}
