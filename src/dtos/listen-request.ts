import { Types, Document } from "mongoose";

export interface listenRequestInterface extends Document {
    from: Types.ObjectId;
    to: Types.ObjectId;
    status: string; // accepted, rejected, blocked, pending
}

export interface createListenRequestDto {
    from: Types.ObjectId;
    to: Types.ObjectId;
    status: string; // accepted, rejected, blocked, pending
}
