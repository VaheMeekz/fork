'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Repos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Repos.init({
    owner: DataTypes.STRING,
    repName: DataTypes.STRING,
    hav:DataTypes.BOOLEAN,
    link: DataTypes.STRING,
    star: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Repos',
  });
  return Repos;
};