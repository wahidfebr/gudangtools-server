const { verifyToken } = require("../helpers");
const { Member } = require("../models");

const authentication = async (req, res, next) => {
    try {
        const { access_token } = req.headers;
        if (!access_token) throw { name: "InvalidToken" };

        const { id: MemberId } = verifyToken(access_token);
        const member = await Member.findByPk(MemberId);
        if (!member) throw { name: "InvalidToken" };

        req.member = {
            id: member.id,
            email: member.email,
            tier: member.tier
        }

        next();
    } catch (error) {
        error.ERROR_FROM_FUNCTION = "Middlewares: authentication";
        next(error);
    }
}

const authorizePremium = async (req, res, next) => {
    try {
        const { id: MemberId } = req.member;

        const member = await Member.findByPk(MemberId);
        if (!member) throw { name: "Unauthorized" };
        if (member.tier !== "premium") throw { name: "Forbidden" };

        next();
    } catch (error) {
        error.ERROR_FROM_FUNCTION = "Middlewares: authorizePremium";
        next(error);
    }
}

module.exports = {
    authentication,
    authorizePremium,
}