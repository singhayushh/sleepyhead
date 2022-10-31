import { Schema, Model, model } from "mongoose";
import { commentDto, storyInterface } from "../dtos/story";

const storySchema: Schema<storyInterface> = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        chapter: {
            type: String,
            default: "Epilogues",
        },
        content: {
            type: String,
            required: true,
        },
        likes: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
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

const Story: Model<storyInterface> = model("Story", storySchema);

export default Story;
