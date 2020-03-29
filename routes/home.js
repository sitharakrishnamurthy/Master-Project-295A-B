let express = require("express");
let router = express.Router();

// @route   GET /
// @desc    Render Home Page
// @access  Public
router.get("/", function(req, res, next) {
    res.render("homepage");
});

module.exports = router;