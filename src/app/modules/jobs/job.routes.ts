import { Router } from "express";
import { JobControllers } from "./job.controller";

const router = Router();

router.post('/create-job', JobControllers.createJob);
router.get('/:id', JobControllers.getSingleJob);
router.patch('/:id', JobControllers.updateSingleJob);
router.delete('/:id', JobControllers.deleteSingleJob);
router.get('/', JobControllers.getAllJob);

export const JobRouter = router;