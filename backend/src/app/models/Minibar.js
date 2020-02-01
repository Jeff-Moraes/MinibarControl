import Sequelize, { Model } from 'sequelize';

class Minibar extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        items: Sequelize.ARRAY(Sequelize.TEXT),
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Minibar;
