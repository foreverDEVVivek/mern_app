const mongoose=require('mongoose');
require('dotenv').config();
const URL=`mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.ekiia.mongodb.net/`;

async function connectMongoDB() {
    return await mongoose.connect(URL);
}


module.exports=connectMongoDB;