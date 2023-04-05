const router = require("express").Router();

const AuthRouter = require("./AuthRouter");
const PwnedApiRouter = require("./PwnedApiRouter");
const GoApiRouter = require("./GoApiRouter");

router.use("/auth", AuthRouter);
router.use("/pwned", PwnedApiRouter);
router.use("/goapi", GoApiRouter);

module.exports = router;