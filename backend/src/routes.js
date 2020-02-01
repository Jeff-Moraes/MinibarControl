import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import MinibarController from './app/controllers/MinibarController';
import RoomController from './app/controllers/RoomController';
import MinibarCheckController from './app/controllers/MinibarCheckController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
// all the routes after the authMiddleware will use it
routes.post('/checks', MinibarCheckController.store);

routes.put('/users', UserController.update);
routes.post('/minibars', MinibarController.store);
routes.post('/rooms', RoomController.store);

export default routes;
