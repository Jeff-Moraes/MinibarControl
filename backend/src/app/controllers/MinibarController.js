import Minibar from '../models/Minibar';

class MinibarController {
  async store(req, res) {
    if (!req.userAdmin) {
      return res.status(400).json({ error: 'User is not Admin' });
    }

    const { name, items } = req.body;

    const minibar = await Minibar.create({
      name,
      items,
    });

    return res.json(minibar);
  }
}

export default new MinibarController();
