import { Schema, model } from "mongoose";
import { TApplication } from "./applications.interface";

const applicationSchema = new Schema<TApplication>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    resumeUrl: { type: String, required: true },
    jobId: { type: Schema.Types.ObjectId, ref: "Job", required: true },
});

export const Application = model<TApplication>("Application", applicationSchema);
