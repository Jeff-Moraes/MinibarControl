import Sequelize, { Model } from 'sequelize';

class MinibarCheck extends Model {
  static init(sequelize) {
    super.init(
      {
        status: Sequelize.STRING,
        consumed_items: Sequelize.ARRAY(Sequelize.TEXT),
        note: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' });
    this.belongsTo(models.Room, { foreignKey: 'room_id' });
    this.belongsTo(models.Minibar, { foreignKey: 'minibar_id' });
  }
}

export default MinibarCheck;
