const validate=(schema)=>async(req,res,next)=>{
try {
    const parseBody=await schema.parseAsync(req.body);
    req.body=parseBody;
    next();
} catch (error) {
    const err={
        status:422,
        message:error.errors[0].message,
        extraDetails:"Please fill the input properly"
    }
    next(err);
}
}

module.exports=validate;