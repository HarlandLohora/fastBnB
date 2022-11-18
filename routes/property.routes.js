const router = require("express").Router();
const Property = require("../models/Property.model");
//GET /property/new
router.get("/new", (req, res) => {
  res.render("properties/new-property", {
    currentUser: req.session.currentUser,
  });
});

//POST /property/new
router.post("/new", async (req, res) => {
  //req.body
  try {
    const newProperty = await Property.create(req.body);
    res.redirect("/properties/all");
  } catch (err) {
    console.log(err);
  }
});

//Lista todas las propiedades
router.get("/all", async (req, res) => {
  try {
    const listProperties = await Property.find();
    res.render("properties/all", { listProperties });
  } catch (err) {
    console.log(err);
  }
});

//Detalles de la propiedad
router.get("/details/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Property.findById(id);
    console.log(data);
    res.render("properties/details", data);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
