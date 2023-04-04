'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Log extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Log.belongsTo(models.Member);
    }
  }
  Log.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Log name is required"
        },
        notEmpty: {
          msg: "Log name is required"
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Log description is required"
        },
        notEmpty: {
          msg: "Log description is required"
        }
      }
    },
    MemberId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Log member id is required"
        },
        notEmpty: {
          msg: "Log member id is required"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Log',
  });
  return Log;
};