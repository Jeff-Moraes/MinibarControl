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

// routes.get('/checks/:floorId', MinibarCheckController.index);
routes.get('/checks/:roomNumber', MinibarCheckController.show);
routes.post('/checks', MinibarCheckController.store);
routes.put('/checks/:checkId', MinibarCheckController.update);
routes.delete('/checks/:checkId', MinibarCheckController.delete);

routes.get('/minibars', MinibarController.index);
routes.get('/minibars/:minibarId', MinibarController.show);
routes.post('/minibars', MinibarController.store);
routes.put('/minibars/:minibarId', MinibarController.update);
routes.delete('/minibars/:minibarId', MinibarController.delete);

routes.get('/rooms/:floorId', RoomController.index);
routes.get('/rooms/:floorId/:roomId', RoomController.show);
routes.post('/rooms', RoomController.store);
routes.put('/rooms/:roomId', RoomController.update);
routes.delete('/rooms/:roomId', RoomController.delete);

routes.get('/users', UserController.index);
routes.get('/users/:userId', UserController.show);
routes.put('/users', UserController.update);
routes.delete('/users/:userId', UserController.delete);

export default routes;
