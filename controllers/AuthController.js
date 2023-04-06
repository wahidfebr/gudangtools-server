const { Member } = require("../models");
const { verifyPassword, createToken } = require("../helpers");

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
                password,
                tier: "premium" // premium feature not yet handled
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

    static async loginMember(req, res, next) {
        try {
            const {
                email,
                password
            } = req.body;
            if (!email || !password) throw { name: "BadRequest" };

            const member = await Member.findOne({
                where: { email }
            })
            if (!member) throw { name: "Unauthorized" };

            const isValid = await verifyPassword(member.password, password);
            if (!isValid) throw { name: "Unauthorized" };

            const access_token = createToken({
                id: member.id
            })
            res.status(200).json({
                access_token,
                email: member.email
            })
        } catch (error) {
            error.ERROR_FROM_FUNCTION = "AuthController: loginMember";
            next(error);
        }
    }
}

module.exports = AuthController;