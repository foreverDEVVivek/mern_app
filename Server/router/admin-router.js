const express=require('express');
const router=express.Router();
const adminController=require('../controllers/admin-controller.js');
const authMiddleware = require('../middlewares/auth-middleware.js');
const adminMiddleware=require('../middlewares/admin-middleware.js');

router.route("/users")
.get(authMiddleware,adminMiddleware,adminController.getAllUsers)

router.route("/contacts")
.get(authMiddleware,adminMiddleware,adminController.getAllContacts)

router.route('/services')
.get(authMiddleware,adminMiddleware,adminController.getAllServices);

module.exports=router;