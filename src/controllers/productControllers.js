import product from '../data/products.js';


const getProducts = (req, res,next) => {
    try {
        const products = product;
        res.status(200).json({ status: '200', total: products.length, message: 'Products fetched successfully', data: products, });
    } catch (error) {
        next(error);
    }
}

const getProductById = (req, res,next) => {
    try {
        const productId = parseInt(req.params.id);
        const productById = product.find(p => p.id === productId);

        if (!productById) {
            res.status(404).json({ status: '404', message: 'Product not found' });
            return
        } else {
            res.status(200).json({ status: '200', message: 'Product fetched successfully', data: productById });
        }
    } catch (error) {
        next(error);
    }
}

const createProduct = (req, res,next) => {
    try {
        const { name, price, category, stock } = req.body;
        const newProduct = {
            id: product.length + 1,
            name,
            price,
            category,
            stock
        }

        product.push(newProduct);
        res.status(201).json({ status: '201', message: 'Product created successfully', data: newProduct });

    } catch (error) {
            next(error);
    }
}

const updateProduct = (req, res,next) => {
    try {
        const productId = parseInt(req.params.id);
        const productById = product.find(p => p.id === productId);
        const productIndex = product.findIndex(p => p.id === productId);

        if (!productById) {
            res.status(404).json({ status: '404', message: 'Product not found' });
            return
        } else {
            const { name, price, category, stock } = req.body;
            product.splice(productIndex, 1, { ...productById, ...{ name, price, category, stock } });
            res.status(200).json({ status: '200', data: product[productIndex], message: 'Product updated successfully' });
        }
    } catch (error) {
        next(error);
    }
}

const delProduct = (req, res,next) => {
    const productId = parseInt(req.params.id);
    const productIndex = product.findIndex(p => p.id === productId);
    try {

        if (productIndex === -1) {
            res.status(404).json({ status: '404', message: 'Product not found' });
            return
        }

        product.splice(productIndex, 1);
        res.status(200).json({ status: "200", "message": "Product deleted successfully" });


    } catch (error) {
        next(error);
    }
}


export {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    delProduct,
}