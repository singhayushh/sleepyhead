import { Types, Document } from "mongoose";

export interface storyInterface extends Document {
    userId: Types.ObjectId;
    title: string;
    content: string;
    chapter: string;
    likes: Array<Types.ObjectId>;
    messages: Array<commentDto>;
}

export interface createStoryDto {
    userId: Types.ObjectId;
    title: string;
    content: string;
    chapter: string;
    likes: Array<Types.ObjectId>;
    messages: Array<commentDto>;
}

export interface updateStoryDto {
    title?: string;
    content?: string;
    chapter?: string;
}

export interface commentDto {
    userId: Types.ObjectId;
    message: string;
    datetime: string;
}
