'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Stock.hasMany(models.Asset);
    }
  }
  Stock.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Stock name is required"
        },
        notEmpty: {
          msg: "Stock name is required"
        },
      }
    },
    ticker: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "Ticker must be unique"
      },
      validate: {
        notNull: {
          msg: "Ticker is required"
        },
        notEmpty: {
          msg: "Ticker is required"
        },
      }
    },
    logo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Stock',
  });
  return Stock;
};