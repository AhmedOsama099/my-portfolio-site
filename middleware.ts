// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Inject the current pathname into a custom header
  res.headers.set("x-invoke-path", req.nextUrl.pathname);

  return res;
}
