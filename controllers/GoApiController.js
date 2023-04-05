const { Asset, Stock } = require("../models");
const { getStockPriceByTickers } = require("../services");

class GoApiController {
    static async getPrices(req, res, next) {
        try {
            const { id: MemberId } = req.member;

            const memberTickers = await Asset.findAll({
                where: { MemberId },
                attributes: ["StockId"],
                include: {
                    model: Stock,
                    attributes: ["ticker"]
                }
            })

            const cleanedData = memberTickers.map(el => el.Stock.ticker);
            const prices = await getStockPriceByTickers(cleanedData);


            res.status(200).json(prices);
        } catch (error) {
            error.ERROR_FROM_FUNCTION = "GoApiController: getPrices";
            next(error);
        }
    }
}

module.exports = GoApiController;