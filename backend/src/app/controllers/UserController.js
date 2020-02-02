import * as Yup from 'yup';

import User from '../models/User';

class UserController {
  async index(req, res) {
    if (!req.userAdmin) {
      return res.status(400).json({ error: 'User is not Admin' });
    }

    const allUsers = await User.findAll({
      order: ['name'],
      attributes: ['id', 'name', 'admin'],
    });

    return res.json(allUsers);
  }

  async show(req, res) {
    if (!req.userAdmin) {
      return res.status(400).json({ error: 'User is not Admin' });
    }

    const { userId } = req.params;

    const user = await User.findByPk(userId, {
      order: ['name'],
      attributes: ['id', 'name', 'admin'],
    });

    if (!user) {
      return res.status(401).json({ error: `User ${userId} does not exist` });
    }

    return res.json(user);
  }

  async store(req, res) {
    const schema = Yup.object({
      name: Yup.string().required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const userExists = await User.findOne({ where: { name: req.body.name } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }
    const { id, name, admin } = await User.create(req.body);

    return res.json({ id, name, admin });
  }

  async update(req, res) {
    const schema = Yup.object({
      name: Yup.string(),
      userId: Yup.number(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    if (!req.userAdmin) {
      return res.status(400).json({ error: 'User is not Admin' });
    }

    const { name, oldPassword, userId } = req.body;

    let user;
    if (userId) {
      user = await User.findByPk(userId);
    } else {
      user = await User.findByPk(req.userId);
    }

    if (name && name !== user.name) {
      const userExists = await User.findOne({ where: { name } });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists.' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, admin } = await user.update(req.body);

    return res.json({ id, name, admin });
  }

  async delete(req, res) {
    if (!req.userAdmin) {
      return res.status(400).json({ error: 'User is not Admin' });
    }

    const { userId } = req.params;

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(401).json({ error: `User ${userId} does not exist` });
    }

    await User.destroy({ where: { id: userId } });

    return res.json({ message: `User ${userId} has been deleted.` });
  }
}

export default new UserController();
