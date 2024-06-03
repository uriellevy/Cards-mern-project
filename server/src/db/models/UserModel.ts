import mongoose from "mongoose";
import userSchema from "../schemas/User-schema";
import { IUser, IUserModel } from "../../interfaces/User";

const User = mongoose.model<IUser, IUserModel>("User", userSchema);
export default User;