import { Request, Response } from "express";
import { JobServices } from "./job.service";

const createJob = async (req: Request, res: Response) => {
    try {
        const jobData = req.body;
        const result = await JobServices.createJobIntoDB(jobData);
        res.status(200).json({
            message: 'Job created successfully',
            success: true,
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            message: 'Validation failed',
            success: false,
            error: error,
        });
    }
}

const getAllJob = async (req: Request, res: Response) => {
    try {
        const result = await JobServices.getAllJobFromDB();
        if (!result.length) {
            res.status(404).json({
                message: `No data found`,
                success: false,
                data: result,
            });
        } else {
            res.status(200).json({
                message: 'Jobs retrieved successfully',
                status: true,
                data: result,
            });
        }
    } catch (error) {
        res.status(400).json({
            message: 'Validation failed',
            success: false,
            error: error,
        });
    }

}

const getSingleJob = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const result = await JobServices.getSingleJobFromDB(id);
        if (result === null) {
            res.status(404).json({
                message: `No data found`,
                success: false,
                data: result,
            });
        } else {
            res.status(200).json({
                message: 'Job retrieved successfully',
                status: true,
                data: result,
            });
        }
    } catch (error) {
        res.status(400).json({
            message: 'Validation failed',
            success: false,
            error: error,
        });
    }

}

const updateSingleJob = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const result = await JobServices.updateSingleJobIntoDB(id, payload);
        res.status(200).json({
            message: 'Job updated successfully',
            status: true,
            data: result,
        });

    } catch (error) {
        res.status(400).json({
            message: 'Validation failed',
            success: false,
            error: error,
        });
    }
}
const deleteSingleJob = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await JobServices.deleteSingleJobFromDB(id);
        res.status(200).json({
            message: 'Job deleted successfully',
            status: true,
            data: {},
        });

    } catch (error) {
        res.status(400).json({
            message: 'Validation failed',
            success: false,
            error: error,
        });
    }
}

export const JobControllers = {
    createJob,
    getAllJob,
    getSingleJob,
    updateSingleJob,
    deleteSingleJob
} 