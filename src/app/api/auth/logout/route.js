// src/app/api/auth/logout/route.js
import { NextResponse } from "next/server";
import cookie from "cookie";

export async function POST() {
  const headers = new Headers();
  headers.append('Set-Cookie', cookie.serialize('authToken', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: -1, // Expira inmediatamente
    path: '/',
    sameSite: 'lax',
  }));

  return new NextResponse(JSON.stringify({ message: 'Logout exitoso' }), { status: 200, headers });
}
