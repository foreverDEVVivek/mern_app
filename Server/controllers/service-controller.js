const Service=require('../models/service-model.js');

const services=async(req,res)=>{
    try {
        const allServices=await Service.find({});
        res.status(200).json({allServices});
    } catch (error) {
        res.status(400).json({message:"Error while loading Services"});      
    }
}

module.exports={services};