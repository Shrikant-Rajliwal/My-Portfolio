var express = require('express');
var router = express.Router();
const data = require("./users");



/* GET home page. */
router.get('/', async function(req, res, next) {
  // var info = await data.find();
  // console.log(info);
  res.render("first.ejs")
 
});
router.get('/education', async function(req, res, next) {
  // var info = await data.find();
  // console.log(info);
  res.render("education.ejs")
 
});
router.get('/experience', async function(req, res, next) {
  // var info = await data.find();
  // console.log(info);
  res.render("experience.ejs")
 
});
router.get('/projects', async function(req, res, next) {
  // var info = await data.find();
  // console.log(info);
  res.render("projects.ejs")
 
});
router.get('/contact', async function(req, res, next) {
  // var info = await data.find();
  // console.log(info);
  res.render("contact.ejs")
 
});

router.post("/getdata",(req,res)=>{
  var newUser = new data({
  name : req.body.name,
  email : req.body.email,
  password : req.body.password
  })

  newUser.save();

  res.redirect("/");
})


module.exports = router;



