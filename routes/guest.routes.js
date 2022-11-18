const router = require("express").Router();

//GET /guest/profile
router.get("/profile", (req, res) => {
  console.log(req.session.currentUser);
  res.render("guest/profile", { currentUser: req.session.currentUser });
});

module.exports = router;
