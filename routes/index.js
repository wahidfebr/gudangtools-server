const router = require("express").Router();

const { authentication, authorizePremium } = require("../middlewares");

const AuthRouter = require("./AuthRouter");
const PwnedApiRouter = require("./PwnedApiRouter");
const StocksRouter = require("./StocksRouter");
const AssetsRouter = require("./AssetsRouter");

router.use("/auth", AuthRouter);
router.use("/pwned", PwnedApiRouter);
router.use("/stocks", authentication, authorizePremium, StocksRouter);
router.use("/assets", authentication, authorizePremium, AssetsRouter);

module.exports = router;