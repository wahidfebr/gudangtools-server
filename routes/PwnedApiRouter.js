const { PwnedApiController } = require("../controllers");
const router = require("express").Router();

router.route("/password")
    .get(PwnedApiController.checkPasswordPwned)

module.exports = router;