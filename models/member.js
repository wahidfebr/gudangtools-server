'use strict';
const { hashPassword } = require("../helpers");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Member.hasMany(models.Log);
      Member.hasMany(models.Asset);
    }
  }
  Member.init({
    name: DataTypes.STRING,
    avatarUrl: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "Email must be unique"
      },
      validate: {
        notNull: {
          msg: "Email is required"
        },
        notEmpty: {
          msg: "Email is required"
        },
        isEmail: {
          msg: "Email format is invalid"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Password is required"
        },
        notEmpty: {
          msg: "Password is required"
        },
        len: {
          args: [8, 255],
          msg: "Use at least 8 characters for Password"
        },
      }
    },
    tier: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Member',
  });

  Member.beforeCreate(async (member) => {
    member.password = await hashPassword(member.password);
  })

  return Member;
};