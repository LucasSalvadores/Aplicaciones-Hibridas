import express from "express";
import { createPayments, getPayments } from "../controllers/paymentsController.js";
const router = express.Router();

router.use( express.json());

// Retorna los medios de pago
router.get('/', getPayments)

// Agregar un medio de pago
router.post('/', createPayments)

export default router;