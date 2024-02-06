//jshint es6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

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

const posts = [];

app.get("/", function (req, res) {
  res.render("home", { homeStartingContent: homeStartingContent , postsArray: posts});
});

app.get("/:postName", function (req, res){
  if(req.params.postName === "about"){
    res.render("about", { aboutStartingContent: aboutStartingContent });
  }
  else if(req.params.postName === "contact"){
    res.render("contact", { contactStartingContent: contactStartingContent });
  }
  else if(req.params.postName === "compose"){
    res.render("compose");
  }
});

app.get("/posts/:postName", function (req, res){
  const requestedTitle = _.lowerCase(req.params.postName);

  posts.forEach(function(post){
    const storedTitle = _.lowerCase(post.title);
    if(storedTitle === requestedTitle){
      res.render("post", { title: post.title, content: post.content});
    }
  });
});


app.post("/:postName", function (req, res){
  if(req.params.postName === ""){
    res.redirect("/");
  }
  else if(req.params.postName === "about"){
    res.redirect("/about");
  }
  else if(req.params.postName === "contact"){
    res.redirect("/contact");
  }
  else if(req.params.postName === "compose"){
    const post = {
      title: req.body.postTitle,
      content: req.body.postBody
    };
    posts.push(post);
    res.redirect("/");
  }

});




app.listen(3000, function () {
  console.log("Server started on port 3000");
});
