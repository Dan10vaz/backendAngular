import Products from '../models/ProductsModel.js'

const getAllProducts = async () => {
    return await Products.findAll();
}

const createProduct = async (product) => {
    const newProduct = new Products(product);
    return await newProduct.save();
}

const updateProduct = async (id, product) => {
    return await Products.update(product, {
        where: {
            id: id
        }
    })
}

const deletedProduct = async (id) => {
    return await Products.destroy({
        where: {
            id: id
        }
    })
}

export {
    getAllProducts,
    createProduct,
    updateProduct,
    deletedProduct
}