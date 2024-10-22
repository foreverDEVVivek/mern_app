const {z} =require('zod');

const contactSchema=z.object({
    username:z.string({required_error:"Username is must"})
    .min(5,{message:"Minimum 5 character should be there in username"})
    .max(1024)
    .trim(),

    email:z.string()
    .email({message:"Please fill correct email"})
    .trim()
    .min(5,{message:"Email can't be of 5 characters"})
    .max(1024),

    message:z.string({required_error:"Please Type your concern"})
    .min(5,{message:"Message can't be less than of 5 characters"})
})

module.exports=contactSchema;