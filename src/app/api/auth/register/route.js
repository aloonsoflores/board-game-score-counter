import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "../../../../libs/mongodb";
import User from "../../../../models/user";

export async function POST(request) {
  try {
    await connectDB();

    const { username, email, password } = await request.json();

    if (!username || !email || !password) {
      return NextResponse.json({ message: "Faltan campos obligatorios" }, { status: 400 });
    }

    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return NextResponse.json({ message: "El usuario ya existe" }, { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    return NextResponse.json({ message: "Usuario creado con éxito" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "No se pudo crear el usuario", error: error.message }, { status: 500 });
  }
}
