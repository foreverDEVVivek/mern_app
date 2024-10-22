const  mongoose = require('mongoose');
const Service=require('../models/service-model.js');
const initData=require('./data.js');

const URL=`mongodb+srv://admin:admin@cluster0.ekiia.mongodb.net/`;

async function connectMongoDB() {
    return await mongoose.connect(URL);
}
connectMongoDB().then(()=>{
    console.log("Connected DB Successfully...")
}).catch((error)=>{
    console.log(error)
})

async function init(){
  await Service.insertMany(initData.data);

}
// init();