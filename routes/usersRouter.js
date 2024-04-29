import express from "express";
import { createUser, getUser, getUserById } from "../controllers/userController.js";
const router = express.Router();

router.use( express.json());

// Agregar un Usuario
router.post('/', createUser)

// Retorna la lista de Usuarios
router.get('/', getUser )

// Retorna la lista de Usuarios por id
router.get('/:id', getUserById )



export default router;