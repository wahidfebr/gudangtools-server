const { Asset, Member, Stock } = require("../models");
const { getStockPriceByTickers } = require("../services");

class AssetController {
    static async readAll(req, res, next) {
        try {
            const { id: MemberId } = req.member;

            const assets = await Asset.findAll({
                where: { MemberId },
                include: [
                    {
                        model: Member,
                        attributes: {
                            exclude: ["password"]
                        }
                    },
                    {
                        model: Stock,
                    },
                ]
            })

            res.status(200).json(assets);
        } catch (error) {
            error.ERROR_FROM_FUNCTION = "AssetController: readAll";
            next(error);
        }
    }

    static async create(req, res, next) {
        try {
            const { id: MemberId } = req.member;
            const {
                id: StockId,
                shares,
            } = req.body;

            if (!StockId || !shares) {
                throw { name: "BadRequest" };
            }

            const stock = await Stock.findByPk(StockId);
            if (!stock) throw { name: "StockNotFound" };

            const [currentPrice] = await getStockPriceByTickers([stock.ticker])

            const [asset, created] = await Asset.findOrCreate({
                where: { StockId, MemberId },
                defaults: {
                    StockId,
                    MemberId,
                    shares,
                    initialPrice: currentPrice.close
                }
            })

            if (!created) throw { name: "DuplicateItem" };

            res.status(201).json(asset);
        } catch (error) {
            error.ERROR_FROM_FUNCTION = "AssetController: create";
            next(error);
        }
    }
}

module.exports = AssetController;