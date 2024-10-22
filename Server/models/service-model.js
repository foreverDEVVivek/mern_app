const mongoose=require('mongoose');

const service=mongoose.Schema({
    service:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    provider:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    }
})

const Service=mongoose.model('service',service);

module.exports=Service;
