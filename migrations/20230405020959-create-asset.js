'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Assets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      StockId: {
        allowNull: false,
        references: {
          model: "Stocks"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        type: Sequelize.INTEGER
      },
      MemberId: {
        allowNull: false,
        references: {
          model: "Members"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        type: Sequelize.INTEGER
      },
      shares: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      initialPrice: {
        allowNull: false,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Assets');
  }
};