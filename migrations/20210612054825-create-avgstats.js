'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('avgstats', {
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
        type: Sequelize.STRING
      },
      fga: {
        type: Sequelize.STRING
      },
      fg3m: {
        type: Sequelize.STRING
      },
      fg3a: {
        type: Sequelize.STRING
      },
      ftm: {
        type: Sequelize.STRING
      },
      fta: {
        type: Sequelize.STRING
      },
      oreb: {
        type: Sequelize.STRING
      },
      dreb: {
        type: Sequelize.STRING
      },
      reb: {
        type: Sequelize.STRING
      },
      ast: {
        type: Sequelize.STRING
      },
      stl: {
        type: Sequelize.STRING
      },
      blk: {
        type: Sequelize.STRING
      },
      tov: {
        type: Sequelize.STRING
      },
      pf: {
        type: Sequelize.STRING
      },
      pts: {
        type: Sequelize.STRING
      },
      fg_pct: {
        type: Sequelize.STRING
      },
      fg3_pct: {
        type: Sequelize.STRING
      },
      ft_pct: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('avgstats');
  }
};