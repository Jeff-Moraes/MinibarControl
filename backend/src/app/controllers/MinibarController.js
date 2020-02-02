import Minibar from '../models/Minibar';

class MinibarController {
  async index(req, res) {
    if (!req.userAdmin) {
      return res.status(400).json({ error: 'User is not Admin' });
    }

    const allMinibars = await Minibar.findAll();

    return res.json(allMinibars);
  }

  async show(req, res) {
    if (!req.userAdmin) {
      return res.status(400).json({ error: 'User is not Admin' });
    }

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

  async update(req, res) {
    if (!req.userAdmin) {
      return res.status(400).json({ error: 'User is not Admin' });
    }

    const { minibarId } = req.params;
    const { name, items } = req.body;

    const minibar = await Minibar.findByPk(minibarId);

    const minibarUpdated = await minibar.update({
      name,
      items,
    });

    return res.json(minibarUpdated);
  }
}

export default new MinibarController();
