import * as Yup from 'yup';
import { addDays, isToday, parseISO } from 'date-fns';
import { Op } from 'sequelize';

import User from '../models/User';
import Room from '../models/Room';
import Minibar from '../models/Minibar';
import MinibarCheck from '../models/MinibarCheck';

class MinibarCheckController {
  async index(req, res) {
    const { floorId } = req.params;

    const allConsumed = await MinibarCheck.findAll({
      order: ['updated_at'],
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Room,
          attributes: ['number', 'floor'],
          where: {
            floor: floorId,
          },
        },
        {
          model: Minibar,
          attributes: ['name'],
        },
      ],
    });

    return res.json(allConsumed);
  }

  async show(req, res) {
    const { roomNumber } = req.params;
    const { startDate, endDate } = req.query;

    const parseStart = startDate
      ? addDays(parseISO(startDate), 1)
      : parseISO('2020-01-01 01:00:00');
    const parseEnd = endDate ? parseISO(endDate) : new Date();

    const { id } = await Room.findOne({
      where: {
        number: roomNumber,
      },
    });

    const roomCheck = await MinibarCheck.findOne({
      where: {
        room_id: id,
        updated_at: {
          [Op.between]: [parseStart, parseEnd],
        },
      },
      order: ['updated_at'],
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Room,
          attributes: ['number', 'floor'],
        },
        {
          model: Minibar,
          attributes: ['name'],
        },
      ],
    });

    return res.json(roomCheck);
  }

  async store(req, res) {
    const schema = Yup.object({
      status: Yup.string().required(),
      consumed_items: Yup.array(),
      note: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { status, consumed_items, note, room_id, minibar_id } = req.body;

    const user_id = req.userId;

    const consumed = {
      user_id,
      status,
      consumed_items,
      note,
      room_id,
      minibar_id,
    };

    const rooms = await MinibarCheck.findAll({
      where: { room_id },
    });

    const roomChecked = rooms.find(room => isToday(room.createdAt));

    if (roomChecked) {
      return res.json({ error: 'Room already checked.' });
    }

    const createRoomCheck = await MinibarCheck.create(consumed);

    return res.json(createRoomCheck);
  }

  async update(req, res) {
    const schema = Yup.object({
      status: Yup.string().required(),
      consumed_items: Yup.array(),
      note: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { status, consumed_items, note } = req.body;

    const user_id = req.userId;
    const { checkId } = req.params;

    const room = await MinibarCheck.findOne({ where: { id: checkId } });

    const consumed = {
      user_id,
      status,
      consumed_items,
      note,
    };

    const updateRoomCheck = await room.update(consumed);

    return res.json(updateRoomCheck);
  }

  async delete(req, res) {
    const { checkId } = req.params;

    await MinibarCheck.destroy({ where: { id: checkId } });

    return res.json({ message: `Room check ${checkId} has been deleted.` });
  }
}

export default new MinibarCheckController();
