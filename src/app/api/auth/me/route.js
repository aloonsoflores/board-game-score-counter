// src/app/api/auth/me/route.js

import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectDB } from "../../../../libs/mongodb";
import User from "../../../../models/user";
import cookie from "cookie";

export async function GET(request) {
  try {
    const cookies = cookie.parse(request.headers.get('cookie') || '');
    const token = cookies.authToken;

    if (!token) {
      return NextResponse.json({ message: "No autenticado" }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    await connectDB();

    const user = await User.findById(decoded.userId);
    if (!user) {
      return NextResponse.json({ message: "Usuario no encontrado" }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error("Error en GET /api/auth/me:", error);
    return NextResponse.json({ message: "Error al obtener información del usuario" }, { status: 500 });
  }
}
