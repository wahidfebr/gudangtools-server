'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Asset extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Asset.belongsTo(models.Stock);
      Asset.belongsTo(models.Member);
    }
  }
  Asset.init({
    StockId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Stock id is required for asset"
        },
        notEmpty: {
          msg: "Stock id is required for asset"
        }
      }
    },
    MemberId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Member id is required for asset"
        },
        notEmpty: {
          msg: "Member id is required for asset"
        }
      }
    },
    shares: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Shares is required"
        },
        notEmpty: {
          msg: "Shares is required"
        },
        min: {
          args: 100,
          msg: "Minimum 1 lot (100 shares) is required"
        }
      }
    },
    initialPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Initial price is required"
        },
        notEmpty: {
          msg: "Initial price is required"
        },
        min: {
          args: 0,
          msg: "Invalid stock price"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Asset',
  });
  return Asset;
};