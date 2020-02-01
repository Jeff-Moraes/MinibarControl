import Sequelize from 'sequelize';

import User from '../app/models/User';
import Minibar from '../app/models/Minibar';
import Room from '../app/models/Room';
import MinibarCheck from '../app/models/MinibarCheck';

import databaseConfig from '../config/database';

const models = [User, Minibar, Room, MinibarCheck];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // connection with database
    this.connection = new Sequelize(databaseConfig);

    // models loader
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
