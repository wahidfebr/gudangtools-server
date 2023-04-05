const PwnedApiController = require("../controllers/PwnedApiController");
const router = require("express").Router();

router.route("/password")
    .get(PwnedApiController.checkPasswordPwned)

module.exports = router;