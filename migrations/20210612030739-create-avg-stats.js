'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('avgStats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      playerId: {
        type: Sequelize.INTEGER
      },
      year: {
        type: Sequelize.INTEGER
      },
      min: {
        type: Sequelize.STRING
      },
      gp: {
        type: Sequelize.INTEGER
      },
      fgm: {
        type: Sequelize.INTEGER
      },
      fga: {
        type: Sequelize.INTEGER
      },
      fg3m: {
        type: Sequelize.INTEGER
      },
      fg3a: {
        type: Sequelize.INTEGER
      },
      ftm: {
        type: Sequelize.INTEGER
      },
      fta: {
        type: Sequelize.INTEGER
      },
      oreb: {
        type: Sequelize.INTEGER
      },
      dreb: {
        type: Sequelize.INTEGER
      },
      reb: {
        type: Sequelize.INTEGER
      },
      ast: {
        type: Sequelize.INTEGER
      },
      stl: {
        type: Sequelize.INTEGER
      },
      blk: {
        type: Sequelize.INTEGER
      },
      tov: {
        type: Sequelize.INTEGER
      },
      pf: {
        type: Sequelize.INTEGER
      },
      pts: {
        type: Sequelize.INTEGER
      },
      fg_pct: {
        type: Sequelize.INTEGER
      },
      fg3_pct: {
        type: Sequelize.INTEGER
      },
      ft_pct: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('avgStats');
  }
};