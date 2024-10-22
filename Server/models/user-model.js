const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
require('dotenv').config();
const jwt=require('jsonwebtoken');

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,  
    }

})

//? Secure the password with the bcrypt
userSchema.pre('save',async function(next){
    const currUser=this;
    if(!currUser.isModified('password')){
        next();
    }
    try {
        const saltRound=await bcrypt.genSalt(10);
        const hash_password=await bcrypt.hash(currUser.password,saltRound)
        currUser.password=hash_password;
    } catch (error) {
        next(error);
    }
})


//? Comparing Password
userSchema.methods.comparePassword= async function(password){

    const saltRound=10;
    const hashedPassword= await bcrypt.hash("password",saltRound);
    const compared=await bcrypt.compare("password", hashedPassword);
    
    return await bcrypt.compare(password,this.password); 
}
//? json web token
userSchema.methods.generateToken=async function(){
    try {
        return jwt.sign({
            userId:this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin,
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn:"240000"
        }
    )
    } catch (error) {
     console.log(error)   
    }

}
const User=mongoose.model("User",userSchema);

module.exports=User;