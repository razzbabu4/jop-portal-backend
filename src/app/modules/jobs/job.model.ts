import { model, Schema } from "mongoose";
import { TJob } from "./jobs.interface";

const jobSchema = new Schema<TJob>({
    title: { type: String, required: [true, "Job title is required"] },
    company: { type: String, required: [true, "Company name is required"] },
    location: { type: String, required: [true, "Location is required"] },
    description: { type: String, required: [true, "Job description is required"] },
}, {
    timestamps: true,
})

export const Job = model<TJob>('Job', jobSchema)