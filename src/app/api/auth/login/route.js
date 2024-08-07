// src/app/api/auth/login/route.js
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import { connectDB } from "../../../../libs/mongodb";
import User from "../../../../models/user";

export async function POST(request) {
  try {
    await connectDB();

    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ message: "Faltan campos obligatorios" }, { status: 400 });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "Usuario no encontrado" }, { status: 404 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json({ message: "Contraseña inválida" }, { status: 401 });
    }

    // Generar el JWT
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    // Configurar la cookie
    const headers = new Headers();
    headers.append('Set-Cookie', cookie.serialize('authToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 3600, // 1 hora
      path: '/',
      sameSite: 'lax',
    }));

    return new NextResponse(JSON.stringify({ message: 'Inicio de sesión exitoso' }), { status: 200, headers });
  } catch (error) {
    console.error("Error en POST /api/auth/login:", error);
    return NextResponse.json({ message: "Error al iniciar sesión" }, { status: 500 });
  }
}
