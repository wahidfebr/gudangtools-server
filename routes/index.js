const router = require("express").Router();

const AuthRouter = require("./AuthRouter");
const PwnedApiRouter = require("./PwnedApiRouter");
const StocksRouter = require("./StocksRouter");
const AssetsRouter = require("./AssetsRouter");

router.use("/auth", AuthRouter);
router.use("/pwned", PwnedApiRouter);
router.use("/stocks", StocksRouter);
router.use("/assets", AssetsRouter);

module.exports = router;