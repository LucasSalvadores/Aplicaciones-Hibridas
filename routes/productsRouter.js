import express from "express";
import { createProduct, getProducts, getProductsById } from "../controllers/productController.js";
const router = express.Router();

router.use( express.json());

// Agregar un Producto
router.post('/', createProduct)

// Retorna la lista de productos
router.get('/', getProducts)

// Retorna un producto por el ID
router.get('/:id', getProductsById)

export default router;