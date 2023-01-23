const Product = require('../model/product.model');

exports.updateProduct = (request,response,next)=>{
 let id = request.body.id;
  Product.updateOne({_id: id},{
    $set: {
      name: request.body.name,
      price: request.body.price*1,
      description: request.body.description
    }
  }).then(result=>{
     if(result.modifiedCount!=0){
       Product.findOne({_id: id}).then(result=>{
         return response.status(202).json(result);
       }).catch(err=>{
         return response.status(500).json({error: "Server Error"});
       });
     }
     else
       return response.status(404).json({error: 'Request Resouce is not found'});
  }).catch(err=>{
    return response.status(404).json({error: 'Server Error'});
  });
  // 
}
// delete operation
/*
  1. hard delete operation
  2. soft delete operation / update operation
     In case of soft delete basically we toggle the status field

*/

exports.deleteProduct = async (request,response,next)=>{
    let product = await Product.findById(request.body.id);
    if(product){
        let result = await Product.deleteOne({_id: request.body.id});
        return response.status(202).json({message: 'success', data: product});
    }
    else
     return response.status(404).json({message: 'Not Found'});
    /*
   let product = await Product.findById(request.body.id);
   if(product){
    Product.deleteOne({_id: request.body.id}).then(result=>{
        if(result.deletedCount)
          return response.status(202).json({message: 'success',data: product});
      }).catch(err=>{
        return response.status(500).json({message: 'failed'});
    });  
   }
   else
     return response.status(404).json({message: 'Not found..'});
   */
     /* 
   Product.findById(request.body.id).then(product=>{
      if(product){
        Product.deleteOne({_id: request.body.id}).then(result=>{
            if(result.deletedCount)
              return response.status(202).json({message: 'success',data: product});
          }).catch(err=>{
            return response.status(500).json({message: 'failed'});
          });     
      }
   }).catch(err=>{
     return response.status(404).json({message: 'Not found..'});
   });
   */
     
}

exports.productList = (request,response,next)=>{
   Product.fetchAllProduct().then(result=>{
     return response.status(200).json(result);
   }).catch(err=>{
     return response.status(500).json({error: "Server Error"});
   });
   /*
    Product.find().then(result=>{
        return response.status(200).json(result);
    }).catch(err=>{
        return response.status(500).json({error: 'Interal Servver Error....'});
    });
   */ 
}
exports.save = (request,response,next)=>{
  Product.create({
      name: request.body.name,
      price: request.body.price,
      description: request.body.description
  }).then(result=>{
    return response.status(203).json(result);
  }).catch(err=>{
    return response.status(500).json({error: 'Internal Server Error'});
  });
}