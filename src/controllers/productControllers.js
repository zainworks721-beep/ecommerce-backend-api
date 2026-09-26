
import Product from '../model/product.model.js'


const getProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        res.status(200).json({ status: '200', total: products.length, message: 'Products fetched successfully', data: products, });
    } catch (error) {
        next(error);
    }
}

const getProductById = async (req, res, next) => {
    try {
        const productId = req.params.id;
        const productById = await Product.findById(productId)

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

const createProduct = async (req, res, next) => {
    try {
        const { name, price, category, stock } = req.body;
        const newProduct = {
            name,
            price,
            category,
            stock
        }

        let product = await Product.create(newProduct)

        if (product) {
            res.status(201).json({ status: '201', message: 'Product created successfully', data: product });
        }


    } catch (error) {
        next(error);
    }
}

const updateProduct = async (req, res, next) => {
    try {
        const productId = req.params.id

        const { name, price, category, stock } = req.body;
        let updatedProducts = await Product.findByIdAndUpdate(productId, { name, price, category, stock }, { new: true })
        if (!updatedProducts) {
            res.status(404).json({ status: '404', message: 'Product not found' });
            return
        }
        res.status(200).json({ status: '200', data: updatedProducts, message: 'Product updated successfully' });
    }
    catch (error) {
        next(error);
    }
}

const delProduct = async (req, res, next) => {

    try {
    const productId = req.params.id
    const productIndex = await Product.findByIdAndDelete(productId)

    if(!productIndex) {
        res.status(404).json({ status: '404', message: 'Product not found' });
        return;
    }
    if(productIndex) {
        res.status(200).json({ status: '200', message: 'Product deleted successfully' });
    }

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