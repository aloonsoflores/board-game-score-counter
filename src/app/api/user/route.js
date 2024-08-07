import { NextResponse } from "next/server";
import { connectDB } from "../../../libs/mongodb";
import User from "../../../models/user";

// Ruta para obtener todos los usuarios
export async function GET() {
  try {
    await connectDB();
    const allUsers = await User.find();
    return NextResponse.json(allUsers);
  } catch (error) {
    console.error("Error in GET /api/user:", error);
    return NextResponse.json(
      { message: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
