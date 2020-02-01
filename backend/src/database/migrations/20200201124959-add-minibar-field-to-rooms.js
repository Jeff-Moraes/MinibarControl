module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('rooms', 'minibar_id', {
      type: Sequelize.INTEGER,
      references: { model: 'minibars', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: false,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('rooms', 'minibar_id');
  },
};
