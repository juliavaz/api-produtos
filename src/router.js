import { Router } from "express";
import Products from "./models/Products.js";

const router = new Router();

router.get("/", async (req, res) => {
    await Products.create({
      nome: 'Inspiron',
      marca: 'Dell',
      categoria: 'Eletrônico'
    }, (err) => {
      if(err) return res.status(400).json({
        error: "Produto não foi cadastrado com sucesso."
      });
      return res.status(200).json({
        Success: " Produto foi cadastrado com sucesso!"
      });
    });
});

// GET :: listar todos os produtos
router.get("/products", async (req, res) => {
  return res.json({produtos});
});

// GET :: listar um produto por id
router.get("/products/:id", (req, res) => {
    const { id } = req.params;

    return res.json({
        id : products[id]
    });
});

// POST :: criar novo produto
router.post("/products", (req, res) => {
    const { nome, marca, categoria } = req.body;

    products.push({
      "nome" : nome, 
      "marca" : marca, 
      "categoria" : categoria
    });
    
    return res.json(products);
});

// PUT :: editar produto por id
router.put("/products/:id", (req, res) => {
    const { id } = req.params;
    const { nome, marca, categoria } = req.body;
    
    products[id].nome = nome;
    products[id].marca = marca;
    products[id].categoria = categoria;

    return res.json({products});
});

// DELETE :: apagando produto por id
router.delete("/products/:id", (req, res) => {
    const {id} = req.params;
    products.splice(id, 1);

    return res.json({products});
});

export default router;