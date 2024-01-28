import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ result: "Saya Andry" }, { status: 200 });
}
