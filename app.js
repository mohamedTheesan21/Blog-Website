//jshint es6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

const homeStartingContent =
  "This is a simple blog website. You can add your blog by clicking on the compose button. You can also read the blogs by clicking on the read more button. You can also delete the blog by clicking on the delete button. You can also update the blog by clicking on the update";
const aboutStartingContent =
  "This is a simple blog website. You can add your blog by clicking on the compose button. You can also read the blogs by clicking on the read more button. You can also delete the blog by clicking on the delete button. You can also update the blog by clicking on the update";
const contactStartingContent =
  "This is a simple blog website. You can add your blog by clicking on the compose button. You can also read the blogs by clicking on the read more button. You can also delete the blog by clicking on the delete button. You can also update the blog by clicking on the update";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home", { homeStartingContent: homeStartingContent });
});

app.get("/about", function (req, res){
  res.render("about", { aboutStartingContent: aboutStartingContent });
})

app.get("/contact", function (req, res){
  res.render("contact", { contactStartingContent: contactStartingContent });
});

app.post("/", function (req, res) {
  res.redirect("/");
});

app.post("/about", function (req, res){
  res.redirect("/about");
});

app.post("/contact", function (req, res){
  res.redirect("/contact");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
