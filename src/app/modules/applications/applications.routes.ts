import { Router } from "express";
import { ApplicationControllers } from "./application.controller";

const router = Router();

router.post('/create-application', ApplicationControllers.createApplication)
router.get('/', ApplicationControllers.getAllApplications);

export const ApplicationRouter = router;