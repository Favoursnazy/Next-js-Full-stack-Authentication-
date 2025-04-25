import { NextResponse, NextRequest } from "next/server";

const isProtectedRoutes = ["/home", "/sessions"];
const isPublicRoutes = [
  "/",
  "/signup",
  "/confirm-password",
  "/forgot-password",
  "/reset-password",
  "/verify-mfa",
];

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const acessToken = req.cookies.get("accessToken")?.value || null;

  if (isProtectedRoutes.includes(pathname) && !acessToken) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  if (isPublicRoutes.includes(pathname) && acessToken) {
    return NextResponse.redirect(new URL("/home", req.nextUrl));
  }
}
