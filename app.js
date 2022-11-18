// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

const capitalize = require("./utils/capitalize");
const projectName = "fastbnb";

app.locals.appTitle = `${capitalize(projectName)}`;

hbs.registerPartials(__dirname + "/views/partials");

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

//localhost:3000/auth
const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

//localhost:3000/guest
const guestRoutes = require("./routes/guest.routes");
app.use("/guest", guestRoutes);

//localhost:3000/admin
const adminRoutes = require("./routes/admin.routes");
app.use("/admin", adminRoutes);

//localhost:3000/property
const propertyRoutes = require("./routes/property.routes");
app.use("/property", propertyRoutes);
//ctrl+d o cmd+d

//Duplicar alt+shift+abajo
// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
