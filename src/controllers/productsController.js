import { getAllProducts, createProduct, updateProduct, deletedProduct } from "../services/ProductsService.js";

const get = async (req, res, next) => {
    try {
        const products = await getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(error).json(error.message);
    }
}

const create = async (req, res) => {
    try {
        const { name, description, price, stock } = req.body;

        if (!name || !description || !price || !stock) {
            throw new Error('EL nombre, descripción, precio y el stock son campos obligatorios.')
        }
        let product = {
            name,
            description,
            price,
            stock
        };
        const result = await createProduct(product)
        res.status(201).json({ data: result, message: 'Product created successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const update = async (req, res) => {
    try {
        console.log(req.body);
        const { id, name, description, price, stock } = req.body;
        if (!name || !description || !price || !stock) {
            throw new Error('EL nombre, descripción, precio y el stock son campos obligatorios.')
        }
        let product = {
            name,
            description,
            price,
            stock
        };
        const result = await updateProduct(id, product)
        res.status(201).json({ data: result, message: 'Product updated successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deleted = async (req, res) => {
    try {
        console.log(req.body);
        const { id } = req.body;
        const result = await deletedProduct(id)
        res.status(201).json({ data: result, message: 'Product deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



export {
    get,
    create,
    update,
    deleted
}