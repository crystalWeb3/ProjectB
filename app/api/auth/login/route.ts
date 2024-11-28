import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "../../../../lib/db";
import User from "../../../../models/User";
import jwt from "jsonwebtoken";

const sanitizeUserData = (user: any) => {
  delete user._id;
  delete user.password;
  delete user.email;
  return user
}

export async function POST(req: NextRequest) {
  await dbConnect();

  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  try {
    const user = await User.findOne({ email }).exec();
    if (!user) {
      return NextResponse.json({ error: "User not found." }, { status: 400 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid credentials." }, { status: 400 });
    }
    
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "1d" }
    );

    let securedUser = sanitizeUserData(user);
    return NextResponse.json({ message: "Login successful!", token, user: securedUser }, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}