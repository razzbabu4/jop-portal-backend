import { Request, Response } from "express";
import { ApplicationServices } from "./applications.service";

const createApplication = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const result = await ApplicationServices.createApplicationIntoDB(payload)
        res.status(200).json({
            message: 'Application created successfully',
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

const getAllApplications = async (req: Request, res: Response) => {
    try {
        const result = await ApplicationServices.getApplicationFromDB();
        if (!result.length) {
            res.status(404).json({
                message: `No data found`,
                success: false,
                data: result,
            });
        } else {
            res.status(200).json({
                message: 'Applications retrieved successfully',
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

export const ApplicationControllers = {
    createApplication,
    getAllApplications
}