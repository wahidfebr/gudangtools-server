const { Stock } = require("../models");

class StockController {
    static async readAll(req, res, next) {
        try {
            const stocks = await Stock.findAll();

            res.status(200).json(stocks);
        } catch (error) {
            error.ERROR_FROM_FUNCTION = "StockController: readAll";
            next(error);
        }
    }
}

module.exports = StockController;