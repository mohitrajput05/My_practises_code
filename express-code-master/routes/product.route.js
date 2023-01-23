import express  from 'express';
const router = express.Router();
import productController from '../controller/product.controller.js';

// http://localhost:3000/product/save
router.post("/save",productController.saveProduct);

// http://localhost:3000/product/product-list
router.get("/product-list",productController.productList);

router.post("/update",productController.updateProduct);

router.get("/delete/:id",productController.deleteProduct)

export default router;
