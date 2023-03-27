import { Router } from 'express';
import { controller } from '../controllers/offers.controller';

export const offersRoutes = Router();

offersRoutes.get('/', controller.getOffers);
offersRoutes.post('/purchase/:id', controller.purchase);
//offersRoutes.post('/', controller.createOffer);
