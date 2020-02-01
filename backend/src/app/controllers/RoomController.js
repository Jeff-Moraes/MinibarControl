import Room from '../models/Room';

class RoomController {
  async store(req, res) {
    if (!req.userAdmin) {
      return res.status(400).json({ error: 'User is not Admin' });
    }

    const { number, floor, status, minibarId, note } = req.body;

    const room = await Room.create({ number, floor, status, minibarId, note });

    return res.json(room);
  }
}

export default new RoomController();
