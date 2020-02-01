import * as Yup from 'yup';
import { getDayOfYear, addDays, parseISO } from 'date-fns';
import { Op } from 'sequelize';

import User from '../models/User';
import Room from '../models/Room';
import Minibar from '../models/Minibar';
import MinibarCheck from '../models/MinibarCheck';

class MinibarCheckController {
  async index(req, res) {
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
        },
        {
          model: Minibar,
          attributes: ['name'],
        },
      ],
    });

    res.json(allConsumed);
  }

  async show(req, res) {
    const { roomId } = req.params;
    const { startDate, endDate } = req.query;

    const parseStart = addDays(parseISO(startDate), 1);
    const parseEnd = parseISO(endDate);

    const room = await MinibarCheck.findOne({
      where: {
        room_id: roomId,
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

    res.json(room);
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

    const room = await MinibarCheck.findOne({ where: { room_id } });

    if (room && getDayOfYear(room.createdAt) === getDayOfYear(new Date())) {
      await MinibarCheck.update(consumed, { where: { room_id } });
      return res.json(consumed);
    }

    await MinibarCheck.create(consumed);

    return res.json(consumed);
  }
}

export default new MinibarCheckController();
