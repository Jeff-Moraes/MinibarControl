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

  static associate(models) {
    this.belongsTo(models.Minibar, { foreignKey: 'minibar_id' });
  }
}

export default Room;
