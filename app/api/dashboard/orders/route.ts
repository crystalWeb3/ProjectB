import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../lib/db";
import Order from "../../../../models/Order";
import jwt from 'jsonwebtoken';

interface User {
  id: string;
  email: string;
  role: string;
  [key: string]: any;
}

export async function GET(req: NextRequest) {
  await dbConnect();
  const authHeader = req.headers.get('Authorization'); 
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized: Missing or invalid token" }, { status: 401 });
  }
  const token = authHeader.replace('Bearer ', '');

  if (!token) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    throw new Error('JWT_SECRET is not defined in the environment variables.');
  }
  const decoded = jwt.verify(token, jwtSecret) as unknown;

  const user = decoded as User;

  try {
    const { searchParams } = req.nextUrl;

    const start = searchParams.get('start');
    const limit = searchParams.get('limit');
    console.log(searchParams)
    let all_orders = await Order.find({ userid: user.userId}).skip(Number(start)).limit(Number(limit));
    let tots = await Order.countDocuments({ userid: user.userId});
    return NextResponse.json({ message: "Get orders success.", orders: all_orders, tots }, { status: 201 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}