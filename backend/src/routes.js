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
// authMiddleware will apply in all routes after this line
routes.post('/checks', MinibarCheckController.store);
routes.get('/checks', MinibarCheckController.index);
routes.get('/checks/:roomId', MinibarCheckController.show);

routes.put('/users', UserController.update);
routes.post('/minibars', MinibarController.store);
routes.post('/rooms', RoomController.store);

export default routes;
