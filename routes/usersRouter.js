import express from "express";
import { createUser, getUser } from "../controllers/userController.js";
const router = express.Router();

router.use( express.json());

// Retorna la lista de Usuarios
router.get('/', getUser )

// Agregar un Usuario
router.post('/', createUser)

export default router;