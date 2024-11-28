import mongoose, { Schema, Document, Model } from "mongoose";

export interface IOrder extends Document {
  copytype: string;
  page: number;
  formating: string;
  edulevel: string;
  deadline: string;
  orderid: string | "#360242163",
  price: number,
  userid: mongoose.Schema.Types.ObjectId,
}

const OrderSchema: Schema<IOrder> = new mongoose.Schema(
  {
    copytype: { type: String, required: true,},
    formating: { type: String, required: true },
    page: { type: Number, required: true},
    edulevel: { type: String, required: true },
    deadline: { type: String, required: true },
    price: { type: Number, required: true},
    userid: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
  },
  { timestamps: true }
);

const Order: Model<IOrder> = mongoose.models.Order || mongoose.model<IOrder>("Order", OrderSchema);

export default Order;
