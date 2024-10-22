const express=require('express');
const router=express.Router();
const validate=require("../middlewares/validate-middleware");
const {signupSchema,loginSchema}=require("../validators/auth-validator");
const authControllers=require("../controllers/auth-controller");
const authMiddleware=require('../middlewares/auth-middleware.js');

router.route('/register')
.post(validate(signupSchema),authControllers.register);

router.route('/login')
.post(validate(loginSchema),authControllers.login);

router.route('/user')
.get(authMiddleware,authControllers.user);


module.exports=router;