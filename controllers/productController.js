import Product from "../models/productModel.js";
const errorName = 'Revisar el campo nombre';

async function createProduct(request, response){
    try {
        const product = request.body;

        if( product.name.trim() == ''){
            response.status(400).json({ message: errorName, data: []});
        } else {
            const newProduct = new Product(request.body);
            await newProduct.save();
            response.status(200).json({ message: 'Ok', newProduct});
        }
        
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: error, data: []});
    }
}

async function getProducts( request, response){
    try {
        const products = await Product.find()
        console.log(products)
        response.status(200).json({message: 'Ok', data: products});

    } catch (error) {
        console.error(error);
        response.status(500).json({message: error, data: []});
    }
}

export { createProduct, getProducts}