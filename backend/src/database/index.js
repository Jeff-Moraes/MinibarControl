import Sequelize from 'sequelize';

import User from '../app/models/User';
import Minibar from '../app/models/Minibar';
import Room from '../app/models/Room';

import databaseConfig from '../config/database';

const models = [User, Minibar, Room];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // connection with database
    this.connection = new Sequelize(databaseConfig);

    // models loader
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
