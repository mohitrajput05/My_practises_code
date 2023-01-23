import Product from '../model/product.model.js';
const saveProduct = (request,response,next)=>{
   let name = request.body.name;
   let price = request.body.price;
   let description = request.body.description;
   let product = new Product(null,name,price,description);
   product.saveProduct().then(result=>{
      return response.status(201).json({message: 'Product saved'});
   }).catch(err=>{
      return response.status(500).json({error: 'Internal Server Error'});
   });

};
const productList = (request,response,next)=>{
   Product.productList().then(results=>{
      return response.status(200).json(results);
   }).catch(err=>{
      return response.status(500).json({error: 'Internal Server Error'});
   });
}
const deleteProduct = (request,response,next)=>{
  let id = request.params.id;
  Product.delete(id).then(result=>{
   if(result.affectedRows)
     return response.status(200).json({message: 'Product deleted'});
   else
     return response.status(404).json({error: 'Requested resource not found/deleted'});  
  }).catch(err=>{
     return response.status(500).json({error: 'Internal Server Error'});
  });
}
const updateProduct = (request,response)=>{
   let id = request.body.id;
   let name = request.body.name;
   let price = request.body.price;
   let description = request.body.description;
   let product = new Product(id,name,price,description);
   product.update().then(result=>{
     if(result.affectedRows)
       return response.status(202).json({message: 'Product updated..'});
     else
       return response.status(404).json({error: 'Requested resource not found/updated'});  
   }).catch(err=>{
      return response.status(500).json({error: 'Internal Server Error'});
   });
}
export default {saveProduct,productList,deleteProduct,updateProduct};