import express, { Application } from 'express';
import cors from 'cors'
import { JobRouter } from './app/modules/jobs/job.routes';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// routes
app.use('/api/jobs', JobRouter);

app.get('/', (req, res) => {
    res.send('Hurray! Job portal is running')
})

export default app;