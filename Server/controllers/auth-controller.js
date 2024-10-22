const User=require('../models/user-model.js');
const bcrypt=require('bcryptjs');
//*_____________________________

//* User Registration Logic
//*_____________________________

const register=async(req,res)=>{
    try {
        const {username,email,phone,password}=req.body;
        const userExist=await User.findOne({email});
        if(userExist){
            return res.status(400).json({msg:"Email already exist"});
        }

        //Hash the password..
        const saltRound=10;
        const hash_password=await bcrypt.hash(password,saltRound);
        const newUser=await User.create({username,email,phone,password:hash_password});
        res.status(201).json({msg:"Registration successful", token:await newUser.generateToken()});

    } catch (error) {
        console.log(error)
    }
    }
    

//*_______________________________

//*User Login Functionality
//*______________________________

const login=async(req,res)=>{
try {
    const {email,password}=req.body;

    const userExist= await User.findOne({email});
    if(!userExist){
        return res.status(400).json({message:"You're not registered yet!"});
    }
    //Checking password
    const user= await userExist.comparePassword(password);

    if(user){
        res.status(200).json({msg:"Login successful", 
        token:await userExist.generateToken(),
        userId:userExist._id});
    }
    else{
        res.status(400).json({msg:"Invalid Credentials"});
    }

} catch (error) {
    res.status(500).json("Internal Server Error!");
}
}


//*_______________________________

//* User details sharing - Frontend
//*______________________________

const user=async(req,res)=>{
    try {
        const data=req.user;
        res.status(200).json({data});
    } catch (error) {
        res.status(404).json({message:"Unauthorized User Please login first"});
    }
}

module.exports={register,login,user}