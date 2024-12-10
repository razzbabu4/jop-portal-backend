import { TApplication } from "./applications.interface";
import { Application } from "./applications.model";

const createApplicationIntoDB = async (payload: TApplication): Promise<TApplication> => {
    const result = await Application.create(payload);
    return result;
};

const getApplicationFromDB = async () => {
    const result = await Application.find().populate('jobId');
    return result;
}

export const ApplicationServices = {
    createApplicationIntoDB,
    getApplicationFromDB
}