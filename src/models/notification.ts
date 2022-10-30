import { Schema, Model, model } from "mongoose";
import { notificationInterface } from "../dtos/notification";

const notificationSchema: Schema<notificationInterface> = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        datetime: {
            type: Date,
            default: Date.now(),
        },
    },
    {
        timestamps: true,
    }
);

const Notification: Model<notificationInterface> = model(
    "Notification",
    notificationSchema
);

export default Notification;
