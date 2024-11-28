import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  isadmin: boolean | false;
  avatar?: string,
  f_name?: string,
  l_name?: string,
  country?: string,
  state?: string,
  city ?: string,
  [key: string]: any,
}

const UserSchema: Schema<IUser> = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String },
    f_name: { type: String },
    l_name: { type: String },
    country: { type: String },
    state: { type: String },
    city: { type: String },
    isadmin: { type: Boolean, default: false},
    role: { type: Array},
  },
  { timestamps: true }
);

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
