const { isPasswordPwned } = require("../services");

class PwnedApiController {
    static async checkPasswordPwned(req, res, next) {
        try {
            const { prefix } = req.query;
            if (!prefix || prefix.length !== 5) throw { name: "InvalidPrefix" };

            const data = await isPasswordPwned(prefix)
            const cleanedData = data.split(/\r?\n/).map(el => {
                const [suffix, count] = el.split(':');
                return {
                    suffix,
                    count: Number(count)
                }
            })

            res.status(200).json(cleanedData);
        } catch (error) {
            error.ERROR_FROM_FUNCTION = "PwnedApiController: checkPasswordPwned";
            next(error);
        }
    }
}

module.exports = PwnedApiController;