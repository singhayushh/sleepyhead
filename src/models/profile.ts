import { Schema, Model, model } from "mongoose";
import { profileInterface } from "../dtos/profile";

const profileSchema: Schema<profileInterface> = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
            unique: true,
        },
        dob: {
            type: String,
            required: true,
        },
        bio: {
            type: String,
            required: true,
        },
        about: {
            type: String,
            default: "This sleepy head was too lazy to write an about...",
        },
        lastSad: {
            because: String,
            datetime: String,
        },
        biggestFear: {
            type: String,
            default: "Didn't fill up this field yet!",
        },
        waitingFor: {
            type: String,
            default: "Didn't fill up this field yet!",
        },
        location: {
            type: String,
            required: true,
        },
        tastes: [
            {
                type: String,
            },
        ],
        movies: [
            {
                type: String,
            },
        ],
        songs: [
            {
                type: String,
            },
        ],
        instagram: {
            type: String,
            default: "",
        },
        facebook: {
            type: String,
            default: "",
        },
        linkedin: {
            type: String,
            default: "",
        },
        discord: {
            type: String,
            default: "",
        },
        spotify: {
            type: String,
            default: "",
        },
        website: {
            type: String,
            default: "",
        },
        listeners: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        listeningTo: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Profile: Model<profileInterface> = model("Profile", profileSchema);

export default Profile;
