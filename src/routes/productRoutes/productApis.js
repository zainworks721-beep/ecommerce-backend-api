import routes from 'express';
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    delProduct
} from '../../controllers/productControllers.js';
import roleChecker from '../../middleware/roleChecker.js';
import middleware from '../../middleware/middleware.js';
import { validateProduct } from '../../middleware/validation.js'


const productRoutes = routes()

productRoutes.get('/products', middleware, getProducts);

productRoutes.post('/products', validateProduct, createProduct);

productRoutes.put('/products/:id', middleware, roleChecker, validateProduct, updateProduct);

productRoutes.delete('/products/:id', middleware, roleChecker, delProduct);

productRoutes.get('/products/:id', roleChecker, getProductById);

export default productRoutes;
