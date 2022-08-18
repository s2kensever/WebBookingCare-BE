'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor_Infor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Doctor_Infor.init({
    doctorID: DataTypes.STRING,
    priceID: DataTypes.STRING,
    provinceID: DataTypes.STRING,
    paymentID: DataTypes.STRING,
    addressClinic: DataTypes.STRING,
    nameClinic: DataTypes.STRING,
    note: DataTypes.TEXT,
    count: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Doctor_Infor',
  });
  return Doctor_Infor;
};