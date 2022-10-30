import { Types, Document } from "mongoose";

export interface dreamInterface extends Document {
    userId: Types.ObjectId;
    title: string;
    content: string;
    chapter: string;
    likes: Array<Types.ObjectId>;
    messages: Array<commentDto>;
}

export interface createDreamDto {
    userId: Types.ObjectId;
    title: string;
    content: string;
    chapter: string;
    likes: Array<Types.ObjectId>;
    messages: Array<commentDto>;
}

export interface updateDreamDto {
    title?: string;
    content?: string;
    chapter?: string;
}

export interface commentDto {
    userId: Types.ObjectId;
    message: string;
    datetime: string;
}
