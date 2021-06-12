'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class avgstats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  avgstats.init({
    playerId: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    min: DataTypes.STRING,
    gp: DataTypes.INTEGER,
    fgm: DataTypes.INTEGER,
    fga: DataTypes.INTEGER,
    fg3m: DataTypes.INTEGER,
    fg3a: DataTypes.INTEGER,
    ftm: DataTypes.INTEGER,
    fta: DataTypes.INTEGER,
    oreb: DataTypes.INTEGER,
    dreb: DataTypes.INTEGER,
    reb: DataTypes.INTEGER,
    ast: DataTypes.INTEGER,
    stl: DataTypes.INTEGER,
    blk: DataTypes.INTEGER,
    tov: DataTypes.INTEGER,
    pf: DataTypes.INTEGER,
    pts: DataTypes.INTEGER,
    fg_pct: DataTypes.INTEGER,
    fg3_pct: DataTypes.INTEGER,
    ft_pct: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'avgstats',
  });
  return avgstats;
};