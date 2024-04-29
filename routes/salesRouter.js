import express from "express";
import { createSale, getSale } from "../controllers/saleController.js";
const router = express.Router();

router.use( express.json());

// Retorna la lista de Ventas
router.get('/', getSale )

// Agregar una Venta
router.post('/', createSale)

export default router;