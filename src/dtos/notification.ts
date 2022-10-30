import { Types, Document } from "mongoose";

export interface notificationInterface extends Document {
    userId: Types.ObjectId;
    content: string;
    datetime: Date;
}

export interface createNotificationDto {
    userId: Types.ObjectId;
    content: string;
    datetime?: Date;
}
