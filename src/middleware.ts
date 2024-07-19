import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";

// Define protected routes and non-protected routes
const isProtectedRoute = createRouteMatcher(["/dashboard"]);
const isNonProtectedRoute = createRouteMatcher(["/"]);

export default clerkMiddleware((auth, request) => {
  const { userId } = auth();

  // If the user is trying to access a non-protected route and is already logged in, redirect to dashboard
  if (isNonProtectedRoute(request) && userId) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // If the user is trying to access a protected route, ensure they are authenticated
  if (isProtectedRoute(request)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
