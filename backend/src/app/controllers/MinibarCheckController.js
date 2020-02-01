import * as Yup from 'yup';

import MinibarCheck from '../models/MinibarCheck';

class RoomController {
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

    const consumed = await MinibarCheck.create({
      user_id,
      status,
      consumed_items,
      note,
      room_id,
      minibar_id,
    });

    return res.json(consumed);
  }
}

export default new RoomController();
