const { AuthController } = require("../controllers");
const router = require("express").Router();

router.route("/register")
    .post(AuthController.registerMember)

router.route("/login")
    .post(AuthController.loginMember)

module.exports = router;