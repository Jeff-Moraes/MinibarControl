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
    console.log(req.userId);

    return res.json({ ok: true });
  }
}

export default new UserController();
