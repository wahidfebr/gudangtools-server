const { StockController } = require("../controllers");
const router = require("express").Router();

router.route("/")
    .get(StockController.readAll)

module.exports = router;