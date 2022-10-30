import { Schema, Model, model } from "mongoose";
import { listenRequestInterface } from "../dtos/listen-request";

const listenRequestSchema: Schema<listenRequestInterface> = new Schema(
    {
        from: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        to: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        status: {
            type: String,
            default: "pending",
        },
    },
    {
        timestamps: true,
    }
);

const ListenRequest: Model<listenRequestInterface> = model(
    "ListenRequest",
    listenRequestSchema
);

export default ListenRequest;
