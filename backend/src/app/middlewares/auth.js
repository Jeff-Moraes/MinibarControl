import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';
import User from '../models/User';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    // promisify = function callback ==to=> async/await
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    const { admin } = await User.findByPk(decoded.id);

    req.userId = decoded.id;
    req.userAdmin = admin;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
