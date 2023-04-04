const { Member } = require("../models");

class AuthController {
    static async registerMember(req, res, next) {
        try {
            const {
                email,
                password,
            } = req.body;

            // * validation handled by sequelize
            const newMember = await Member.create({
                email,
                password
            })

            res.status(201).json({
                id: newMember.id,
                email: newMember.email
            })
        } catch (error) {
            error.ERROR_FROM_FUNCTION = "AuthController: registerMember";
            next(error);
        }
    }
}

module.exports = AuthController;