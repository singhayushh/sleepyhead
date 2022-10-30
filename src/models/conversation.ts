import { Schema, Model, model } from "mongoose";
import { conversationInterface } from "../dtos/conversation";

const conversationSchema: Schema<conversationInterface> = new Schema(
    {
        users: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        title: String,
        description: String,
        messages: [
            {
                userId: {
                    type: Schema.Types.ObjectId,
                    ref: "User",
                    required: true,
                },
                message: {
                    type: String,
                    required: true,
                },
                datetime: {
                    type: String,
                    required: true,
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Conversation: Model<conversationInterface> = model(
    "Conversation",
    conversationSchema
);

export default Conversation;
