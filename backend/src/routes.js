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
routes.get('/checks', MinibarCheckController.index);
routes.get('/checks/:roomId', MinibarCheckController.show);
routes.post('/checks', MinibarCheckController.store);
routes.put('/checks/:checkId', MinibarCheckController.update);
routes.delete('/checks/:checkId', MinibarCheckController.delete);

routes.get('/minibars', MinibarController.index);
routes.get('/minibars/:minibarId', MinibarController.show);
routes.post('/minibars', MinibarController.store);
routes.put('/minibars/:minibarId', MinibarController.update);

routes.put('/users', UserController.update);
routes.post('/rooms', RoomController.store);

export default routes;
