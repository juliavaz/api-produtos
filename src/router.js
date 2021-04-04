import { Router } from "express";
import ProductController from "./controllers/ProductController.js";

const router = new Router();

// POST :: criar novo produto
router.post("/produtos", ProductController.create);

// GET :: listar todos os produtos
router.get("/produtos", ProductController.list);

// GET :: listar um produto por id
router.get("/produtos/:id", ProductController.listOne);

// PUT :: editar produto por id
router.put("/produtos/:id", ProductController.update);

// DELETE :: apagando produto por id
router.delete("/produtos/:id", ProductController.deleteOne);

export default router;