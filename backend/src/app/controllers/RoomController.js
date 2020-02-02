import Room from '../models/Room';

class RoomController {
  async index(req, res) {
    if (!req.userAdmin) {
      return res.status(400).json({ error: 'User is not Admin' });
    }

    const allRooms = await Room.findAll();

    return res.json(allRooms);
  }

  async show(req, res) {
    if (!req.userAdmin) {
      return res.status(400).json({ error: 'User is not Admin' });
    }

    const { roomId } = req.params;

    const room = await Room.findByPk(roomId);

    return res.json(room);
  }

  async store(req, res) {
    if (!req.userAdmin) {
      return res.status(400).json({ error: 'User is not Admin' });
    }

    const { number, floor, status, minibar_id, note } = req.body;

    const room = await Room.create({ number, floor, status, minibar_id, note });

    return res.json(room);
  }
}

export default new RoomController();
