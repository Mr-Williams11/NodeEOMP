import { getProducts, getProduct, addProduct, editProduct, deleteProduct } from "../models/Products.js";

export default {
    getProducts: async (req, res) => {
        try {
            const products = await getProducts();
            res.send(products);
        } catch (error) {
            res.status(500).send({ error: 'Internal Server Error' });
        }
    },
    getProduct: async (req, res) => {
        try {
            const productId = +req.params.prodID;
            const product = await getProduct(productId);
            if (!product) {
                res.status(404).send({ error: 'Product not found' });
                return;
            }
            res.send(product);
        } catch (error) {
            res.status(500).send({ error: 'Internal Server Error' });
        }
    },
    addProduct: async (req, res) => {
        try {
            const { prodID, prodName, quantity, amount, Category, prodUrl } = req.body;
            await addProduct(prodID, prodName, quantity, amount, Category, prodUrl);
            res.send({
                msg: 'New Product Added'
            });
        } catch (error) {
            res.status(500).send({ error: 'Internal Server Error' });
        }
    },
    editProduct: async (req, res) => {
        try {
            const [product] = await getProduct(+req.params.prodID);
            if (!product) {
                res.status(404).send({ error: 'Product not found' });
                return;
            }
            let { prodName, quantity, amount, Category, prodUrl } = req.body;
            prodName = prodName || product.prodName;
            quantity = quantity || product.quantity;
            amount = amount || product.amount;
            Category = Category || product.Category;
            prodUrl = prodUrl || product.prodUrl;
            await editProduct(prodName, quantity, amount, Category, prodUrl, +req.params.prodID);
            res.json(await getProducts());
            res.status(200).send({ msg: 'Edited Product Successfully' });
        } catch (error) {
            res.status(500).send({ error: 'Internal Server Error' });
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const deletedProduct = await deleteProduct(req.params.prodID);
            if (!deletedProduct) {
                res.status(404).send({ error: 'Product not found' });
                return;
            }
            res.send({
                msg: 'Product Deleted Successfully'
            });
        } catch (error) {
            res.status(500).send({ error: 'Internal Server Error' });
        }
    }
};
