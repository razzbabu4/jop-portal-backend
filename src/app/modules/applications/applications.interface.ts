import { Types } from "mongoose";

export type TApplication = {
    name: string;
    email: string;
    resumeUrl: string;
    jobId: Types.ObjectId;
}
