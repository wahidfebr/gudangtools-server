const GoApiController = require("../controllers/GoApiController");
const router = require("express").Router();

router.route("/companies")
    .get(GoApiController.readCompanies)

module.exports = router;