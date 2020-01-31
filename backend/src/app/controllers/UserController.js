import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { name: req.body.name } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }
    const { id, name, admin } = await User.create(req.body);

    return res.json({ id, name, admin });
  }

  async update(req, res) {
    const { name, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

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
}

export default new UserController();
