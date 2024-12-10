import express, { Application } from 'express';
import cors from 'cors'
import { JobRouter } from './app/modules/jobs/job.routes';
import { ApplicationRouter } from './app/modules/applications/applications.routes';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// routes
app.use('/api/jobs', JobRouter);
app.use('/api/applications', ApplicationRouter);

app.get('/', (req, res) => {
    res.send('Hurray! Job portal is running')
})

export default app;