const { isPasswordPwned } = require("../services");

class PwnedApiController {
    static async checkPasswordPwned(req, res, next) {
        try {
            const { prefix } = req.query;
            if (!prefix || prefix.length !== 5) throw { name: "InvalidPrefix" };

            const data = await isPasswordPwned(prefix);

            res.status(200).json({
                data: data.split(/\r?\n/).map(el => {
                    const [hash, count] = el.split(':');
                    return [hash, Number(count)];
                })
            })
        } catch (error) {
            error.ERROR_FROM_FUNCTION = "PwnedApiController: checkPasswordPwned";
            next(error);
        }
    }
}

module.exports = PwnedApiController;