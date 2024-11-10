import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This middleware will run on every route under /admin
export function middleware(request: NextRequest) {
  const userRole = request.cookies.get("role")?.value;

  if (userRole !== "admin") {
    return NextResponse.redirect(new URL("/", request.url)); // Redirect to homepage if not an admin
  }

  return NextResponse.next(); // Continue to admin page if user is an admin
}

export const config = {
  matcher: ["/admin/:path*"], // Apply middleware to all admin routes
};
