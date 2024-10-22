const express=require('express');
const authRouter=require("./router/auth-router.js");
const contactRoute=require("./router/contact-router.js");
const adminRoute=require("./router/admin-router.js");
const app=express();
const PORT=8080;
const cors = require('cors')
const {storage}=require('./utils/cloudConfig.js');
const multer  = require('multer')
const upload = multer({ dest: storage });
const serviceRoute=require('./router/service-router.js');
require('dotenv').config();
const errorMiddleware=require('./middlewares/error-middleware.js');
const connectMongoDB=require('./utils/db.js');

app.use(cors({
    origin:"http://localhost:5173",
    methods:"POST,PUT,GET,DELETE,PATCH",
}))
app.use(express.json());

app.use('/api/auth',authRouter);
app.use('/api/form',contactRoute);
app.use('/api/data',serviceRoute);
app.use('/api/admin',adminRoute);

app.get('/',(req,res)=>{    
    res.json({"hello":"WOrld"}) ;
})

app.use(errorMiddleware);

connectMongoDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server Running on .... ${PORT}`);
    })
}).catch((error)=>{
    console.log(error);
})