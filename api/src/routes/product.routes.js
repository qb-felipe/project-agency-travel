const router = require('express-promise-router')();
const productController = require('../controllers/product.controller');

// Rota responsável por criar um novo Pacote: (POST): localhost:3000/api/products
 router.post('/products', productController.createProduct);

// router.post('/products', (req, res) => {
//     productController.createProduct;
// });


module.exports = router;