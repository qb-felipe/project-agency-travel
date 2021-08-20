const router = require('express-promise-router')();
const productController = require('../controllers/product.controller');

// Rota responsável por criar um novo Pacote: (POST): localhost:3333/api/products
 router.post('/products', productController.createProduct);

// Rota responsável por listar todos os pacotes: (GET): localhost:3333/api/products
router.get('/products', productController.listAllProducts);

// // Rota responsável por listar os pacotes através do ID (GET): localhost:3333/api/products
router.get('/products/:id', productController.findProductById);


router.put('/products/:id', productController.updateProductById);


module.exports = router;