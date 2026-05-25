import { compare } from "bcrypt";
import { generateAccessToken } from "../config/jwt.js";
import { create } from "./user.js";

export const register = async (data) => {
    const user = await create(data);
    // const user = await User.create(data);
    // const { password, ...userWithoutPassword } = user.toObject();
    // return userWithoutPassword;
    return generateAccessToken({ userId: user._id });
}

export const login = async (data) => {
    const user = await getUserbyEmail(data.email);
    if (!await compare(data.password, user.password )) {
        throw new error("Invalid Credintials!");
    }
    return generateAccessToken({ userId: user._id });
}