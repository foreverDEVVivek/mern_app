const jwt=require('jsonwebtoken');
const User=require('../models/user-model.js');


const authMiddleware=async(req,res,next)=>{
  try {
    const token=req.header('Authorization').replace("Bearer ","").trim();
    const jwtVerified=jwt.verify(token,process.env.JWT_SECRET_KEY);
    if (jwtVerified) {
    const user=await User.findById(jwtVerified.userId).select({password:0});
    req.user=user;
    req.token=token;
    req.userID=user._id;
    next(); 
    } else {
      throw new Error("Token has been expired please login again")
    }
  } catch (error) {
    res.status(400).json({message:"Your Token has been expired please login again"});
  }
}

module.exports=authMiddleware;