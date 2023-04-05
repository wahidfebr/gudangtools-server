const router = require("express").Router();

const AuthRouter = require("./AuthRouter");
const PwnedApiRouter = require("./PwnedApiRouter");

router.use("/auth", AuthRouter);
router.use("/pwned", PwnedApiRouter);

module.exports = router;