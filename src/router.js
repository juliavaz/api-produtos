import { Router } from "express";

import authMiddleware from "./middlewares/auth.js";
import ProductController from "./controllers/ProductController.js";
import UserController from "./controllers/UserController.js";
import LoginController from "./controllers/LoginController.js";

const router = new Router();

router.get("/", async (req, res) => {
    res.send("Bem-Vindo!");
});

/** 
 * Incluir o middleware authMiddleware nas rotas de produtos, para garantir que 
 * essas operações sejam realizadas apenas a usuários autenticados.
 * 
 * Padrão de criação das rotas:
 * 
 * GET :: listar todos os produtos
 * GET :: listar um produto por id
 * POST :: criar novo produto
 * PUT :: editar produto por id
 * DELETE :: apagando produto por id
 */


// User
router.post("/users", UserController.create);

// POST :: criar login
router.post("/login", LoginController.login);

// Me (usuário autenticado)
router.get("/me", authMiddleware, UserController.listMe);
router.put("/me", authMiddleware, UserController.updateMe);
router.delete("/me", authMiddleware, UserController.deleteMe);

router.get("/produtos", ProductController.list);
router.get("/produtos/:id", ProductController.listOne);
router.post("/produtos", authMiddleware, ProductController.create);
router.put("/produtos/:id", authMiddleware, ProductController.update);
router.delete("/produtos/:id", authMiddleware, ProductController.deleteOne);

export default router;