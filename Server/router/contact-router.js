const express=require('express');
const validate=require("../middlewares/validate-middleware");
const Router=express.Router();
const contactForm=require("../controllers/contact-controller.js");
const contactSchema=require("../validators/contact-validator.js");

Router.route("/contact")
.post(validate(contactSchema),contactForm);


module.exports=Router;