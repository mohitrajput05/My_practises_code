const express = require('express');
const router = express.Router();
const productController = require('../controller/product.controller');
router.post("/save",productController.save);
router.get("/product-list",productController.productList);
router.post("/delete",productController.deleteProduct);
router.post("/update",productController.updateProduct);
module.exports = router;