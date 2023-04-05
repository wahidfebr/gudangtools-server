const { GoApiController } = require("../controllers");
const router = require("express").Router();

router.route("/prices")
    .get(GoApiController.getPrices)

module.exports = router;