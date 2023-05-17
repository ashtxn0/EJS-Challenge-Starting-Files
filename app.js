const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent =
  "Bacon ipsum dolor amet short ribs ham hock picanha porchetta spare ribs meatloaf. Shoulder boudin swine hamburger sirloin leberkas buffalo tenderloin strip steak chislic corned beef pork belly. Shoulder andouille beef ribs, landjaeger tongue pork belly meatloaf. Biltong ground round buffalo, pork loin burgdoggen chislic picanha pancetta chuck doner sirloin.";
const aboutContent =
  "Bacon ipsum dolor amet filet mignon alcatra sausage, picanha kielbasa brisket porchetta sirloin rump beef ribs short ribs fatback. Swine ham hock chislic pork belly bresaola, pancetta shankle venison tongue short loin biltong. Jowl chislic pork loin leberkas jerky tongue pork belly beef ribs buffalo shoulder burgdoggen ribeye ham hock. Pig ham hock shoulder flank pancetta sausage. Short ribs salami jowl, leberkas chicken pork belly tail buffalo ribeye jerky bresaola chislic beef. Pork belly biltong ground round prosciutto chislic, andouille kielbasa meatball sausage spare ribs drumstick bacon. Sausage cupim jerky shoulder andouille short ribs beef ribs porchetta cow beef biltong frankfurter landjaeger chislic tri-tip. Spare ribs shank rump ham hock brisket swine jerky kevin doner capicola. Jowl fatback corned beef alcatra meatball, doner tail rump shankle shank. Chicken pancetta spare ribs sausage shoulder pork. Turkey sausage cupim rump burgdoggen strip steak tri-tip ball tip doner tenderloin chislic.";
const contactContent =
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let posts = [];

app.get("/", function(req,res){
  res.render("home", {homeDescription: homeStartingContent, posts: posts});
  
})

app.get("/about", function(req,res){
  res.render("about", {aboutDescription: aboutContent});
})

app.get("/contact", function(req,res){
  res.render("contact", {contactDescription: contactContent});
})

app.get("/compose", function(req,res){
  res.render("compose");
})

app.post("/", function(req,res){

  let post = {
    title: req.body.newTitle,
    postContents: req.body.newPost

  }

  posts.push(post);

  res.redirect("/");
})

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
