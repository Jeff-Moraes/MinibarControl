import * as Yup from 'yup';

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

    const schema = Yup.object({
      number: Yup.string().required(),
      floor: Yup.string().required(),
      status: Yup.string().required(),
      minibar_id: Yup.number().required(),
      note: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { number, floor, status, minibar_id, note } = req.body;

    const room = await Room.create({ number, floor, status, minibar_id, note });

    return res.json(room);
  }

  async update(req, res) {
    if (!req.userAdmin) {
      return res.status(400).json({ error: 'User is not Admin' });
    }

    const schema = Yup.object({
      number: Yup.string(),
      floor: Yup.string(),
      status: Yup.string(),
      minibar_id: Yup.number(),
      note: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { roomId } = req.params;

    const { number, floor, status, minibar_id, note } = req.body;

    const room = await Room.findByPk(roomId);

    const roomUpdate = await room.update({
      number,
      floor,
      status,
      minibar_id,
      note,
    });

    return res.json(roomUpdate);
  }

  async delete(req, res) {
    if (!req.userAdmin) {
      return res.status(400).json({ error: 'User is not Admin' });
    }

    const { roomId } = req.params;

    await Room.destroy({ where: { id: roomId } });

    return res.json({ message: `Room ${roomId} has been deleted.` });
  }
}

export default new RoomController();
