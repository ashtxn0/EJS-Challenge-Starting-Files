const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent =
  "Bacon ipsum dolor amet short ribs ham hock picanha porchetta spare ribs meatloaf. Shoulder boudin swine hamburger sirloin leberkas buffalo tenderloin strip steak chislic corned beef pork belly. Shoulder andouille beef ribs, landjaeger tongue pork belly meatloaf. Biltong ground round buffalo, pork loin burgdoggen chislic picanha pancetta chuck doner sirloin.";
const aboutContent =
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
const contactContent =
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(req,res){
  res.render("home", {homeDescription: homeStartingContent});
})

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
