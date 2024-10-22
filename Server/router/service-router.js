const express=require('express');
const Router=express.Router();
const serviceController=require('../controllers/service-controller.js');

Router.route('/service')
.get(serviceController.services);

module.exports=Router;