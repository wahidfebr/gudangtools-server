const { Asset } = require("../models");

class AssetController {
    static async readAll(req, res, next) {
        try {
        } catch (error) {
            error.ERROR_FROM_FUNCTION = "AssetController: readAll";
            next(error);
        }
    }

    static async create(req, res, next) {
        try {
        } catch (error) {
            error.ERROR_FROM_FUNCTION = "AssetController: create";
            next(error);
        }
    }
}

module.exports = AssetController;