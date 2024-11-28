
import { NextRequest } from "next/server";
import mongoose from "mongoose";

declare global {
  var mongoose: { conn: mongoose.Connection | null; promise: Promise<typeof mongoose> | null } | undefined;

  namespace Next {
    interface NextRequest {
      user?: {
        id: string;
        email: string;
        role: string;
        [key: string]: any;
      };
    }
  }
}

export {};
