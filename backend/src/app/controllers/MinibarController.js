import Minibar from '../models/Minibar';

class MinibarController {
  async index(req, res) {
    const allMinibars = await Minibar.findAll();

    return res.json(allMinibars);
  }

  async show(req, res) {
    const { minibarId } = req.params;

    const minibar = await Minibar.findByPk(minibarId);

    return res.json(minibar);
  }

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
