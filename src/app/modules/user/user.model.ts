import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';
import bcrypt from "bcrypt";

const UserSchema = new Schema<TUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    designation: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

UserSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 8)
  this.password= hash
  next()
})

export const User = model('User', UserSchema);
