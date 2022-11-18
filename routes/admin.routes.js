const router = require("express").Router();

//GET /admin/dashboard
router.get("/dashboard", (req, res) => {
  res.render("admin/dashboard", { currentUser: req.session.currentUser });
});

module.exports = router;
