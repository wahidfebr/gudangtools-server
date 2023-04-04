const AuthController = require("../controllers/AuthController");
const router = require("express").Router();

router.route("/register")
    .post(AuthController.registerMember)

module.exports = router;