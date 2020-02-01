import Sequelize, { Model } from 'sequelize';

class Room extends Model {
  static init(sequelize) {
    super.init(
      {
        number: Sequelize.NUMBER,
        floor: Sequelize.NUMBER,
        status: Sequelize.STRING,
        note: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Room;
