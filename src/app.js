const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const Admin = require("../src/models/admin");
var Match = require("../src/models/match");

require("./db/connection");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/adminpanel", (req, res) => {
  res.render("adminpanel");
});

app.post("/login", async (req, res) => {
  const loginadmin = new Admin({
    email: req.body.email,
    password: req.body.password,
  });
  const registered = await loginadmin.save();
  console.log("login succesful");
  res.render("adminpanel");
});

app.post("/adminpanel", async (req, res) => {
  //   const registermatch = new Match({
  //     city: req.body.firstname,
  //     date: req.body.date,
  //     teamA: req.body.teamA,
  //     teamB: req.body.teamB,
  //   });
  //   const Matching = await registermatch.save();
  res.render("adminpanel");
});

app.get("/logout", (req, res) => {
  try {
    console.log("logout successfully");
    res.redirect("/");
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(port, () => {
  console.log(`server is running at port no ${port}`);
});
