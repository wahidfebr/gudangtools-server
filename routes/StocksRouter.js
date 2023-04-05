const StockController = require("../controllers/StockController");
const router = require("express").Router();

router.route("/")
    .get(StockController.readAll)

module.exports = router;