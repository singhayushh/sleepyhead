import { Types, Document } from "mongoose";

export interface profileInterface extends Document {
    userId: Types.ObjectId;
    dob: string;
    bio: string;
    about: string;
    lastSad: {
        because: string;
        datetime: string;
    };
    biggestFear: string;
    waitingFor: string;
    location: string;
    tastes: Array<string>;
    movies: Array<string>;
    songs: Array<string>;
    instagram: string;
    facebook: string;
    linkedin: string;
    discord: string;
    spotify: string;
    website: string;
    listeners: Array<Types.ObjectId>;
    listeningTo: Array<Types.ObjectId>;
}

export interface createProfileDto {
    userId: Types.ObjectId;
    dob: string;
    bio: string;
    about?: string;
    lastSad?: {
        because: string;
        datetime?: string;
    };
    biggestFear?: string;
    waitingFor?: string;
    location: string;
    tastes?: Array<String>;
    movies?: Array<String>;
    songs?: Array<String>;
    instagram?: string;
    facebook?: string;
    linkedin?: string;
    discord?: string;
    spotify?: string;
    website?: string;
}

export interface updateProfileDto {
    dob?: string;
    bio?: string;
    about?: string;
    lastSad?: {
        because: string;
        datetime?: string;
    };
    biggestFear?: string;
    waitingFor?: string;
    location?: string;
    tastes?: Array<String>;
    movies?: Array<String>;
    songs?: Array<String>;
    instagram?: string;
    facebook?: string;
    linkedin?: string;
    discord?: string;
    spotify?: string;
    website?: string;
}
