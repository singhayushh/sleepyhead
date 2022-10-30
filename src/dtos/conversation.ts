import { commentDto } from "./dream";
import { Types, Document } from "mongoose";

export interface conversationInterface extends Document {
    users: Array<Types.ObjectId>;
    title: string;
    description: string;
    messages: Array<commentDto>;
}

export interface createConversationDto {
    users: Array<Types.ObjectId>;
    title?: string;
    description?: string;
    messages?: Array<commentDto>;
}

export interface updateConversationDto {
    title?: string;
    description?: string;
}
