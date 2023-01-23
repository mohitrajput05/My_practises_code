const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productRouter = require('./routes/product.router');
const bodyParser = require('body-parser');
require('dotenv').config();
const userRouter = require('./routes/user.router');
/*
  GMAIL : Credential
  TWilio : Credential
  RAZORPAY : credential 
*/ 
mongoose.connect(process.env.DB_URL,(err)=>{
    if(!err){
     app.use(bodyParser.json());
     app.use(bodyParser.urlencoded({extended: true}));

     // http://localhost:3000/product/save
     app.use("/user",userRouter);
     app.use("/product",productRouter);
     app.listen(process.env.PORT,()=>{
       console.log("server running...");
     })
    }
    else
      console.log("Mongoose Connection Error..");
})
