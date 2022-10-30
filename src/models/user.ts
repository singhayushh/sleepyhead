import { Schema, Model, model } from "mongoose";
import { userInterface } from "../dtos/user";

const userSchema: Schema<userInterface> = new Schema(
    {
        fullname: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        picture: {
            type: String,
            default: process.env.DEFAULT_PROFILE,
        },
        token: {
            type: String,
            default: null,
        },
        status: {
            type: String,
            default: "registered",
        },
        profile: {
            type: Schema.Types.ObjectId,
            ref: "Profile",
        },
    },
    {
        timestamps: true,
    }
);

userSchema.index({
    fullname: "text",
    username: "text",
});

const User: Model<userInterface> = model("User", userSchema);

export default User;
