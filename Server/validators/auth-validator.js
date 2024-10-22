const {z}=require('zod');

//Creating an Object Schema
const signupSchema=z.object({
    username:z
    .string({required_error:"Name is Required"})
    .trim()
    .min(3,{message:"Name must be at least of 3 chars."})
    .max(255,{message:"Name must be no more than of 255 characters."}),

    email:z
    .string({required_error:"Email is Required"})
    .trim()
    .email({required_error:"Invalid Email Address"})
    .min(3,{message:"Email must be at least of 3 chars."})
    .max(255,{message:"Email must be no more than of 255 characters."}),

    phone:z
    .string({required_error:"Phone is Required"})
    .trim()
    .min(10,{message:"Number must be at least of 10 chars."})
    .max(20,{message:"Number must be no more than of 20 characters."}),

    password:z
    .string({required_error:"Password is Required"}) 
    .min(7,{message:"Password must be at least of 7 chars."})
    .max(1024,{message:"Password must be no more than of 1024 characters."}),
    
})


const loginSchema= z.object({
    email:z
    .string({required_error:"Email is Required"})
    .trim()
    .email({required_error:"Invalid Email Address"})
    .min(3,{message:"Email must be at least of 3 chars."})
    .max(255,{message:"Email must be no more than of 255 characters."}),
    
    password:z
    .string({required_error:"Password is Required"}) 
    .min(7,{message:"Password must be at least of 7 chars."})
    .max(1024,{message:"Password must be no more than of 1024 characters."}),
})

module.exports={signupSchema,loginSchema};