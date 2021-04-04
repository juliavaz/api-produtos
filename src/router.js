import { Router } from "express";
import ProductController from "./controllers/ProductController.js";

const router = new Router();

// POST :: criar novo produto
router.post("/products", ProductController.create);

// GET :: listar todos os produtos
router.get("/products", ProductController.list);

// GET :: listar um produto por id
router.get("/products/:id", ProductController.listOne);

// PUT :: editar produto por id
router.put("/products/:id", ProductController.update);

// DELETE :: apagando produto por id
router.delete("/products/:id", ProductController.deleteOne);

export default router;