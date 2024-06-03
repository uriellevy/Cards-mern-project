import { Schema } from "mongoose";
import { IUser, IUserModel } from "../../interfaces/User";
import nameSchema from "./Name-schema";
import addressSchema from "./Adress-schema";
import imageSchema from "./Image-schema";
import bcrypt from "bcrypt";

const userSchema = new Schema<IUser, IUserModel>({
    name: nameSchema,
    address: addressSchema,
    image: { type: imageSchema, required: false },
    email: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 30,
        unique: true,
    },
    password: { type: String, required: true, minlength: 7, maxlength: 300 },
    phone: { type: String, required: true, minlength: 9, maxlength: 11 },
    isBusiness: { required: true, type: Boolean },
    createdAt: { type: Date, default: new Date(), required: false },
    isAdmin: { required: false, type: Boolean, default: false },
},{timestamps: true});

//static signup method
userSchema.statics.signup = async function (userEntity: IUser) {
    const exists = await this.findOne({ email: userEntity.email });
    if (exists) throw Error("Email already in use");

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(userEntity.password, salt);
    const user = await this.create({ ...userEntity, password: hash });

    return user;
};

//static login method
userSchema.statics.login = async function (email, password) {
    if (!email || !password) throw Error("All fields must be filled");

    const user = await this.findOne({ email });
    if (!user) throw Error("Incorrect email");

    //compare hases(passwords)
    const match = await bcrypt.compare(password, user.password);
    if (!match) throw Error("Incorrect password");

    return user;
};

export default userSchema;