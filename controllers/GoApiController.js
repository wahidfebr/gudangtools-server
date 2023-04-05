const { Stock } = require("../models");

class GoApiController {
    static async readCompanies(req, res, next) {
        try {
            const stocks = await Stock.findAll();

            res.status(200).json(stocks);
        } catch (error) {
            error.ERROR_FROM_FUNCTION = "GoApiController: readCompanies";
            next(error);
        }
    }
}

module.exports = GoApiController;