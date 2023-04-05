const { AssetController } = require("../controllers");
const router = require("express").Router();

router.route("/")
    .get(AssetController.readAll)
    .post(AssetController.create)

module.exports = router;