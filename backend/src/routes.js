import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import MinibarController from './app/controllers/MinibarController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
// all the routes after the authMiddleware will use it

routes.put('/users', UserController.update);
routes.post('/minibars', MinibarController.store);

export default routes;
