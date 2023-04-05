'use strict';

const { Stock } = require("../models");
const { fetchCompanies } = require("../services");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const { data } = await fetchCompanies();
    const { results } = data;

    for (let i = 0; i < results.length; i++) {
      await Stock.upsert(results[i]);
    }
  },

  async down(queryInterface, Sequelize) {
    await Stock.destroy({ where: {} });
  }
};
