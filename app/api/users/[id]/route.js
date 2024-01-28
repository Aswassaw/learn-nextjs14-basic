import { NextResponse } from "next/server";

export function GET(_, response) {
  return NextResponse.json({ result: "Saya " +  response.params.id}, { status: 200 });
}
