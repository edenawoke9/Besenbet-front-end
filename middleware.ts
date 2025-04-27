import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
    const token = await getToken({ req });
    const publicRoutes = ['/login']
    const isPublic = publicRoutes.includes(req.nextUrl.pathname);
    if (isPublic && token) {
        return NextResponse.redirect(new URL('/dashboard', req.url))
    }
    if (!isPublic && !token) {
        return NextResponse.redirect(new URL('/login', req.url))
    }

}

