import { Types, Document } from "mongoose";

export interface userInterface extends Document {
    fullname: string;
    username: string;
    email: string;
    password: string;
    picture: string;
    token: string;
    status: string; // registered, verified, reset, banned, deleted
    profile: Types.ObjectId;
}

export interface createUserDto {
    fullname: string;
    username: string;
    email: string;
    password: string;
}

export interface updateUserDto {
    fullname?: string;
    username?: string;
    picture?: string;
}
