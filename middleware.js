import { NextResponse } from "next/server";

const loggedIn = true;

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (!loggedIn) {
    if (pathname.startsWith("/about")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (loggedIn) {
    if (pathname.startsWith("/login")) {
      return NextResponse.redirect(new URL("/portfolio", request.url));
    }
  }
}
