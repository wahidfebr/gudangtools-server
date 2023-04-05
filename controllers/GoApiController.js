const { fetchCompanies } = require("../services");

class GoApiController {
    static async readCompanies(req, res, next) {
        try {
            const { status, message, data } = await fetchCompanies();

            res.status(200).json(data)
        } catch (error) {
            error.ERROR_FROM_FUNCTION = "GoApiController: fetchCompanies";
            next(error);
        }
    }
}

module.exports = GoApiController;