import routes from 'express';
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    delProduct
} from '../../controllers/productControllers.js';
import  middleware from '../../middleware/middleware.js'
import { validateProduct } from '../../middleware/validation.js'


const productRoutes = routes()

productRoutes.get('/products', getProducts);

productRoutes.post('/products', validateProduct, createProduct);

productRoutes.put('/products/:id',middleware,validateProduct, updateProduct);

productRoutes.delete('/products/:id', middleware, delProduct);

productRoutes.get('/products/:id',middleware, getProductById);

export default productRoutes;
