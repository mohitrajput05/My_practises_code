const mongoose = require("mongoose");
// Mongoose Schema :- Represent the
//structure of document
// Monoose Model :- It represent the data
// Mongoose schema less NoSQL
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true,
        validate:{
            validator: function(v){
                return v>10;
            }
        }
    },
    description:{
        type: String
    }
},
{versionKey: false});
productSchema.statics.fetchAllProduct = function(){
    return this.find();
    /*
    return new Promise((resolve,reject)=>{
        this.find().then(result=>{
            resolve(result);
        }).catch(err=>{
            reject(err);
        })
    });
    */
}
module.exports = mongoose.model("product",productSchema);
