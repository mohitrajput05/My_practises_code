import express from 'express';
import productRouter from './routes/product.route.js';
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// http://localhost:3000/product/save

app.use("/product",productRouter);

app.listen(3000,()=>{
    console.log("Server started....");
});