import express from 'express';
import { offersRoutes } from './routes/offers.routes';

export const app = express();
app.use(express.json());
app.use('/api/offers', offersRoutes)


