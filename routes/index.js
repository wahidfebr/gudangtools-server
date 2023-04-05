const router = require("express").Router();

const AuthRouter = require("./AuthRouter");
const PwnedApiRouter = require("./PwnedApiRouter");
const StocksRouter = require("./StocksRouter");

router.use("/auth", AuthRouter);
router.use("/pwned", PwnedApiRouter);
router.use("/stocks", StocksRouter);

module.exports = router;