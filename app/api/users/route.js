import { NextResponse } from "next/server";
import { users } from "./../../utils/db";

export function GET() {
  return NextResponse.json({ users }, { status: 200 });
}

export async function POST(req, res) {
  let data = await req.json();
  console.log(data);

  return NextResponse.json({ res: "Berhasil Bos" }, { status: 201 });
}
