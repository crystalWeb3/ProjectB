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

export async function POST(req: NextRequest) {
  // Connect to the database
  await dbConnect();

    // Get the request data
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
  const { copytype, page, formating, edulevel, deadline, price } = await req.json();
  if ( !copytype || !edulevel || !page || !formating || !page) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  try {
    const newOrder = new Order({ copytype, page, formating, edulevel, deadline, price, userid: user.userId });
    console.log(user.userId)

    let savedOrder = await newOrder.save();

    // Respond with success
    console.log('add order success')
    return NextResponse.json({ message: "Order added successfully!", order: savedOrder }, { status: 201 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}