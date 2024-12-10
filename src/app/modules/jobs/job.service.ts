import { Job } from "./job.model";
import { TJob } from "./jobs.interface";

const createJobIntoDB = async (jobData: TJob): Promise<TJob> => {
    const result = await Job.create(jobData);
    return result;
};

const getAllJobFromDB = async () => {
    const result = await Job.find();
    return result;
};

const getSingleJobFromDB = async (id: string) => {
    const result = await Job.findById(id);
    return result;
};

const updateSingleJobIntoDB = async (id: string, payload: Partial<TJob>) => {
    const result = await Job.findByIdAndUpdate(id, payload, { new: true });
    return result;
};

const deleteSingleJobFromDB = async (id: string) => {
    const result = await Job.findByIdAndDelete(id);
    return result;
};

export const JobServices = {
    createJobIntoDB,
    getAllJobFromDB,
    getSingleJobFromDB,
    updateSingleJobIntoDB,
    deleteSingleJobFromDB
}