import Minibar from '../models/Minibar';
import Room from '../models/Room';

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

  async delete(req, res) {
    if (!req.userAdmin) {
      return res.status(400).json({ error: 'User is not Admin' });
    }

    const { minibarId } = req.params;

    const minibarLinked = await Room.findOne({
      where: { minibar_id: minibarId },
    });

    if (minibarLinked) {
      return res
        .status(401)
        .json({ error: `The minibar id ${minibarId} is linked to a room.` });
    }

    await Minibar.destroy({ where: { id: minibarId } });

    return res.json({ message: `Minibar ${minibarId} has been deleted.` });
  }
}

export default new MinibarController();
